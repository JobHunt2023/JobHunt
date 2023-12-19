import express from "express";
import UserController from "../controllers/UserController";
import ConnectionController from "../controllers/ConnectionController";
import PostController from "../controllers/PostController";
import MessageController from "../controllers/MessageController";
import JobController from "../controllers/JobController";
// import authMiddleware from "../middlewares/authMiddleware"

import {
  joinGroup,
  createGroup,
  getGroupById,
  getAllGroup,
  DeleteGroupById
} from "../controllers/groupController";

const router = express.Router();

router.post("/users", UserController.createUser);
router.get("/users", UserController.getAllUsers);
router.get("/users/:userId", UserController.getUser);
router.put("/users/:userId", UserController.updateUser);
router.delete("/users/:userId", UserController.deleteUser);

router.post("/connections", ConnectionController.createConnection);
router.get("/connections", ConnectionController.getAllConnections);
router.get("/connections/:connectionId", ConnectionController.getConnection);
router.put("/connections/:connectionId", ConnectionController.updateConnection);
router.delete(
  "/connections/:connectionId",
  ConnectionController.deleteConnection
);

router.post("/posts", PostController.createPost);
router.get("/posts", PostController.getAllPosts);
router.get("/posts/:postId", PostController.getPost);
router.put("/posts/:postId", PostController.updatePost);
router.delete("/posts/:postId", PostController.deletePost);

router.post("/messages", MessageController.createMessage);
router.get("/messages", MessageController.getAllMessages);
router.get("/messages/:messageId", MessageController.getMessage);
router.put("/messages/:messageId", MessageController.updateMessage);
router.delete("/messages/:messageId", MessageController.deleteMessage);

router.post("/jobs", JobController.createJob);
router.get("/jobs", JobController.getAllJobs);
router.get("/jobs/:jobId", JobController.getJob);
router.put("/jobs/:jobId", JobController.updateJob);
router.delete("/jobs/:jobId", JobController.deleteJob);

router.post("/AddUser/:groupId", joinGroup);
router.post("/AddGroup", createGroup);
router.get("/getGroupById/:groupId", getGroupById);
router.get("/getAllGroup", getAllGroup);
router.get("/DeleteGroupById/:groupId", DeleteGroupById);

export default router;
