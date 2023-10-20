import style from "./fileUpload.module.css"
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadResult, setUploadResult] = useState<string>("")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      setSelectedFile(file);
      console.log('file', file)
    };
  
  
  
    const handleUpload = () => {
      if (selectedFile) {
        console.log('submit', selectedFile)
        
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log('formdata', formData)
       
        axios
          .post('http://localhost:3000/api/files', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            setUploadResult(response.data.message)
            return uploadResult
            // console.log('resp data en upload', response.data);
          })
     
      } else {
        alert('Select a file first.');
      }
    };
  

    return(
        <>
        <div>
        <h2>Start by uploading a file</h2>
        <input type="file" onChange={handleFileChange} className={style.inputsearch}/>
        <button onClick={handleUpload}>Upload</button>
      </div>

      {uploadResult ? <span className={style.result}>{uploadResult}</span> : null}
      </>
    )
}

export default FileUpload