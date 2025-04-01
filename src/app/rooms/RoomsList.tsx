'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for room types - in a real app, you would fetch this from an API
const roomTypes = [
  {
    id: 1,
    name: 'Deluxe King Room',
    description: 'Spacious room with king-sized bed, en-suite bathroom, and city view.',
    price: 199,
    capacity: 2,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area, king-sized bed, and premium amenities.',
    price: 299,
    capacity: 2,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Mini Bar', 'Living Area', 'Work Desk'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 3,
    name: 'Family Room',
    description: 'Perfect for families with two queen beds and extra space for children.',
    price: 249,
    capacity: 4,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Mini Bar', 'Extra Beds Available'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 4,
    name: 'Standard Twin Room',
    description: 'Comfortable room with two single beds, perfect for friends or colleagues.',
    price: 159,
    capacity: 2,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat-screen TV'],
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  }
];

const RoomsList: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Luxury</span> Rooms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled comfort and elegance in our carefully curated selection of rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomTypes.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative h-48">
                <Image 
                  src={room.image} 
                  alt={room.name}
                  fill
                  className="object-cover hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-blue-600">${room.price}</span>
                  <span className="text-xs text-gray-500">/night</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{room.description}</p>
                
                <div className="mt-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm text-gray-700">{room.capacity} guests</span>
                </div>
                
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-lg font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-2">
                  <Link 
                    href={`/rooms/${room.id}`} 
                    className="flex-1 bg-white hover:bg-gray-50 text-blue-600 font-semibold border-2 border-blue-600 py-2 px-4 rounded-lg text-center transition-colors duration-300 text-sm"
                  >
                    View Details
                  </Link>
                  <Link 
                    href={`/book?room=${room.id}`} 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsList; 