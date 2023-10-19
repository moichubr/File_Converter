import express from "express";
import multer from "multer";
import { updateFile } from "../controller/updateFileController";
import searchUsers from "../controller/searchUsersController";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

//search route
router.get("/users", async (req, res) => {
  const { keyword } = req.query;
  // console.log('keyword', keyword)

  if (!keyword) {
    return res.status(404).json({ message: "Write something" });
  }
  try {
    const result = await searchUsers(keyword);
    return res.status(200).json({ data: result });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

//upload file route
router.post("/files", upload.single("file"), async (req, res) => {
  // console.log('body', req.file);
  const csvFile = req.file;

  try {
    if (!csvFile) {
      return res.status(400).json({ message: "No file uploaded." });
    } else {
      await updateFile(csvFile);
      return res
        .status(200)
        .json({ message: "The file was uploaded successfully." });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
