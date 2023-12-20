import { Request, Response } from "express";
import ApplyModel from "../models/applyModel";
import JobModel from "../models/Jobmodel";
import UserModel from "../models/userModel";

class applyController {
  public async createApplication(req: Request, res: Response): Promise<void> {
    try {
      const job = await JobModel.findById(req.params.jobId);
      const userID = 10;
      const userCV = await UserModel.findOne({ user: userID, cv: { $exists: true, $ne: null } });

      if (!userCV) {
          res.status(400).json({ error: "User does not have a CV. Cannot create application without a CV." });
      }
      const newApplication = new ApplyModel({
        job: job,
        applicant: userID,
      });
      const application = await newApplication.save();
      res.json(application);
    } catch (error) {
      console.error("Error creating job:", error);
      res.status(500).json({ error: "Failed to create application." });
    }
  }

  public async getApplications(req: Request, res: Response): Promise<void> {
    try {
      const job = await JobModel.findById(req.params.jobId);

      const applications = await ApplyModel.find({ job: job }).populate({
        path: "applicant",
        select:"firstName lastName email cv"
      })
      .exec();
      res.json(applications);
    } catch (error) {
      console.error("Error getting applications:", error);
      res.status(500).json({ error: "Failed to create application." });
    }
  }

  public async myApplications(req: Request, res: Response): Promise<void> {
    try {
      const userID = 10;
      const myapplications = await ApplyModel.find({ applicant: userID })
        .populate({
          path: "job",
          select: "title company jobLocation", 
        })
        .exec();
      res.json(myapplications);
    } catch (error) {
      console.error("Error getting your applications:", error);
      res.status(500).json({ error: "Failed to create application." });
    }
  }
}

export default new applyController();
