'use client'

import React from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaHotel } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-8 text-white text-center">
          <FaHotel className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl">Room Not Found</p>
        </div>
        
        <div className="p-8">
          <p className="text-gray-600 text-center mb-6">
            Sorry, it seems the room you're looking for has been checked out or doesn't exist.
          </p>
          
          <div className="flex justify-center space-y-4 flex-col">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              <FaArrowLeft className="h-4 w-4" />
              <span>Return to Lobby</span>
            </Link>
            
            <Link
              href="/rooms"
              className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition duration-300"
            >
              <span>View Available Rooms</span>
            </Link>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-gray-500 text-center">
        If you believe this is an error, please contact our front desk.
      </p>
    </div>
  )
} 