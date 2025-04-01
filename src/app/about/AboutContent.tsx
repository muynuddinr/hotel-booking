'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaHotel, FaAward, FaUsers, FaLightbulb, FaHandshake, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutContent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Improved with overlay gradient */}
      <div className="relative bg-cover bg-center h-80 md:h-[500px]" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">About <span className="text-blue-300">Us</span></h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-100 max-w-3xl font-light">
              Discover the story behind HotelManager and our commitment to exceptional hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <FaChevronRight className="mx-2 text-xs text-gray-400" />
            <span className="text-gray-800 font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Our Story Section - Improved layout and animation */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center" data-aos="fade-up">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Journey</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Founded in 2010, HotelManager has grown from a small local hotel to a renowned hospitality brand.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl" data-aos="fade-right">
                <Image 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Hotel lobby"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center" data-aos="fade-left">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  HotelManager was born from a passion for exceptional hospitality and a vision to create memorable experiences for every guest. What started as a single boutique hotel has evolved into a comprehensive hotel management system serving properties worldwide.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our journey has been defined by a commitment to innovation, excellence, and personalized service. We understand that every hotel is unique, and we've built our platform to be flexible, powerful, and intuitive for both hotel staff and guests alike.
                </p>
                <div className="mt-8">
                  <div className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer">
                    Learn more about our journey
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values - Improved with consistent icons and better cards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16" data-aos="fade-up">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Believe</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaAward className="h-12 w-12 text-blue-600" />,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service, constantly raising the bar for hospitality standards."
                },
                {
                  icon: <FaUsers className="h-12 w-12 text-blue-600" />,
                  title: "Customer Focus",
                  description: "We place our customers at the center of everything we do, anticipating their needs and exceeding expectations."
                },
                {
                  icon: <FaLightbulb className="h-12 w-12 text-blue-600" />,
                  title: "Innovation",
                  description: "We embrace technology and new ideas to continuously improve and lead the hospitality industry forward."
                },
                {
                  icon: <FaHandshake className="h-12 w-12 text-blue-600" />,
                  title: "Integrity",
                  description: "We operate with honesty, transparency, and ethical standards in all our business relationships."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="rounded-full bg-blue-50 w-20 h-20 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team - Improved card design */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16" data-aos="fade-up">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Meet Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership Team
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Meet the people who drive our vision forward
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-80">
                  <Image 
                    src={person.image} 
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
                  <p className="text-blue-600 font-medium mt-1">{person.role}</p>
                  <p className="mt-4 text-gray-600 leading-relaxed">{person.bio}</p>
                  <div className="mt-6 flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white">Ready to transform your hotel operation?</h2>
              <p className="mt-2 text-xl text-blue-100">Join thousands of hotels that trust HotelManager for their success.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-blue-800 text-white rounded-lg font-bold shadow-lg hover:bg-blue-900 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent; 