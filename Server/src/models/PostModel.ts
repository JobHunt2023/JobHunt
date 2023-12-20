import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
  author: mongoose.Types.ObjectId;
  content: string;
  comments: { user: mongoose.Types.ObjectId, text: string }[];
  
}

const postSchema: Schema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: String,
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    text: String,
  }],
 
});

const PostModel = mongoose.model<IPost>('Post', postSchema);

export default PostModel;
