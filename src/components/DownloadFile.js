import React from 'react';

function DownloadFile({ fileUrl }) {
  const handleDownload = () => {
    // Create an anchor element to trigger the download
    // const anchor = document.createElement('a');
    // anchor.href = fileUrl;
    // anchor.download = 'processed-file.txt';
    // anchor.click();

    const url = window.URL.createObjectURL(new Blob([fileUrl]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'processed-file.txt');
    document.body.appendChild(link);


    // Trigger the download
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
   
  };

  return (
    <div>
      <h2>Download Processed File</h2>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default DownloadFile;
