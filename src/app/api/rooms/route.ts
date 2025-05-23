import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Room from '@/models/Room';

// This is temporary mock data - replace with your database implementation
const mockRooms = [
  {
    id: 1,
    name: 'Deluxe King Room',
    description: 'Spacious room with king-sized bed, en-suite bathroom, and city view.',
    price: 15999, // Price in INR
    capacity: 2,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    status: 'Available',
    maintenance: false,
    lastCleaned: new Date().toISOString()
  },
  // Add more rooms here
];

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');

    let query = {};
    if (featured === 'true') {
      // You might want to add a featured field to your Room model
      // For now, we'll just get the most expensive rooms
      const rooms = await Room.find()
        .sort({ price: -1 })
        .limit(3);
      return NextResponse.json(rooms);
    }

    const rooms = await Room.find(query);
    return NextResponse.json(rooms);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch rooms' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const room = await Room.create(data);
    return NextResponse.json(room);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create room' }, { status: 500 });
  }
} 