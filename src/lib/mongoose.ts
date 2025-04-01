import mongoose from 'mongoose';

// Update type declaration to match actual usage
declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel-management';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    }) as any;
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB; 