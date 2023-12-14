import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://mothanaalmajali91:359157@cluster0.34prt34.mongodb.net/?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    try {
      const connection = await mongoose.connect(MONGO_URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToMongoDB;