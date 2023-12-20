import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://mohammedhassouna000:7SJlq4ijVghmasit@test.ovwjvzp.mongodb.net/';

const connectToMongoDB = async () => {
    try {
      const connection = await mongoose.connect(MONGO_URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToMongoDB;