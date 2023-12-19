import mongoose from 'mongoose';
import dotenv from 'dotenv';

const MONGO_URI = `${process.env.MONGO_URI}`;

const connectToMongoDB = async () => {
    try {
      const connection = await mongoose.connect(MONGO_URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToMongoDB;