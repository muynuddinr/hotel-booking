import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  floor: { type: String, required: true },
  amenities: [{ type: String }],
  image: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Available', 'Occupied', 'Maintenance'],
    default: 'Available'
  },
  maintenance: { type: Boolean, default: false },
  lastCleaned: { type: Date, default: Date.now }
});

export default mongoose.models.Room || mongoose.model('Room', RoomSchema); 