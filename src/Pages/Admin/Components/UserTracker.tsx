import React, { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase'

interface UserActivity {
  id: string
  email: string
  full_name?: string
  last_sign_in_at: string
  created_at: string
}

const UserTracker: React.FC = () => {
  const [users, setUsers] = useState<UserActivity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      // Note: This requires admin privileges or a database function
      // For now, we'll track in a custom table when users log in
      const { data, error } = await supabase
        .from('user_activity')
        .select('*')
        .order('last_sign_in_at', { ascending: false })

      if (error) {
        console.error('Error fetching users:', error)
      } else {
        setUsers(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#020F59]"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[#020F59] mb-6">User Activity</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Last Sign In</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200">
                <td className="px-4 py-2 text-sm text-gray-900">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{user.full_name || 'N/A'}</td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {new Date(user.last_sign_in_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No user activity recorded yet.
          </div>
        )}
      </div>
    </div>
  )
}

export default UserTracker
