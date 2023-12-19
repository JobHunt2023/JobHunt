// import mongoose, { Schema, Document } from "mongoose";

// interface IUser extends Document {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   headline: string;
//   summary: string;
//   skills: string[];
//   role: String;

//   connections: mongoose.Types.ObjectId[];
// }



// const userSchema: Schema = new Schema({
//   firstName: String,
//   lastName: String,
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: String,
//   headline: String,
//   summary: String,
//   skills: [String],
//   role: String,

//   connections: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
// });

// const UserModel = mongoose.model<IUser>("User", userSchema);

// export default UserModel;


import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  headline: string;
  summary: string;
  skills: string[];
  role: string;  // Change from String to string
  connections: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  headline: String,
  summary: String,
  skills: [String],
  role: String,
  connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const UserModel = mongoose.model<IUser>("User", userSchema);

export  { IUser, UserModel };  // Correct export statements
