import express, { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

interface JwtTokenPayload {
  email: string;
  user_id: string;
}

interface User {
  email: string;
  user_id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

async function authorize(req: Request, res: Response, next: NextFunction) {
  try {
    console.log(req.user);
    const tokenCookie = req.headers.authorization;

    if (tokenCookie) {
      const decodedToken = jwt.verify(tokenCookie, process.env.SECRET_KEY as Secret) as JwtTokenPayload;

      if (decodedToken.user_id) {
        req.user = decodedToken;
        next();
      } else {
        res.status(401).json("unauthorized");
      }
    } else {
      res.status(401).json("you need to login first");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = authorize;