import { Request, Response } from "express";
import GroupModel from "../models/groupModel";
import { UserModel, IUser } from "../models/userModel";

async function joinGroup(req: Request, res: Response): Promise<void> {
  try {
    const { _id } = req.body;
    const groupId = req.params.groupId;

    const existingMember = await GroupModel.findOne({
      _id: groupId,
      "members.userId": _id,
    });

    if (existingMember) {
      res
        .status(400)
        .json({ message: "User is already a member of the group." });
      return;
    }

    // Fetch user details based on _id
    const user = await UserModel.findById(_id);

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const { firstName, lastName, role } = user;
    const status = role === "admin" ? "approved" : "pending"; // Set status based on user's role

    const updatedGroup = await GroupModel.findByIdAndUpdate(
      groupId,
      {
        $push: {
          members: { userId: _id, firstName, lastName, status:status },
        },
      },
      { new: true }
    );

    res.status(200).json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// async function joinGroup(req: Request, res: Response): Promise<void> {
//   try {
//     const { _id } = req.body;
//     const groupId = req.params.groupId;

//     // Fetch user details based on _id
//     const user = (await UserModel.findById(_id)) as IUser;

//     if (!user) {
//       res.status(404).json({ message: "User not found." });
//       return;
//     }

//     const { firstName, lastName, role } = user;

//     // Check if the user is an admin
//     if (role === "admin") {
//       // If the user is an admin, directly approve the request
//       const updatedGroup = await GroupModel.findByIdAndUpdate(
//         groupId,
//         {
//           $push: {
//             members: {
//               userId: _id,
//               firstName,
//               lastName,
//               role,
//               status: "approved",
//             },
//           },
//         },
//         { new: true }
//       );

//       res.status(200).json(updatedGroup);
//     } else {
//       // If the user is not an admin, mark the request as pending
//       const existingMember = await GroupModel.findOne({
//         _id: groupId,
//         "members.userId": _id,
//       });

//       if (existingMember) {
//         res
//           .status(400)
//           .json({ message: "User is already a member of the group." });
//         return;
//       }

//       const updatedGroup = await GroupModel.findByIdAndUpdate(
//         groupId,
//         {
//           $push: {
//             members: {
//               userId: _id,
//               firstName,
//               lastName,
//               role,
//               status: "pending",
//             },
//           },
//         },
//         { new: true }
//       );

//       res.status(200).json(updatedGroup);
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// }



// async function joinGroup(req: Request, res: Response): Promise<void> {
//   try {
//     const { _id } = req.body;
//     const groupId = req.params.groupId;

//     const user = (await UserModel.findById(_id)) as IUser;

//     if (!user) {
//       res.status(404).json({ message: "User not found." });
//       return;
//     }

//     const { firstName, lastName, role } = user;

//     const group = await GroupModel.findById(groupId);

//     if (!group) {
//       res.status(404).json({ message: "Group not found." });
//       return;
//     }

//     const admin = group.members.find((member) => member.role === "admin");

//     if (!admin) {
//       res.status(403).json({ message: "Group has no admin to approve members." });
//       return;
//     }

//     if (role === "admin") {
//       const updatedGroup = await GroupModel.findByIdAndUpdate(
//         groupId,
//         {
//           $push: {
//             members: {
//               userId: _id,
//               firstName,
//               lastName,
//               role,
//               status: "approved",
//             },
//           },
//         },
//         { new: true }
//       );

//       res.status(200).json(updatedGroup);
//     } else {
//       const existingMember = await GroupModel.findOne({
//         _id: groupId,
//         "members.userId": _id,
//       });

//       if (existingMember) {
//         res
//           .status(400)
//           .json({ message: "User is already a member of the group." });
//         return;
//       }

//       const updatedGroup = await GroupModel.findByIdAndUpdate(
//         groupId,
//         {
//           $push: {
//             members: {
//               userId: _id,
//               firstName,
//               lastName,
//               role,
//               status: "pending",
//             },
//           },
//         },
//         { new: true }
//       );

//       res.status(200).json(updatedGroup);
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// }



async function createGroup(req: Request, res: Response): Promise<void> {
  try {
    const { name } = req.body;

    const newGroup = await GroupModel.create({ name, members: [] });

    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


async function getAllGroup(req: Request, res: Response): Promise<void> {
  try {

    const group = await GroupModel.find();

    if (!group) {
      res.status(404).json({ message: 'Group not found' });
      return;
    }

    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
async function getGroupById(req: Request, res: Response): Promise<void> {
  try {
    const groupId = req.params.groupId;

    const group = await GroupModel.findById(groupId);

    if (!group) {
      res.status(404).json({ message: 'Group not found' });
      return;
    }

    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
async function DeleteGroupById(req: Request, res: Response): Promise<void> {
  try {
    const groupId = req.params.groupId;

    const group = await GroupModel.findByIdAndDelete(groupId);

    if (!group) {
      res.status(404).json({ message: 'Group not found' });
      return;
    }

    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}




export { joinGroup,getGroupById,getAllGroup, createGroup,DeleteGroupById };
