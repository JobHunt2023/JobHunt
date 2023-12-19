import mongoose, { Document, Schema, Model, Types } from 'mongoose';

interface Post extends Document {
  post_content: string;
  post_media?: string;
  post_author: string;
  user_id: Types.ObjectId;
  created_at: Date;
  isDeleted: boolean;
}

const postSchema = new Schema<Post>({
  post_content: { type: String, required: true },
  post_media: { type: String },
  post_author: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, required: true, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

const PostModel: Model<Post & Document> = mongoose.model('Post', postSchema);

interface Comment extends Document {
  comment_author: string;
  comment_content: string;
  post_id: Types.ObjectId;
  user_id: Types.ObjectId;
  isDeleted: boolean;
}

const commentSchema = new Schema<Comment>({
  comment_author: { type: String, required: true },
  comment_content: { type: String, required: true },
  post_id: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isDeleted: { type: Boolean, default: false },
});

const CommentModel: Model<Comment & Document> = mongoose.model('Comment', commentSchema);

interface Like extends Document {
  user_id: Types.ObjectId;
  post_id: Types.ObjectId;
  isDeleted: boolean;
}

const likeSchema = new Schema<Like>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post_id: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  isDeleted: { type: Boolean, default: false },
});

const LikeModel: Model<Like & Document> = mongoose.model('Like', likeSchema);

// Apply the virtuals to the schema
postSchema.set('toObject', { virtuals: true });
postSchema.set('toJSON', { virtuals: true });
commentSchema.set('toObject', { virtuals: true });
commentSchema.set('toJSON', { virtuals: true });
likeSchema.set('toObject', { virtuals: true });
likeSchema.set('toJSON', { virtuals: true });

export { PostModel, CommentModel, LikeModel };