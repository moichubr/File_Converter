// import {readFileSync} from 'fs';
import {csvData } from '../../../csvData';
import * as fs from 'fs';
import csv from 'csv-parser'; //instalar como módulo



export const updateFile = (file: any) => {
    // console.log('file en controller', file)
    // const results: any[] = [];
    
    fs.createReadStream(file.path) 
      .pipe(csv())
      .on('data', (data: any) => csvData.push(data))
      .on('end', () => { 
        // Procesa los resultados después de que se haya completado el análisis
        console.log('ladata en controller', csvData);
          return {message: 'The file was uploaded successfully.'}
      })
    };
