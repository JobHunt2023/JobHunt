import { Request, Response } from 'express';
import MessageModel from '../models/Messagemodel';

class MessageController {
  public async createMessage(req: Request, res: Response): Promise<void> {
    try {
      const message = new MessageModel(req.body);
      const savedMessage = await message.save();
      res.json(savedMessage);
    } catch (error) {
      console.error('Error creating message:', error);
      res.status(500).json({ error: 'Failed to create message.' });
    }
  }

  public async getAllMessages(req: Request, res: Response): Promise<void> {
    try {
      const messages = await MessageModel.find();
      res.json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Failed to fetch messages.' });
    }
  }

  public async getMessage(req: Request, res: Response): Promise<void> {
    try {
      const message = await MessageModel.findById(req.params.messageId);
      if (!message) {
        res.status(404).json({ error: 'Message not found.' });
        return;
      }
      res.json(message);
    } catch (error) {
      console.error('Error fetching message:', error);
      res.status(500).json({ error: 'Failed to fetch message.' });
    }
  }

  public async updateMessage(req: Request, res: Response): Promise<void> {
    try {
      const updatedMessage = await MessageModel.findByIdAndUpdate(
        req.params.messageId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedMessage) {
        res.status(404).json({ error: 'Message not found.' });
        return;
      }
      res.json(updatedMessage);
    } catch (error) {
      console.error('Error updating message:', error);
      res.status(500).json({ error: 'Failed to update message.' });
    }
  }

  public async deleteMessage(req: Request, res: Response): Promise<void> {
    try {
      const deletedMessage = await MessageModel.findByIdAndDelete(req.params.messageId);
      if (!deletedMessage) {
        res.status(404).json({ error: 'Message not found.' });
        return;
      }
      res.json(deletedMessage);
    } catch (error) {
      console.error('Error deleting message:', error);
      res.status(500).json({ error: 'Failed to delete message.' });
    }
  }
}

export default new MessageController();
