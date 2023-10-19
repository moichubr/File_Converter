import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
     
      axios
        .post('http://localhost:3000/api/files', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // Handle response from the server if needed
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error if the request fails
          console.error(error);
        });
    } else {
      alert('Select a file first.');
    }
  };

  return (
    <>
      <h1>Fullstack test</h1>
      <h2>Shaw & Partners</h2>
      <h3>by Moira Brun</h3>

    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>

    </>
  );
}

export default App;

  

//   return (
//     <>
//       <h1>Fullstack test</h1>
//       <h2>Shaw & Partners</h2>
//       <h3>by Moira Brun</h3>

// <div>
//       <input type='file' name='file' id='fileinput' onChange={handleFileChange}></input>
//       <button type='submit' onClick={handleSubmit}>Upload</button>
// </div>

// {/* <h6>{uploadStatus}</h6> */}
//     </>
//   )
// }

// export default App


// import { FormEvent, ChangeEvent, useState } from 'react'
// import './App.css'


// interface MyFormState {
//   selectedFile: File | null;
// }


// function App() {
//   const [fileUpdate, setFileUpdate] = useState<MyFormState>({ selectedFile: null });
//   // const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const inputElement = event.target as HTMLInputElement;
//     const files = inputElement.files;

//     console.log('files', files)

//     if (files && files.length > 0) {
//       const selectedFile = files[0];
//       console.log('fileupdate', selectedFile)
//       setFileUpdate({selectedFile});
//       console.log('fileupdateestado', fileUpdate)
//     } else {
//       setFileUpdate({ selectedFile: null });
//     }
//   };

//   const handleSubmit = (event: ClickEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!fileUpdate.selectedFile) { // Acceder a selectedFile
//       alert('Select a file');
//       return;
//     }
//     const file = new FormData();
//     file.append('file', fileUpdate.selectedFile); 
//     console.log(file.append)

//     try {
//         fetch('http://localhost:3000/api/files', {
//         method: 'POST',
//         body: file,
//         mode: 'no-cors',
//       })
      
    
      // if (response.ok) {
      //   const data = await response.json();
      //   if (data.ok) {
      //     setUploadStatus(data);
      //   } else {
      //     setUploadStatus(data);
      //   }
      // }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   } catch (error: any) {
  //     // console.error('Error en la solicitud:', error);
  //     window.alert(error.message)
  //   }
  // }

  // function handleSubmit() {
  //   fetch('http://localhost:3000/api/files')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     window.alert(data)
  //   })
  // }