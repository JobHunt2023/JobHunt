import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
  sender: mongoose.Types.ObjectId;
  receiver: mongoose.Types.ObjectId;
  content: string;
  timestamp: Date;
}

const messageSchema: Schema = new Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel = mongoose.model<IMessage>('Message', messageSchema);

export default MessageModel;
