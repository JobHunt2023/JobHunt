import express, { Request, Response } from "express";
// import multer, { Multer } from "multer";
// import multer from 'multer';
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import UserModel from "../models/usersSchema";

dotenv.config();

// Storage Image By Multer Start
// let lastFileSequence = 0;
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "UserImage");
//     },
//     filename: (req, file, cb) => {
//         lastFileSequence++;
//         const newFileName = `${Date.now()}_${lastFileSequence}${path.extname(
//             file.originalname
//         )}`;
//         cb(null, newFileName);
//     },
// });

// const addImage: Multer = multer({ storage: storage });
// const imageUser = addImage.single("image");

interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
    user_id: string;
}

const registerUser = async (req: Request, res: Response) => {
    const {
        firstName,
        lastName,
        email,
        password,
        confirm_password,
        phoneNumber,
    } = req.body;

    try {
        const schema = Joi.object({
            firstName: Joi.string().min(3).max(25).required(),
            lastName: Joi.string().min(3).max(25).required(),
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            password: Joi.string()
                .pattern(
                    new RegExp(
                        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{8,30}$'
                    )
                )
                .required(),
            confirm_password: Joi.any().equal(Joi.ref("password")),
            phoneNumber: Joi.string()
                .trim()
                .pattern(/^[0-9]{10}$/)
                .message("Phone number must be a 10-digit numeric value")
                .required(),
        });

        const validate = schema.validate({
            firstName,
            lastName,
            email,
            password,
            confirm_password,
            phoneNumber,
        });

        if (validate.error) {
            return res.status(400).json({ error: validate.error.details });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNumber,
        });

        await newUser.save();

        const payload: IUserPayload = {
            firstName,
            lastName,
            email,
            user_id: newUser._id,
        };

        const secretKey = process.env.SECRET_KEY || "";
        const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });

        res.status(200).json({
            validate,
            message: 'Successfully Sign Up !',
            token: token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to add");
    }
};

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        });

        const validate = schema.validate({ email });
        if (validate.error) {
            res.status(400).json({ error: validate.error.details });
            return;
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            res.status(400).json({ message: 'Email or Password is invalid' });
            return;
        }

        const storedHashedPassword = user.password;

        const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

        if (!passwordMatch) {
            res.status(400).json({ message: 'Email or Password is invalid' });
            return;
        }

        const payload: IUserPayload = {
            firstName: user.firstName,
            lastName: user.lastName,
            user_id: user._id,
            email: user.email,
        };

        const secretKey = process.env.SECRET_KEY || "";
        const token = jwt.sign(payload, secretKey, { expiresIn: '7d' });

        res.status(200).json({
            validate,
            message: 'Successfully Login',
            token: token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to Authenticate');
    }
};

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohammedhassouna000@gmail.com',
        pass: 'iyfyzqcsphpdwgvz',
    },
    tls: {
        rejectUnauthorized: false
    }
});

const generateVerificationCode = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendVerificationEmail = async (email: string, verificationCode: string): Promise<void> => {
    const mailOptions = {
        from: 'mohammedhassouna000@gmail.com',
        to: email,
        subject: 'Email Verification Code',
        text: `Your email verification code is: ${verificationCode}`,
    };

    console.log('Sending verification email to ' + email);

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email verification');
    }
};

let emailFromSendEmail: string;
const generatedVerificationCode = generateVerificationCode();

const sendEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const email: string = req.body.email;
        emailFromSendEmail = email;

        const user = await UserModel.findOne({ email: email });
        if (user) {
            user.verificationCode = generatedVerificationCode;
            await user.save();

            await sendVerificationEmail(email, generatedVerificationCode);
            res.status(200).json({ message: 'Verification code email has been sent.' });
        } else {
            res.status(400).json({ error: 'Email not found in the database.' });
        }
    } catch (error) {
        console.error('Error sending verification email:', error);
        res.status(500).json({ error: 'An error occurred while sending the verification email.' });
    }
};

const verificationCode = async (req: Request, res: Response): Promise<void> => {

    const verificationCode = req.body.verificationCode;

    if (verificationCode === generatedVerificationCode) {
        res.status(200).json({
            message: 'You can go to reset password',
        });
    }
    else {
        res.status(400).json({
            message: "Invalid verification code",
        });
    }
};


const updatepassword = async (req: Request, res: Response): Promise<void> => {
    const newPassword = req.body.newPassword;
    const confirm_password = req.body.confirm_password;
    const email = emailFromSendEmail;

    try {
        const schema = Joi.object({
            newPassword: Joi.string()
                .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{8,12}$'))
                .required(),
            confirm_password: Joi.any().valid(Joi.ref('newPassword')).required(),
        });

        const validate = schema.validate({ newPassword, confirm_password });
        if (validate.error) {
            res.status(400).json({ error: validate.error.details });
            return; // Return here to exit the function
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const result = await UserModel.findOneAndUpdate(
            { email: email },
            { $set: { password: hashedPassword } },
            { new: true }
        );

        if (result) {
            res.status(200).json({
                message: 'Password updated successfully!',
            });
        } else {
            res.status(400).json({
                error: 'User not found or password not updated',
            });
        }
    } catch (err) {
        console.error('Error updating password:', err);
        res.status(500).json({ error: 'An error occurred while updating the password' });
    }
};


const getUserData = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserModel.find({ isDeleted: false });
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getUserId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await UserModel.findOne({ _id: id, isDeleted: false });

        if (!user) {
            res.status(404).json({ error: "The User not found" });
            return; // Return here to exit the function
        }

        // const image_url = `http://localhost:5000/UserImage/${user.imageName}`;
        // Assuming 'UserImage' is a property of 'user' type, define it in your Mongoose model/interface.
        // If it's not, you may need to adjust accordingly based on your data model.
        // user.UserImage = image_url;

        res.status(200).json({
            user,
            // image_url
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateUserData = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { firstName, lastName, email, password, confirm_password, phoneNumber } = req.body;

    try {
        const schema = Joi.object({
            firstName: Joi.string().min(3).max(25),
            lastName: Joi.string().min(3).max(25),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{8,30}$')),
            confirm_password: Joi.string().optional().valid(Joi.ref('password')).when('password', {
                is: Joi.exist(),
                then: Joi.required(),
            }),
            phoneNumber: Joi.string().trim().pattern(/^[0-9]{10}$/).message('Phone number must be a 10-digit numeric value')
        });

        const validate = schema.validate({ firstName, lastName, email, password, confirm_password, phoneNumber });

        if (validate.error) {
             res.status(400).json({ error: validate.error.details });
             return
        }
        let imageName = null;

        if (req.file) {
            // If a file is uploaded, set imageName to the filename
            imageName = req.file.filename;
        }
        let hashedPassword;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        const updatedUser = await UserModel.findByIdAndUpdate(id, {
            $set: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                phoneNumber,
                imageName
            }
        }, { new: true });

        if (!updatedUser) {
             res.status(404).json({ error: "The User not found" });
             return
        } else {
            res.status(200).json({
                message: 'The User Updated!',
                user: updatedUser,
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        const deleteUser = await UserModel.findByIdAndUpdate(
            id,
            { isDeleted: true },
            { new: true }
        )
        if (!deleteUser) {
            res.status(404).json({ error: "The User not found" });
            return
        } else {
            res.status(200).json({
                message: 'The User Deleted !',
            });
        }
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};

export default {
    registerUser,

    loginUser,

    sendEmail,

    verificationCode,

    updatepassword,

    getUserData,

    getUserId,
    
    updateUserData,

    deleteUser,
};
