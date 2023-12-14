import express from "express";
const router: any = express.Router();
import { Request, Response } from "express";
import homepageController from '../controllers/homepageController';

router.get('/getHelloToTypeScript', homepageController.sayHello);

export = router;