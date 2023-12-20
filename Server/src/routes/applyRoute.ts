import express from "express";
const router: any = express.Router();
import { Request, Response } from "express";
import applyController from "../controllers/applyController";


router.post('/apply', applyController.createApplication);
router.get('/job/:id/applications', applyController.getApplications);
router.get('/myapplications', applyController.myApplications);


export = router;