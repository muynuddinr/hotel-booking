'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUtensils, FaWifi, FaCar, FaSpa, FaSwimmingPool, FaDumbbell, FaConciergeBell, FaBriefcase } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesContent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 md:h-[500px]" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md" data-aos="fade-up">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl font-light leading-relaxed drop-shadow" data-aos="fade-up" data-aos-delay="100">
            Experience unparalleled comfort and luxury with our comprehensive range of premium hotel services.
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Experience Excellence</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Premium Hotel Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
              We offer a wide range of services to make your stay comfortable, convenient, and truly memorable.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-7">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 text-blue-600 bg-blue-50 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Service Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Always Available</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">24/7 Room Service</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our dedicated staff is available around the clock to cater to your needs. From late-night snacks to early morning breakfast, we've got you covered.
              </p>
              <ul className="mt-10 space-y-5">
                {[
                  'In-room dining with a diverse menu',
                  'Special dietary requirements accommodated',
                  'Fresh, locally-sourced ingredients',
                  'Quick service with attention to detail',
                  'Child-friendly options available'
                ].map((item, index) => (
                  <li key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={index * 100}>
                    <span className="flex-shrink-0 h-6 w-6 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-600 mt-0.5">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
                <Link 
                  href="/rooms" 
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  View Our Rooms
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Room service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Services */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Tailored for You</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Special Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
              Additional services to enhance your stay with us
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600" data-aos="fade-right">
              <div className="flex items-center mb-6">
                <FaBriefcase className="h-8 w-8 text-blue-600" />
                <h3 className="ml-4 text-2xl font-bold text-gray-900">For Business Travelers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Express check-in and check-out',
                  'Complimentary high-speed Wi-Fi',
                  'Business center with printing and scanning facilities',
                  'Meeting room rentals',
                  'Laundry and dry cleaning service',
                  'Secretarial services available on request'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-600 mt-0.5">
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600" data-aos="fade-left">
              <div className="flex items-center mb-6">
                <FaSpa className="h-8 w-8 text-blue-600" />
                <h3 className="ml-4 text-2xl font-bold text-gray-900">For Leisure Travelers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Guided city tours and excursions',
                  'Childcare and babysitting services',
                  'Ticket booking for local attractions',
                  'Bicycle rentals',
                  'Customized spa packages',
                  'Special romantic setups for couples'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-600 mt-0.5">
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
      <div className="bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to experience our services?</span>
              <span className="block text-blue-200 mt-1">Book your stay today and enjoy luxury.</span>
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl">
              Take advantage of our premium amenities and world-class service to make your stay truly unforgettable.
            </p>
          </div>
          <div className="mt-10 flex flex-shrink-0 flex-col sm:flex-row lg:mt-0 gap-4" data-aos="fade-left">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-md transition-all duration-300"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent; 