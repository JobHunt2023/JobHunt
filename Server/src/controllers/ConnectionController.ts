import { Request, Response } from 'express';
import ConnectionModel, { IConnection } from '../models/Connectionmodel';

class UserController {
  async getAllConnections(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.userId;
      const connections: IConnection[] = await ConnectionModel.find({
        $or: [{ user1: userId }, { user2: userId }],
      });
      res.json(connections);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createConnection(req: Request, res: Response): Promise<void> {
    try {
      const { user1, user2 } = req.body;

      if (!user1 || !user2) {
        res.status(400).json({ error: 'Both user1 and user2 are required' });
        return;
      }

      const newConnection: IConnection = await ConnectionModel.create({
        user1,
        user2,
        status: 'pending', 
      });

      res.status(201).json(newConnection);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }



  async acceptConnection(req: Request, res: Response): Promise<void> {
    try {
      const connectionId = req.params.connectionId;

      // Find the connection by ID
      const connection: IConnection | null = await ConnectionModel.findById(connectionId);

      if (!connection) {
        res.status(404).json({ error: 'Connection not found' });
        return;
      }

      // Update the connection status to 'accepted'
      connection.status = 'accepted';
      await connection.save();

      res.json(connection);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  async rejectConnection(req: Request, res: Response): Promise<void> {
    try {
      const connectionId = req.params.connectionId;

      // Find the connection by ID
      const connection: IConnection | null = await ConnectionModel.findById(connectionId);

      if (!connection) {
        res.status(404).json({ error: 'Connection not found' });
        return;
      }

      // Update the connection status to 'rejected'
      connection.status = 'rejected';
      await connection.save();

      res.json(connection);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getAcceptedConnections(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.userId;

      // Fetch all accepted connections for the specified user
      const connections: IConnection[] = await ConnectionModel.find({
        $or: [
          { user1: userId, status: 'accepted' },
          { user2: userId, status: 'accepted' },
        ],
      });

      res.json(connections);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getRejectedConnections(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.userId;

      // Fetch all rejected connections for the specified user
      const connections: IConnection[] = await ConnectionModel.find({
        $or: [
          { user1: userId, status: 'rejected' },
          { user2: userId, status: 'rejected' },
        ],
      });

      res.json(connections);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getPendingConnections(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.userId;

      // Fetch all pending connections for the specified user
      const connections: IConnection[] = await ConnectionModel.find({
        $or: [
          { user1: userId, status: 'pending' },
          { user2: userId, status: 'pending' },
        ],
      });

      res.json(connections);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}



























  


export default new UserController();
