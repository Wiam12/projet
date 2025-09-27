import React, { useState } from 'react';
import './ScsPoDatabase.scss';  // Make sure you style your component

const ScsPoDatabase = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileDetails, setFileDetails] = useState({
    fileName: '',
    uploadDate: '',
    totalLines: 0,
    fileSize: 0,
  });
  const [fileHistory, setFileHistory] = useState([]);

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const lines = fileReader.result.split('\n').length;

        // Update the file details
        setFileDetails({
          fileName: file.name,
          uploadDate: new Date().toLocaleDateString(),
          totalLines: lines,
          fileSize: file.size,
        });

        setUploadedFile(file);

        // Add the file to the history list
        setFileHistory((prevHistory) => [
          ...prevHistory,
          {
            fileName: file.name,
            uploadDate: new Date().toLocaleDateString(),
            totalLines: lines,
            fileSize: file.size,
          },
        ]);
      };

      fileReader.readAsText(file); // Read the file as text if it's CSV or any other text format
    }
  };

  // Handle the "Export History Upload" button click
  const handleExportHistoryUpload = () => {
    // You can add your actual export logic here
    alert('Export History Upload button clicked!');
    // You can trigger file download, fetch data, etc.
  };

  return (
    <div className="scs-po-database-container">
      <header className="page-header">
        <h1>SCS PO Database</h1>
      </header>

      {/* File Upload Section */}
      <section className="section upload-section">
        <h2>Upload File for SCS Database</h2>
        <div className="upload-group">
          <label htmlFor="fileUpload">Upload File:</label>
          <input type="file" id="fileUpload" onChange={handleFileUpload} />
        </div>

        {/* Display uploaded file details */}
        {uploadedFile && (
          <div className="file-details">
            <h3>Uploaded File Details</h3>
            <table>
              <tbody>
                <tr>
                  <td><strong>File Name:</strong></td>
                  <td>{fileDetails.fileName}</td>
                </tr>
                <tr>
                  <td><strong>Upload Date:</strong></td>
                  <td>{fileDetails.uploadDate}</td>
                </tr>
                <tr>
                  <td><strong>Total Lines:</strong></td>
                  <td>{fileDetails.totalLines}</td>
                </tr>
                <tr>
                  <td><strong>File Size:</strong></td>
                  <td>{(fileDetails.fileSize / 1024).toFixed(2)} KB</td>
                </tr>
              </tbody>
            </table>
            <div className="info-note">
              <p><strong>Note:</strong> The uploaded file will be automatically deleted after 30 days.</p>
            </div>
          </div>
        )}
      </section>

      {/* Export History Upload Section (No title here) */}
      <section className="section export-history">
        <button onClick={handleExportHistoryUpload} className="export-history-btn">
          Export History Upload
        </button>

        <table className="history-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Upload Date</th>
              <th>Total Lines</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {fileHistory.length > 0 ? (
              fileHistory.map((file, index) => (
                <tr key={index}>
                  <td>{file.fileName}</td>
                  <td>{file.uploadDate}</td>
                  <td>{file.totalLines}</td>
                  <td>{(file.fileSize / 1024).toFixed(2)} KB</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No file uploaded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ScsPoDatabase;

