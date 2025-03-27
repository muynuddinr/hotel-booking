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
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of comfortable and luxurious rooms designed for your perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {roomTypes.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image 
                  src={room.image} 
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                  <div className="text-xl font-bold text-blue-600">${room.price}<span className="text-sm text-gray-500">/night</span></div>
                </div>
                <p className="mt-3 text-gray-600">{room.description}</p>
                
                <div className="mt-4">
                  <span className="text-gray-700 font-semibold">Capacity: </span>
                  <span className="text-gray-600">{room.capacity} people</span>
                </div>
                
                <div className="mt-2">
                  <span className="text-gray-700 font-semibold">Amenities: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <Link 
                    href={`/rooms/${room.id}`} 
                    className="flex-1 bg-transparent hover:bg-blue-50 text-blue-600 font-semibold border border-blue-600 py-2 px-4 rounded-md text-center transition-colors duration-300"
                  >
                    View Details
                  </Link>
                  <Link 
                    href={`/book?room=${room.id}`} 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md text-center transition-colors duration-300"
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