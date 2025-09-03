import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import UserTracker from './Components/UserTracker'
import { useAuth } from '../../contexts/AuthContext'

const AdminDashboard: React.FC = () => {
  const { user } = useAuth()

  // Simple admin check - you can enhance this with proper role-based access
  const isAdmin = user?.email === 'admin@dcg.com' // Replace with your admin email

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#020F59] mb-4">Access Denied</h2>
            <p className="text-gray-600">Please log in to access the admin dashboard.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#020F59] mb-4">Access Denied</h2>
            <p className="text-gray-600">You don't have permission to access this page.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#020F59] mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Monitor user activity and manage your website.</p>
          </div>
          
          <div className="grid gap-8">
            <UserTracker />
            
            {/* Add more admin components here */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#020F59] mb-4">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#020F59]">Total Users</h3>
                  <p className="text-2xl font-bold text-[#020F59]">--</p>
                  <p className="text-sm text-gray-600">Registered users</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700">Active Today</h3>
                  <p className="text-2xl font-bold text-green-700">--</p>
                  <p className="text-sm text-gray-600">Users signed in today</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-700">This Week</h3>
                  <p className="text-2xl font-bold text-purple-700">--</p>
                  <p className="text-sm text-gray-600">New sign-ups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboard
