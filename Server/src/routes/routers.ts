import express from 'express';
// import UserController from '../controllers/usersController';

import ConnectionController from '../controllers/ConnectionController';
import PostController from '../controllers/PostController';
import MessageController from '../controllers/MessageController';
import JobController from '../controllers/JobController';


const router = express.Router();

// router.post("/registerUser", UserController.registerUser);

// router.post("/Login", UserController.loginUser);

// router.post('/sendEmail', UserController.sendEmail);

// router.post('/verificationCode', UserController.verificationCode);

// router.put("/updatepassword", UserController.updatepassword);

// router.get("/getUserData", UserController.getUserData);

// router.get('/getUserId/:id', UserController.getUserId);

// router.put('/updateUserData/:id', UserController.updateUserData);

// router.put("/deleteUser/:id", UserController.deleteUser);


// router.post('/users', UserController.createUser);
// router.get('/users', UserController.getAllUsers);
// router.get('/users/:userId', UserController.getUser);
// router.put('/users/:userId', UserController.updateUser);
// router.delete('/users/:userId', UserController.deleteUser);



// router.post('/users', UserController.createUser);
// router.get('/users', UserController.getAllUsers);
// router.get('/users/:userId', UserController.getUser);
// router.put('/users/:userId', UserController.updateUser);
// router.delete('/users/:userId', UserController.deleteUser);
// router.post("/registerUser", UserController.registerUser);

// router.post("/Login", UserController.loginUser);

// router.post('/sendEmail', UserController.sendEmail);

// router.post('/verificationCode', UserController.verificationCode);

// router.put("/updatepassword", UserController.updatepassword);

// router.get("/getUserData", UserController.getUserData);

// router.get('/getUserId/:id', UserController.getUserId);

// router.put('/updateUserData/:id', UserController.updateUserData);

// router.put("/deleteUser/:id", UserController.deleteUser);









router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:postId', PostController.getPost);
router.put('/posts/:postId', PostController.updatePost);
router.delete('/posts/:postId', PostController.deletePost);


router.post('/messages', MessageController.createMessage);
router.get('/messages', MessageController.getAllMessages);
router.get('/messages/:messageId', MessageController.getMessage);
router.put('/messages/:messageId', MessageController.updateMessage);
router.delete('/messages/:messageId', MessageController.deleteMessage);


router.post('/jobs', JobController.createJob);
router.get('/jobs', JobController.getAllJobs);
router.get('/jobs/:jobId', JobController.getJob);
router.put('/jobs/:jobId', JobController.updateJob);
router.delete('/jobs/:jobId', JobController.deleteJob);


export default router;
