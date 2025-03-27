'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUtensils, FaWifi, FaCar, FaSpa, FaSwimmingPool, FaDumbbell, FaConciergeBell, FaBriefcase } from 'react-icons/fa';

const ServicesContent: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 md:h-96" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
      }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-xl text-white max-w-3xl">Experience comfort and luxury with our comprehensive range of hotel services.</p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Premium Hotel Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              We offer a wide range of services to make your stay comfortable, convenient, and memorable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaUtensils className="h-10 w-10" />,
                title: 'Restaurant & Bar',
                description: 'Enjoy delicious meals and refreshing drinks at our in-house restaurant and bar with a diverse menu of local and international cuisine.',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              },
              {
                icon: <FaSpa className="h-10 w-10" />,
                title: 'Spa & Wellness',
                description: 'Relax and rejuvenate with our spa treatments, including massages, facials, and body treatments by professional therapists.',
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              },
              {
                icon: <FaSwimmingPool className="h-10 w-10" />,
                title: 'Swimming Pool',
                description: 'Take a refreshing dip in our swimming pool or lounge by the poolside with comfortable seating and service.',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              },
              {
                icon: <FaDumbbell className="h-10 w-10" />,
                title: 'Fitness Center',
                description: 'Stay fit during your stay with our fully-equipped fitness center featuring modern exercise equipment and optional personal training.',
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              },
              {
                icon: <FaBriefcase className="h-10 w-10" />,
                title: 'Business Center',
                description: 'Access our business facilities including meeting rooms, conference equipment, printing, and high-speed internet for your work needs.',
                image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              },
              {
                icon: <FaCar className="h-10 w-10" />,
                title: 'Airport Transfer',
                description: 'Enjoy convenient and comfortable transportation between the airport and our hotel with our dedicated shuttle service.',
                image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 text-blue-600">
                      {service.icon}
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Service Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">24/7 Room Service</h2>
              <p className="mt-4 text-lg text-gray-500">
                Our dedicated staff is available around the clock to cater to your needs. From late-night snacks to early morning breakfast, we've got you covered.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'In-room dining with a diverse menu',
                  'Special dietary requirements accommodated',
                  'Fresh, locally-sourced ingredients',
                  'Quick service with attention to detail',
                  'Child-friendly options available'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link 
                  href="/rooms" 
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View Our Rooms
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Room service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Special Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Additional services to enhance your stay with us
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Business Travelers</h3>
              <ul className="space-y-3">
                {[
                  'Express check-in and check-out',
                  'Complimentary high-speed Wi-Fi',
                  'Business center with printing and scanning facilities',
                  'Meeting room rentals',
                  'Laundry and dry cleaning service',
                  'Secretarial services available on request'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-600">
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Leisure Travelers</h3>
              <ul className="space-y-3">
                {[
                  'Guided city tours and excursions',
                  'Childcare and babysitting services',
                  'Ticket booking for local attractions',
                  'Bicycle rentals',
                  'Customized spa packages',
                  'Special romantic setups for couples'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-600">
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience our services?</span>
            <span className="block text-blue-200">Book your stay today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Book Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent; 