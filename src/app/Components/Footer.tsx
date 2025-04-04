'use client';
import React from 'react';
import Link from 'next/link';
import { FaHotel, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <div className="flex items-center mb-4">
              <FaHotel className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                HotelManager
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your perfect accommodation solution for business and leisure travelers. Experience comfort and luxury at its best.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaPhone className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-300">+1 234 567 8900</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-300">info@hotelmanager.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-300">123 Hotel Street, City, Country</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/rooms', label: 'Rooms' },
                { href: '/bookings', label: 'Bookings' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-2">
              {[
                { label: 'Room Service' },
                { label: 'Airport Transfer' },
                { label: 'Spa & Wellness' },
                { label: 'Restaurant & Bar' },
                { label: 'Conference Rooms' },
              ].map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              
              try {
                const response = await fetch('/api/newsletter/subscribe', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }),
                });
                
                const data = await response.json();
                
                if (response.ok) {
                  alert('Successfully subscribed to newsletter!');
                  form.reset();
                } else {
                  alert(data.message || 'Failed to subscribe. Please try again.');
                }
              } catch (error) {
                alert('An error occurred. Please try again later.');
              }
            }} className="flex flex-col space-y-2">
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[
                { icon: <FaFacebook />, href: '#' },
                { icon: <FaTwitter />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaLinkedin />, href: '#' },
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} HotelManager. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
