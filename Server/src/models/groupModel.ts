// src/models/groupModel.ts
import mongoose, { Document, Schema } from "mongoose";

interface GroupMember {
  firstName: string;
  lastName: string;
  userId: string;
  role: string;
}

interface Group extends Document {
  _id: string;
  name: string; // Add the groupName field

  members: GroupMember[];
}

const GroupSchema = new Schema({
  name: String, // Add the groupName field to the schema

  members: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      firstName: String,
      lastName: String,
      role: String,
    },
  ],
});

const GroupModel = mongoose.model<Group>("Group", GroupSchema);

export default GroupModel;

// import mongoose, { Document, Schema } from "mongoose";

// export interface GroupMember {
//   userId: string;
//   firstName: string;
//   lastName: string;
//   role: string;
//   status: string;
// }

// export interface IGroup extends Document {
//   _id: string;
//   name: string;
//   members: GroupMember[];
// }

// const GroupSchema = new Schema({
//   name: String,
//   members: [
//     {
//       userId: { type: Schema.Types.ObjectId, ref: "User" },
//       firstName: String,
//       lastName: String,
//       role: String,
//       status: String,
//     },
//   ],
// });

// const GroupModel = mongoose.model<IGroup>("Group", GroupSchema);

// export default GroupModel;
