import React, { useState } from "react";
import "./Account-ProjectName.scss";

const AccountProjectName = () => {
  const [accountName, setAccountName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [existedAccount, setExistedAccount] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(true);
  const [file, setFile] = useState(null);

  const handleSaveAccountProject = () => {
    if (isAccountCreated) {
      console.log("Account Created:", accountName, "Project:", projectName);
    } else {
      console.log("Existed Account:", existedAccount, "Project:", projectName);
    }
  };

  const handleFileUpload = (e) => {
    const f = e.target.files?.[0];
    setFile(f || null);
    if (f) console.log("File uploaded:", f.name);
  };

  return (
    <div className="account-project-container">
      <header className="page-header">
        <h1>Sub-Database : Account - Project Name</h1>
      </header>

      {/* 1. Account Creation */}
      <section className="section account-creation">
        <h2>1. Account Creation</h2>
        <p>Choose whether to create a new account or use an existing account.</p>

        {isAccountCreated ? (
          <div className="form-group">
            <label htmlFor="accountName">Create Account:</label>
            <input
              id="accountName"
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Enter Account Name"
            />
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="existingAccount">Existing Account:</label>
            <input
              id="existingAccount"
              type="text"
              value={existedAccount}
              onChange={(e) => setExistedAccount(e.target.value)}
              placeholder="Enter Existing Account Name"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="projectNameCreate">Project Name:</label>
          <input
            id="projectNameCreate"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter Project Name"
          />
        </div>

        <button onClick={handleSaveAccountProject}>Save Account &amp; Project</button>
      </section>

      {/* 2. Assign Project to Account */}
      <section className="section project-assignment">
        <h2>2. Assign Project to Account</h2>
        <p>Link a project to an existing or new account.</p>

        <div className="form-group">
          <label htmlFor="accountHuawei">Account Huawei:</label>
          <input id="accountHuawei" type="text" placeholder="Enter Account Huawei" />
        </div>

        <div className="form-group">
          <label htmlFor="projectNameAssign">Project Name:</label>
          <input
            id="projectNameAssign" // id unique (évite le conflit)
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter Project Name"
          />
        </div>

        <button onClick={handleSaveAccountProject}>Assign Project</button>
      </section>

      {/* 3. Massive Creation */}
      <section className="section massive-creation">
        <h2>3. Massive Creation</h2>
        <p>
          Download a template for bulk creation, then upload the file to process multiple
          accounts and projects.
        </p>

        <button className="btn-template-download">Download Template</button>

        <div className="file-upload-group">
          <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />
          {file && <span className="file-name">File: {file.name}</span>}
        </div>

        <button className="btn-upload-file">Upload File</button>
      </section>

      {/* Toggle Account Creation */}
      <div className="toggle-category">
        <button
          className="switch-btn"
          onClick={() => setIsAccountCreated((v) => !v)}
        >
          {isAccountCreated ? "Switch to Existing Account" : "Switch to Create Account"}
        </button>
      </div>
    </div>
  );
};

export default AccountProjectName;