import express from "express";
const router: any = express.Router();
import { Request, Response } from "express";
import jobsController from '../controllers/JobController';

//Jobs Routes =======>
router.get('/getAllJobs', jobsController.getAllJobs);
router.post('/createJob', jobsController.createJob);
router.get('/getJobDetails/:jobId', jobsController.getJob);
router.put('/updateJob/:jobId', jobsController.updateJob);
router.delete('/deleteJob/:jobId', jobsController.deleteJob);

export = router;