import express, { Router } from 'express';
import UserController from '../controllers/usersController';

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

export = router;
