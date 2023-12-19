import mongoose, { Document, Schema, Model, Types } from 'mongoose';

// Define Comment Schema
interface Comment extends Document {
  comment_id: number;
  comment_author: string;
  comment_content: string;
  post_id: number;
  user_id: number;
}

const commentSchema = new Schema<Comment>({
  comment_id: { type: Number, required: true, unique: true },
  comment_author: { type: String, required: true },
  comment_content: { type: String, required: true },
  post_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
});

const CommentModel: Model<Comment & Document> = mongoose.model('Comment', commentSchema);

interface Post extends Document {
  post_id: number;
  post_content: string;
  post_media?: string;
  post_author: string;
  user_id: number;
  created_at: Date;
  like_count: number;
}

const postSchema = new Schema<Post>({
  post_id: { type: Number, required: true, unique: true },
  post_content: { type: String, required: true },
  post_media: { type: String },
  post_author: { type: String, required: true },
  user_id: { type: Number, required: true },
  created_at: { type: Date, required: true },
  like_count: { type: Number, required: true },
});

const PostModel: Model<Post & Document> = mongoose.model('Post', postSchema);

// Define Like Schema
interface Like extends Document {
  like_id: number;
  user_id: number;
  post_id: number;
}

const likeSchema = new Schema<Like>({
  like_id: { type: Number, required: true, unique: true },
  user_id: { type: Number, required: true },
  post_id: { type: Number, required: true },
});

const LikeModel: Model<Like & Document> = mongoose.model('Like', likeSchema);

// Create manual references

postSchema.virtual('users', {
  ref: 'User',
  localField: 'user_id',
  foreignField: 'user_id',
  justOne: false,
});

commentSchema.virtual('posts', {
  ref: 'Post',
  localField: 'post_id',
  foreignField: 'post_id',
  justOne: false,
});

commentSchema.virtual('users', {
  ref: 'User',
  localField: 'user_id',
  foreignField: 'user_id',
  justOne: false,
});

likeSchema.virtual('posts', {
  ref: 'Post',
  localField: 'post_id',
  foreignField: 'post_id',
  justOne: false,
});

likeSchema.virtual('users', {
  ref: 'User',
  localField: 'user_id',
  foreignField: 'user_id',
  justOne: false,
});


// Apply the virtuals to the schema
postSchema.set('toObject', { virtuals: true });
postSchema.set('toJSON', { virtuals: true });
commentSchema.set('toObject', { virtuals: true });
commentSchema.set('toJSON', { virtuals: true });
likeSchema.set('toObject', { virtuals: true });
likeSchema.set('toJSON', { virtuals: true });

export { CommentModel, PostModel, LikeModel };