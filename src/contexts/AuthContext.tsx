import React, { createContext, useContext, useEffect, useState } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session) // Debug log
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)

      // Track user activity on sign in
      if (event === 'SIGNED_IN' && session?.user) {
        await trackUserActivity(session.user)
      }

      // Handle sign out
      if (event === 'SIGNED_OUT') {
        setUser(null)
        setSession(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const trackUserActivity = async (user: User) => {
    try {
      const { error } = await supabase
        .from('user_activity')
        .upsert({
          id: user.id,
          email: user.email,
          full_name: user.user_metadata?.full_name || null,
          last_sign_in_at: new Date().toISOString(),
          created_at: user.created_at,
        }, {
          onConflict: 'id'
        })

      if (error) {
        console.error('Error tracking user activity:', error)
      }
    } catch (error) {
      console.error('Error tracking user activity:', error)
    }
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    })
    if (error) {
      console.error('Error logging in:', error.message)
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Sign out error:', error.message)
      }
      // Clear local state regardless
      setUser(null)
      setSession(null)
    } catch (error) {
      console.error('Sign out failed:', error)
      // Clear local state even on error
      setUser(null)
      setSession(null)
    }
  }

  const value = {
    user,
    session,
    loading,
    signInWithGoogle,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
