'use client'
import React from 'react';
import Image from 'next/image';
import { FaHotel, FaAward, FaUsers, FaBuilding } from 'react-icons/fa';

const AboutContent: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 md:h-96" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
      }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-xl text-white max-w-3xl">Discover the story behind HotelManager and our commitment to exceptional hospitality.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Founded in 2010, HotelManager has grown from a small local hotel to a renowned hospitality brand.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Hotel lobby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-600 mb-4">
                  HotelManager was born from a passion for exceptional hospitality and a vision to create memorable experiences for every guest. What started as a single boutique hotel has evolved into a comprehensive hotel management system serving properties worldwide.
                </p>
                <p className="text-gray-600">
                  Our journey has been defined by a commitment to innovation, excellence, and personalized service. We understand that every hotel is unique, and we've built our platform to be flexible, powerful, and intuitive for both hotel staff and guests alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <FaAward className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, constantly raising the bar for hospitality standards.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <FaUsers className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  We place our customers at the center of everything we do, anticipating their needs and exceeding expectations.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <svg className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We embrace technology and new ideas to continuously improve and lead the hospitality industry forward.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <svg className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical standards in all our business relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Meet the people who drive our vision forward
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                bio: 'With over 20 years in hospitality, Sarah founded HotelManager with a vision to transform hotel operations.'
              },
              {
                name: 'David Chen',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                bio: 'David leads our technological innovation, bringing extensive experience in software development and hotel management systems.'
              },
              {
                name: 'Michelle Rodriguez',
                role: 'COO',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                bio: 'Michelle oversees our daily operations, ensuring we deliver consistent, high-quality service to all our clients.'
              }
            ].map((person, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image 
                    src={person.image} 
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                  <p className="text-blue-600 font-medium">{person.role}</p>
                  <p className="mt-3 text-gray-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent; 