import { useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

export const useUserTracking = () => {
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      trackUserActivity()
    }
  }, [user])

  const trackUserActivity = async () => {
    if (!user) return

    try {
      // Insert or update user activity
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
}
