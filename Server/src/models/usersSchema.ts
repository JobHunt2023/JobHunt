import mongoose, { Schema, Document } from 'mongoose';

interface User {
    role: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    password: string;
    phoneNumber?: string | null;
    imageName?: string | null;
    isDeleted: boolean;
    verificationCode: string;
    UserImage: String, // Assuming UserImage is a string, adjust accordingly
}

interface UserDocument extends User, Document { }

const userSchema = new Schema<UserDocument>({
    role: {
        type: String,
        required: true,
        default: "user",
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        default: null,
    },
    imageName: {
        type: String,
        default: null,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

const User = mongoose.model<UserDocument>("User", userSchema);


export default User;
