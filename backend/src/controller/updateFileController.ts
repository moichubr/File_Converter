import {csvData } from '../../csvData';
import * as fs from 'fs';
import csv from 'csv-parser'; //instalar como módulo

export const updateFile = (file: any) => {
    // console.log('file en controller', file)    
    fs.createReadStream(file.path) 
      .pipe(csv()) //parsea
      .on('data', (data: any) => csvData.push(data)) //guarda la data
      .on('end', () => {  //cuando termina
        console.log('ladata en controller', csvData);
          return {message: 'The file was uploaded successfully.'}
      })
    };
