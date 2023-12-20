import { Request, Response } from 'express';
import ConnectionModel from '../models/Connectionmodel';

class ConnectionController {
  public async createConnection(req: Request, res: Response): Promise<void> {
    try {
      const connection = new ConnectionModel(req.body);
      const savedConnection = await connection.save();
      res.json(savedConnection);
    } catch (error) {
      console.error('Error creating connection:', error);
      res.status(500).json({ error: 'Failed to create connection.' });
    }
  }

  public async getAllConnections(req: Request, res: Response): Promise<void> {
    try {
      const connections = await ConnectionModel.find();
      res.json(connections);
    } catch (error) {
      console.error('Error fetching connections:', error);
      res.status(500).json({ error: 'Failed to fetch connections.' });
    }
  }

  public async getConnection(req: Request, res: Response): Promise<void> {
    try {
      const connection = await ConnectionModel.findById(req.params.connectionId);
      if (!connection) {
        res.status(404).json({ error: 'Connection not found.' });
        return;
      }
      res.json(connection);
    } catch (error) {
      console.error('Error fetching connection:', error);
      res.status(500).json({ error: 'Failed to fetch connection.' });
    }
  }

  public async updateConnection(req: Request, res: Response): Promise<void> {
    try {
      const updatedConnection = await ConnectionModel.findByIdAndUpdate(
        req.params.connectionId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedConnection) {
        res.status(404).json({ error: 'Connection not found.' });
        return;
      }
      res.json(updatedConnection);
    } catch (error) {
      console.error('Error updating connection:', error);
      res.status(500).json({ error: 'Failed to update connection.' });
    }
  }

  public async deleteConnection(req: Request, res: Response): Promise<void> {
    try {
      const deletedConnection = await ConnectionModel.findByIdAndDelete(req.params.connectionId);
      if (!deletedConnection) {
        res.status(404).json({ error: 'Connection not found.' });
        return;
      }
      res.json(deletedConnection);
    } catch (error) {
      console.error('Error deleting connection:', error);
      res.status(500).json({ error: 'Failed to delete connection.' });
    }
  }
}

export default new ConnectionController();
