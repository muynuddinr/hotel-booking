'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaConciergeBell, FaUtensils, FaBed, FaSpa, FaWifi, FaShieldAlt, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
            alt="Luxury Hotel"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Exceptional Hospitality & Seamless Management
            </h1>
            <p className="mt-6 text-xl text-white">
              Streamline your hotel operations and provide unforgettable experiences for your guests with our comprehensive management system.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/bookings" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition-colors shadow-lg hover:shadow-xl"
              >
                Manage Bookings
              </Link>
              <Link 
                href="/rooms" 
                className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg text-center transition-colors shadow-lg hover:shadow-xl"
              >
                View Rooms
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Booking Search Bar */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in / Check-out</label>
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Select dates" className="block w-full focus:outline-none text-gray-700" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <FaBed className="h-5 w-5 text-gray-400 mr-2" />
                    <select className="block w-full focus:outline-none text-gray-700 bg-transparent">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors font-medium flex items-center justify-center space-x-2">
                    <span>Check Availability</span>
                    <FaArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Complete Hotel Management Solution</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your hotel efficiently and provide exceptional service to your guests.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBed className="h-8 w-8" />,
                title: 'Room Management',
                description: 'Efficiently manage room inventory, assignments, and maintenance schedules.'
              },
              {
                icon: <FaCalendarAlt className="h-8 w-8" />,
                title: 'Booking System',
                description: 'Handle reservations, check-ins, and check-outs with a user-friendly interface.'
              },
              {
                icon: <FaConciergeBell className="h-8 w-8" />,
                title: 'Guest Services',
                description: 'Track guest preferences and requests to provide personalized experiences.'
              },
              {
                icon: <FaUtensils className="h-8 w-8" />,
                title: 'Restaurant & Services',
                description: 'Manage dining reservations, room service, and additional hotel amenities.'
              },
              {
                icon: <FaWifi className="h-8 w-8" />,
                title: 'Digital Access',
                description: 'Enable digital check-ins, mobile keys, and online service requests.'
              },
              {
                icon: <FaShieldAlt className="h-8 w-8" />,
                title: 'Secure System',
                description: 'Protect guest information and payment data with enterprise-grade security.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-md text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Rooms Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Rooms</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully designed rooms and suites for an unforgettable stay.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Deluxe King Room',
                image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
                price: 199,
                description: 'Spacious room with king-sized bed, en-suite bathroom, and city view.'
              },
              {
                name: 'Executive Suite',
                image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
                price: 299,
                description: 'Luxurious suite with separate living area, king-sized bed, and premium amenities.'
              },
              {
                name: 'Family Room',
                image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
                price: 249,
                description: 'Perfect for families with two queen beds and extra space for children.'
              }
            ].map((room, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image 
                    src={room.image} 
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                    <div className="text-lg font-bold text-blue-600">${room.price}<span className="text-sm text-gray-500">/night</span></div>
                  </div>
                  <p className="mt-2 text-gray-600">{room.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      href={`/rooms/${index + 1}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      <span>View Details</span>
                      <FaArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                    <Link 
                      href={`/book?room=${index + 1}`} 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/rooms"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-300"
            >
              View All Rooms <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section - UPDATED VERSION */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Guests Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it — hear from our satisfied guests.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                location: 'New York, USA',
                text: 'The staff was incredibly attentive and the room exceeded my expectations. Will definitely be staying here again on my next business trip.'
              },
              {
                name: 'Emily Johnson',
                location: 'London, UK',
                text: 'Beautiful hotel with amazing amenities. The spa service was world-class and the restaurant offered delicious options for every meal.'
              },
              {
                name: 'Michael Wong',
                location: 'Singapore',
                text: 'Perfect location with stunning views. The digital room key made check-in seamless, and the concierge service helped make our family vacation unforgettable.'
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <span className="text-lg font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mb-4 text-blue-500">
                  <FaQuoteLeft className="h-6 w-6 opacity-50" />
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Experience Exceptional Hospitality?</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Book your stay with us today and discover why our guests keep coming back.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/book" 
                className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg text-center transition-colors shadow-lg hover:shadow-xl"
              >
                Book Your Stay
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border border-white text-white hover:bg-blue-700 font-medium rounded-lg text-center transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Quick Links */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaSpa className="h-10 w-10" />,
                title: 'Spa & Wellness',
                description: 'Relax and rejuvenate with our premium spa treatments and wellness facilities.',
                link: '/services'
              },
              {
                icon: <FaUtensils className="h-10 w-10" />,
                title: 'Restaurant & Bar',
                description: 'Enjoy delicious cuisine and refreshing drinks at our in-house restaurant and bar.',
                link: '/services'
              },
              {
                icon: <FaConciergeBell className="h-10 w-10" />,
                title: 'Concierge Services',
                description: 'Let our dedicated concierge team assist with all your needs during your stay.',
                link: '/services'
              },
              {
                icon: <FaWifi className="h-10 w-10" />,
                title: 'Business Facilities',
                description: 'Stay productive with our modern business center and meeting rooms.',
                link: '/services'
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
