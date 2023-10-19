import express from "express";
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
import {updateFile} from "../controller/updateFileController";
import searchUsers from "../controller/searchUsersController";


const router = express.Router()

// export let csvData: any[] = [];

router.get('/users', async (req, res) => {
  const {keyword} = req.query;
  console.log('keyword', keyword)

   if (!keyword) {
      return res.status(400).json({ message: 'Write something'});
    }
  try {
    const result = await searchUsers(keyword);
    return res.status(200).json({ data: result })
  }
//     try {
//       const results = csvData.filter((row) => {
//         return Object.values(row).some((value: any) =>
//         //   value.toLowerCase().includes(data.toLowerCase())
//         );
//       });
  
//       res.status(200).json({ data: results });
    catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  });


router.post('/files', upload.single('file'), async (req, res) => {
  // console.log('body', req.file);
  const csvFile = req.file;
  // const file = req.body;
  
  try {
    if (!csvFile) {
      return res.status(400).json({ message: 'No file uploaded.' });
    } else {
      await updateFile(csvFile);
      return res.status(200).json({ message: 'The file was uploaded successfully.' });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});


export default router
