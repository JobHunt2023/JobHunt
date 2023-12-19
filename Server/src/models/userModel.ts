import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  headline: string;
  summary: string;
  skills: string[];
  connections: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  headline: String,
  summary: String,
  skills: [String],
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;
