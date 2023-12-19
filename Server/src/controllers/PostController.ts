import { Request, Response } from 'express';
import {PostModel, CommentModel, LikeModel} from '../models/PostModel';

export class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const newPost = new PostModel(req.body);
      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (error) {
      res.status(500).json({ error: 'Error creating post' });
    }
  }

  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await PostModel.aggregate([
        {
          $match: { isDeleted: false }, // Match only undeleted posts
        },
        {
          $lookup: {
            from: 'likes',
            let: { postId: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$post_id', '$$postId'] }, // Match likes with the current post
                      { $eq: ['$isDeleted', false] }, // Match only undeleted likes
                    ],
                  },
                },
              },
            ],
            as: 'likes',
          },
        },
        {
          $addFields: {
            like_count: { $size: '$likes' }, // Add a new field 'like_count' with the size of the 'likes' array
          },
        },
        {
          $project: {
            likes: 0, // Exclude the 'likes' array from the final result
          },
        },
      ]);
  
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching posts' });
    }
  }

  async getPostById(req: Request, res: Response) {
    try {
      const post = await PostModel.findOne({ _id: req.body.post_id, isDeleted: false });
      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.json(post);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching post' });
    }
  }

  async updatePostById(req: Request, res: Response) {
    try {
      const updatedPost = await PostModel.findOneAndUpdate(
        { _id: req.body.post_id, isDeleted: false },
        req.body,
        { new: true }
      );
      if (!updatedPost) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.json(updatedPost);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating post' });
    }
  }

  async deletePostById(req: Request, res: Response) {
    try {
      const deletedPost = await PostModel.findOneAndUpdate(
        { _id: req.body.post_id, isDeleted: false },
        { isDeleted: true },
        { new: true }
      );
      if (!deletedPost) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.json(deletedPost);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting post' });
    }
  }
}

export class CommentController {
  async createComment(req: Request, res: Response) {
    try {
      const newComment = new CommentModel(req.body);
      const savedComment = await newComment.save();
      res.json(savedComment);
    } catch (error) {
      res.status(500).json({ error: 'Error creating comment' });
    }
  }

  async getAllComments(req: Request, res: Response) {
    try {
      const postId = req.body.post_id;
  
      if (!postId) {
        return res.status(400).json({ error: 'Post ID is required' });
      }
  
      const comments = await CommentModel.find({ post_id: postId, isDeleted: false });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching comments' });
    }
  }

  async updateCommentById(req: Request, res: Response) {
    try {  
      const updatedComment = await CommentModel.findOneAndUpdate(
        { _id: req.body.comment_id, user_id: req.body.user_id, isDeleted: false },
        req.body,
        { new: true }
      );
  
      if (!updatedComment) {
        res.status(404).json({ error: 'Comment not found or unauthorized' });
      } else {
        res.json(updatedComment);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating comment' });
    }
  }
  
  async deleteCommentById(req: Request, res: Response) {
    try {  
      const deletedComment = await CommentModel.findOneAndUpdate(
        { _id: req.body.comment_id, user_id: req.body.user_id, isDeleted: false },
        { isDeleted: true },
        { new: true }
      );
  
      if (!deletedComment) {
        res.status(404).json({ error: 'Comment not found or unauthorized' });
      } else {
        res.json(deletedComment);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting comment' });
    }
  }
}

export class LikeController {
  async addLike(req: Request, res: Response) {
    try {
      const { user_id, post_id } = req.body;

      // Check if the like already exists for the user and post
      const existingLike = await LikeModel.findOne({ user_id, post_id, isDeleted: false });

      if (existingLike) {
        return res.status(400).json({ error: 'Like already exists' });
      }

      const newLike = new LikeModel({ user_id, post_id });
      const savedLike = await newLike.save();

      res.json(savedLike);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating like' });
    }
  }

  async removeLike(req: Request, res: Response) {
    try {
      const { user_id, post_id } = req.body;

      // Find the like to delete
      const likeToDelete = await LikeModel.findOne({ user_id, post_id, isDeleted: false });

      if (!likeToDelete) {
        return res.status(404).json({ error: 'Like not found' });
      }

      // Soft delete by marking it as deleted
      likeToDelete.isDeleted = true;
      const deletedLike = await likeToDelete.save();

      res.json(deletedLike);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting like' });
    }
  }

  async updateLike(req: Request, res: Response) {
    try {
      const { user_id, post_id } = req.body;

      // Find the like to delete
      const likeToDelete = await LikeModel.findOne({ user_id, post_id, isDeleted: true });

      if (!likeToDelete) {
        return res.status(404).json({ error: 'Like not found' });
      }

      // Soft delete by marking it as deleted
      likeToDelete.isDeleted = false;
      const updateLike = await likeToDelete.save();

      res.json(updateLike);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting like' });
    }
  }

  async getLikedPostsByUser(req: Request, res: Response) {
    try {
       const userLikes = await LikeModel.find({ user_id: req.body.user_id, isDeleted: false });

      // Extract post ids from user likes
      const postIds = userLikes.map((like) => like.post_id);

      // Find all posts with matching post ids
      const likedPosts = await PostModel.find({ _id: { $in: postIds }, isDeleted: false });

      res.json(likedPosts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching liked posts' });
    }
  }
}