"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvData = void 0;
const express_1 = __importDefault(require("express"));
// import multer from 'multer';
// import csvParser from 'csv-parser';
// import {updateFile } from "../controller/controllers";
const router = express_1.default.Router();
exports.csvData = [];
// const storage = multer.memoryStorage(); // Almacena el archivo CSV en memoria
// const upload = multer({ storage });
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
router.post('/files', (req, _res) => {
    console.log('body', req);
    // const file = req.body;
    // try {
    //   if (!file) {
    //     return res.status(400).json({ message: 'No file uploaded.' });
    //   } else {
    //     // updateFile(file);
    //     return res.status(200).json({ message: 'The file was uploaded successfully.' });
    //   }
    // } catch (error: any) {
    //   return res.status(500).json({ message: error.message });
    // }
});
exports.default = router;
// Parse the CSV data
// csvData = [];
// fs.createReadStream(fileBuffer)
//   .pipe(csv())
//   .on('data', (row: any) => {
//     csvData.push(row);
//   })
//   .on('end', () => {
//     res.status(200).json({ message: 'The file was uploaded successfully.'});
