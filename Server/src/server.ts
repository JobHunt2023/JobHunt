import express from "express";
import cors from "cors";
import router from "./routes/routers";
// require("dotenv").config();

import connectToMongoDB from "./config/connect";

const app: express.Express = express();
const port: number = parseInt(process.env.PORT || "8080", 10);

app.use(express.json());
app.use(cors());

connectToMongoDB();
// const groupRoutes = require("./routes/groupRoutes");

//all pages routes --->
app.use(router);
// app.use(groupRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// *** important notes *** =======>
// npm run dev (to run the server) **************************
// tsc (to convert it from ts to javascript)
