// components/SCSAcceptance.jsx
import React, { useState } from "react";

const SCSAcceptance = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files).map(file => ({
      uploadedFile: file,
      dateUpload: new Date().toLocaleString(),
      fileName: file.name,
      totalLines: "-",
      size: `${(file.size / 1024).toFixed(2)} KB`
    }));
    setFiles(prev => [...uploadedFiles, ...prev]);
  };

  const handleExportHistory = () => {
    alert("Export history clicked");
  };

  return (
    <div style={{
      padding: "30px 20px",
      fontFamily: "'Segoe UI', sans-serif",
      width: "100%",       // prend toute la largeur de l'écran
      maxWidth: "100%",    // limite supprimée pour 100% zoom
      margin: "0 auto",
      fontSize: "16px"     // taille de police normale pour 100%
    }}>
      <h2 style={{ marginBottom: "20px", color: "#1e40af", fontSize: "24px" }}>
        Data importation / SCS Acceptance
      </h2>

      {/* Upload section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "20px", alignItems: "center" }}>
        <div style={{
          flex: "1 1 250px",
          padding: "14px 18px",
          background: "#f3f4f6",
          borderRadius: "10px",
          fontWeight: "600",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
        }}>
          SCS Acceptance (from system)
        </div>

        <input
          type="file"
          onChange={handleUpload}
          style={{
            flex: "1 1 250px",
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleExportHistory}
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
            transition: "0.2s"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#1e40af"}
          onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
        >
          Export history
        </button>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1200px", fontSize: "16px" }}>
          <thead>
            <tr style={{ background: "#e0e7ff", color: "#1e3a8a" }}>
              {["Date upload", "File name", "Total lines", "Size"].map((header, idx) => (
                <th key={idx} style={{ textAlign: "left", fontWeight: "600", padding: "14px 16px", borderBottom: "2px solid #c7d2fe" }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {files.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "25px", color: "#6b7280" }}>
                  No files uploaded yet
                </td>
              </tr>
            ) : (
              files.map((file, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "12px 16px" }}>{file.dateUpload}</td>
                  <td style={{ padding: "12px 16px" }}>{file.fileName}</td>
                  <td style={{ padding: "12px 16px" }}>{file.totalLines}</td>
                  <td style={{ padding: "12px 16px" }}>{file.size}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: "12px", color: "#6b7280" }}>
        ** Uploaded files will be automatically deleted in 30 days.
      </p>
    </div>
  );
};

export default SCSAcceptance;
