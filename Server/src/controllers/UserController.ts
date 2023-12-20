import { Request, Response } from 'express';
import UserModel from '../models/userModel';

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user.' });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users.' });
    }
  }

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserModel.findById(req.params.userId);
      if (!user) {
        res.status(404).json({ error: 'User not found.' });
        return;
      }
      res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Failed to fetch user.' });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        res.status(404).json({ error: 'User not found.' });
        return;
      }
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user.' });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        res.status(404).json({ error: 'User not found.' });
        return;
      }
      res.json(deletedUser);
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user.' });
    }
  }
}

export default new UserController();
