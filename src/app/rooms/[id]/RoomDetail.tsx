'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaWifi, FaSnowflake, FaTv, FaGlassMartini, FaUsers } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface Room {
  _id: string;
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  size?: number;
  capacity: number;
  amenities: string[];
  image: string;
  gallery?: string[];
  status?: string;
  maintenance?: boolean;
  lastCleaned?: string;
}

// Mock data - in a real app, you would fetch this based on the ID
const roomTypes = [
  {
    id: "1",
    name: 'Deluxe King Room',
    description: 'Spacious room with king-sized bed, en-suite bathroom, and city view.',
    longDescription: 'Experience luxury and comfort in our Deluxe King Room. This spacious accommodation features a plush king-sized bed with premium linens, an elegant en-suite bathroom with rainfall shower, and large windows offering stunning city views. Perfect for couples or business travelers seeking a comfortable and stylish stay.',
    price: 199,
    size: 35, // in square meters
    capacity: 2,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Mini Bar', 'Room Service', 'Coffee Machine'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    ]
  },
  // Other room types would be listed here
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

const RoomDetail: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(`/api/rooms/${id}`);
        if (!response.ok) throw new Error('Room not found');
        const data = await response.json();
        setRoom(data);
      } catch (err) {
        setError('Failed to fetch room details');
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error || !room) return <div>Error: {error}</div>;

  const handlePaymentClick = () => {
    // Check if user is logged in by looking for token in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page with return URL
      router.push(`/login?redirect=/rooms/${id}`);
      return;
    }
    // If logged in, redirect to checkout page
    router.push(`/checkout/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-96">
            <Image 
              src={room.image} 
              alt={room.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
                <p className="mt-2 text-lg text-gray-600 max-w-3xl">{room.longDescription}</p>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-8 bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">
                  {formatPrice(room.price)}
                  <span className="text-sm text-gray-500">/night</span>
                </div>
                <button 
                  onClick={handlePaymentClick}
                  className="mt-4 block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300"
                >
                  Make Payment
                </button>
              </div>
            </div>
            
            {/* Room Details */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center">
                <FaBed className="h-6 w-6 text-blue-600 mr-2" />
                <span>King Size Bed</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="h-6 w-6 text-blue-600 mr-2" />
                <span>Max {room.capacity} Guests</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                <span>{room.size} m²</span>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {room.amenities.map((amenity: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Policies */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Check-in</h3>
                  <p className="text-gray-600">From 3:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Check-out</h3>
                  <p className="text-gray-600">Until 11:00 AM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Cancellation</h3>
                  <p className="text-gray-600">Free cancellation up to 24 hours before check-in</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Children</h3>
                  <p className="text-gray-600">Children of all ages are welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;