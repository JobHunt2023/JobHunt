import { Request, Response } from 'express';
import jobModel from '../models/Jobmodel';

class JobController {
  public async createJob(req: Request, res: Response): Promise<void> {
    try {
      const post = new jobModel(req.body);
      const savedJob = await post.save();
      res.status(201).json(savedJob);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create Job.' });
    }
  };

  public async getAllJobs(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await jobModel.find();
      res.status(200).json(jobs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch posts.' });
    }
  };

  public async getJob(req: Request, res: Response): Promise<void> {
    try {
      const job = await jobModel.findById(req.params.postId);
      if (!job) {
        res.status(404).json({ error: 'job not found.' });
        return;
      }
      res.status(200).json(job);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch job.' });
    }
  };

  public async updateJob(req: Request, res: Response): Promise<void> {
    try {
      const updatedJob = await jobModel.findByIdAndUpdate(
        req.params.jobId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedJob) {
        res.status(404).json({ error: 'job not found.' });
        return;
      }
      res.status(201).json(updatedJob);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update job.' });
    }
  };

  public async deleteJob(req: Request, res: Response): Promise<void> {
    try {
      const deletedJob = await jobModel.findByIdAndDelete(req.params.postId);
      if (!deletedJob) {
        res.status(404).json({ error: 'Job not found.' });
        return;
      }
      res.status(201).json(deletedJob);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete job.' });
    }
  }
};

export default new JobController();