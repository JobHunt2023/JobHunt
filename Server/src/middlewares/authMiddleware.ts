// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import User from "../models/users";
// import dotenv from "dotenv";
// dotenv.config();

// const SECRET_KEY: string = process.env.KEY || "";

// const authenticateToken = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const token: string | undefined = req.headers.authorization;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ success: false, message: "You need to login first" });
//     }

//     const decoded: any = jwt.verify(token, SECRET_KEY);

//     if (!decoded.user_id) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Unauthorized: User not found" });
//     }

//     req.user = decoded.user_id;
//     req.role = decoded.role;
//     next();
//   } catch (error) {
//     console.error(error);
//     return res
//       .status(401)
//       .json({ success: false, message: "Unauthorized: Invalid token" });
//   }
// };

// export { authenticateToken };
