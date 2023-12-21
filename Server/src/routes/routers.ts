import express from "express";
import multer from "multer";
import UserController from "../controllers/usersController";
import ConnectionController from "../controllers/ConnectionController";
import {
  PostController,
  CommentController,
  LikeController,
} from "../controllers/PostController";
const postController = new PostController();
const commentController = new CommentController();
const likeController = new LikeController();
import MessageController from "../controllers/MessageController";
import JobController from "../controllers/JobController";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

// router.post('/users', UserController.createUser);
// router.get('/users', UserController.getAllUsers);
// router.get('/users/:userId', UserController.getUser);
// router.put('/users/:userId', UserController.updateUser);
// router.delete('/users/:userId', UserController.deleteUser);

router.post("/registerUser", UserController.registerUser);
router.post("/Login", UserController.loginUser);
router.post("/sendEmail", UserController.sendEmail);
router.post("/verificationCode", UserController.verificationCode);
router.put("/updatepassword", UserController.updatepassword);
router.get("/getUserData", UserController.getUserData);
router.get("/getUserId/:id", UserController.getUserId);
router.put("/updateUserData/:id", UserController.updateUserData);
router.put("/deleteUser/:id", UserController.deleteUser);

router.post("/connections", ConnectionController.createConnection);
router.get("/connections", ConnectionController.getAllConnections);
router.get("/connections/:connectionId", ConnectionController.getConnection);
router.put("/connections/:connectionId", ConnectionController.updateConnection);
router.delete(
  "/connections/:connectionId",
  ConnectionController.deleteConnection
);

//* Posts Routes
router.post("/addPost", upload.single("post_media"), postController.createPost);
router.get("/getAllPosts", postController.getAllPosts);
router.get("/getPost", postController.getPostById);
router.put("/updatePost", postController.updatePostById);
router.put("/deletePost", postController.deletePostById);

//* Comments Routes
router.post("/addComment", commentController.createComment);
router.get("/getAllComments", commentController.getAllComments);
router.put("/updateComment", commentController.updateCommentById);
router.put("/deleteComment", commentController.deleteCommentById);

//* Likes Routes
router.post("/addLike", likeController.createLike);
// router.put('/removeLike', likeController.removeLike);
router.put("/updateLike", likeController.updateLike);
router.get("/getAllLikes", likeController.getLikedPostsByUser);

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

export default router;
