import express, { Router } from 'express';
import { Request, Response } from 'express';
import UserController from '../controllers/usersController';1
import path from 'path';

import multer, { FileFilterCallback } from 'multer';
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      const userId = req.params.userId;
      const userImagePath = path.join('image_uploads');
      cb(null, userImagePath);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, 'image' + Date.now() + ext);
    },
  });
  
  const uploadImage = multer({
    storage: imageStorage,
    fileFilter: (req, file, cb: FileFilterCallback) => {
      // Check if the uploaded file is a valid image file (customize as needed)
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const ext = path.extname(file.originalname).toLowerCase();
      if (allowedExtensions.includes(ext)) {
        return cb(null, true);
      } else {
        return cb(new Error('Invalid file type for image'));
      }
    },
  }).single('image');
  
const cvStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      const userId = req.params.userId;
      const cv_uploads = path.join('uploads');
      cb(null, cv_uploads);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, 'cv' + Date.now() + ext);
    },
  });
  
  const upload = multer({
    storage: cvStorage,
    fileFilter: (req, file, cb: FileFilterCallback) => {
      // Check if the uploaded file is a valid CV file (customize as needed)
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const ext = path.extname(file.originalname).toLowerCase();
      if (allowedExtensions.includes(ext)) {
        return cb(null, true);
      } else {
        return cb(new Error('Invalid file type for CV'));
      }
    },
  }).single('cv');
const router: Router = express.Router();

router.post("/registerUser", UserController.registerUser);

router.post("/Login", UserController.loginUser);

router.post('/sendEmail', UserController.sendEmail);

router.post('/verificationCode', UserController.verificationCode);

router.put("/updatepassword", UserController.updatepassword);

router.get("/getUserData", UserController.getUserData);

router.get('/getUserId/:id', UserController.getUserId);

// router.put('/updateUserData/:id', UserController.imageUser, UserController.updateUserData);

router.put("/deleteUser/:id", UserController.deleteUser);



router.post('/upload-cv/:userId', upload, UserController.uploadCV);


router.post('/upload-image/:userId', uploadImage, UserController.uploadImage);


router.put('/update-cv/:userId', upload, UserController.updateCV);


router.put('/update-image/:userId', uploadImage, UserController.updateImage);





export = router;
