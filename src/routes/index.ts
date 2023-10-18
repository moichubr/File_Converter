import express from "express";
import multer from 'multer';
// import csvParser from 'csv-parser';
import fs from 'fs';


const router = express.Router()

const storage = multer.memoryStorage(); // Almacena el archivo CSV en memoria
const upload = multer({ storage });

let csvData: any[] = [];


// router.get('/users', (req, res) => {
//     const data = req.query;

//     if (!data) {
//       return res.status(400).json({ message: 'Required' });
//     }
  
//     try {
//       const results = csvData.filter((row) => {
//         return Object.values(row).some((value: any) =>
//         //   value.toLowerCase().includes(data.toLowerCase())
//         );
//       });
  
//       res.status(200).json({ data: results });
//     } catch (error: any) {
//       res.status(500).json({ message: error.message });
//     }
//   });


router.post('/files',  upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded.' });
        }
    
        const fileBuffer = req.file.buffer.toString();
    
        // Parse the CSV data
        csvData = [];
        fs.createReadStream(fileBuffer)
          .pipe(csv())
          .on('data', (row: any) => {
            csvData.push(row);
          })
          .on('end', () => {
            res.status(200).json({ message: 'The file was uploaded successfully.'});
          });
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    });


export default router