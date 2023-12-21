import express from "express";
import cors from 'cors';
import router from './routes/userRoutes';
import dotenv from 'dotenv';
import connectToMongoDB from './config/connect';
import JobRoutes from './routes/postsJobsRoutes'
 import ApplyRoute from "./routes/applyRoute";
const app: express.Express = express();
const port: number = parseInt(process.env.PORT || '8080', 10);

app.use(express.json());
app.use(cors());

connectToMongoDB();

//all pages routes --->
app.use(router);
app.use(JobRoutes);
app.use(ApplyRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// *** important notes *** =======>
// npm run dev (to run the server) **************************
// tsc (to convert it from ts to javascript)