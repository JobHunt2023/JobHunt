// import multer from "multer";
// import path from "path";
// import express, { Request, Response, NextFunction } from "express";
// import admin from "firebase-admin";
// const serviceAccount = require("./image-64e47-firebase-adminsdk-bx52j-900713965b.json");

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const app = express();
// app.use(express.static("public"));

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "gs://image-64e47.appspot.com",
// });

// async function getImageDownloadUrl(imageName: string): Promise<string> {
//   try {
//     const bucket = admin.storage().bucket();
//     const file = bucket.file(imageName);

//     const [url] = await file.getSignedUrl({
//       action: "read",
//       expires: "01-01-2025",
//     });
//     return url;
//   } catch (error) {
//     console.error("Error getting image download URL:", error);
//     throw error;
//   }
// }

// function uploadImg(req: Request, res: Response, next: NextFunction): void {
//   try {
//     upload.single("image")(req, res, async function (err: any): Promise<void> {
//       if (err) {
//         console.error("Error uploading image:", err);
//         res.status(500).send("Error uploading image.");
//       } else {
//         const bucket = admin.storage().bucket();

//         const imageBuffer = req.file ? req.file.buffer : null;
//         const imageName = req.file ? req.file.originalname : null;

//         if (!imageName) {
//           console.error("No file name provided.");
//           res.status(400).send("No file name provided.");
//           return;
//         }

//         const file = bucket.file(imageName);
//         const fileType = req.file.mimetype;

//         const result = await file.save(imageBuffer, { contentType: fileType });
//         console.log("Image uploaded successfully:");

//         const Name = imageName;
//         getImageDownloadUrl(Name)
//           .then((url) => {
//             res.locals.site = url;
//             console.log("Download URL:", res.locals.site);
//             next();
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//           });
//       }
//     });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     res.status(500).send("Error uploading image.");
//   }
// }

// export { uploadImg, admin };
