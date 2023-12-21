import { Request, Response } from 'express';
import PostModel from '../models/PostModel';

class PostController {
  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      const post = new PostModel(req.body);
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Failed to create post.' });
    }
  }

  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await PostModel.find();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Failed to fetch posts.' });
    }
  }

  public async getPost(req: Request, res: Response): Promise<void> {
    try {
      const post = await PostModel.findById(req.params.postId);
      if (!post) {
        res.status(404).json({ error: 'Post not found.' });
        return;
      }
      res.json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ error: 'Failed to fetch post.' });
    }
  }

  public async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await PostModel.findByIdAndUpdate(
        req.params.postId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedPost) {
        res.status(404).json({ error: 'Post not found.' });
        return;
      }
      res.json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Failed to update post.' });
    }
  }

  public async deletePost(req: Request, res: Response): Promise<void> {
    try {
      const deletedPost = await PostModel.findByIdAndDelete(req.params.postId);
      if (!deletedPost) {
        res.status(404).json({ error: 'Post not found.' });
        return;
      }
      res.json(deletedPost);
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ error: 'Failed to delete post.' });
    }
  }
}

export default new PostController();
