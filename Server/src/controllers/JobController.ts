import { Request, Response } from 'express';
import JobModel from '../models/Jobmodel';

class JobController {
  public async createJob(req: Request, res: Response): Promise<void> {
    try {
      const job = new JobModel(req.body);
      const savedJob = await job.save();
      res.json(savedJob);
    } catch (error) {
      console.error('Error creating job:', error);
      res.status(500).json({ error: 'Failed to create job.' });
    }
  }

  public async getAllJobs(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await JobModel.find();
      res.json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ error: 'Failed to fetch jobs.' });
    }
  }

  public async getJob(req: Request, res: Response): Promise<void> {
    try {
      const job = await JobModel.findById(req.params.jobId);
      if (!job) {
        res.status(404).json({ error: 'Job not found.' });
        return;
      }
      res.json(job);
    } catch (error) {
      console.error('Error fetching job:', error);
      res.status(500).json({ error: 'Failed to fetch job.' });
    }
  }

  public async updateJob(req: Request, res: Response): Promise<void> {
    try {
      const updatedJob = await JobModel.findByIdAndUpdate(
        req.params.jobId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedJob) {
        res.status(404).json({ error: 'Job not found.' });
        return;
      }
      res.json(updatedJob);
    } catch (error) {
      console.error('Error updating job:', error);
      res.status(500).json({ error: 'Failed to update job.' });
    }
  }

  public async deleteJob(req: Request, res: Response): Promise<void> {
    try {
      const deletedJob = await JobModel.findByIdAndDelete(req.params.jobId);
      if (!deletedJob) {
        res.status(404).json({ error: 'Job not found.' });
        return;
      }
      res.json(deletedJob);
    } catch (error) {
      console.error('Error deleting job:', error);
      res.status(500).json({ error: 'Failed to delete job.' });
    }
  }
}

export default new JobController();
