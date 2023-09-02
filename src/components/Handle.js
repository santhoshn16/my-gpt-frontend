import React, { useState } from 'react';
import FileUpload from './FileUpload';
import DownloadFile from './DownloadFile';
import axios from 'axios';

function Handle() {
    const [fileUrl, setFileUrl] = useState(null);
    const API_URL = 'http://127.0.0.1:8080';
    const handleFileUpload = async (file) => {
      try {
        const formData = new FormData();
        formData.append('file', file);
  
        // Make the file upload request using Axios
        const response = await axios.post(API_URL+ '/api/upload-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        if (response.status === 200) {
          // If the upload was successful, set the processed file URL
          const processedFileUrl = response.data;
          setFileUrl(processedFileUrl);
        } else {
          // Handle errors here
          console.error('Error uploading file:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  
    return (
      <div>
        <h1>File Handling App</h1>
        <FileUpload onFileUpload={handleFileUpload} />
        {fileUrl && <DownloadFile fileUrl={fileUrl} />}
      </div>
    );
}

export default Handle;