// components/SubDatabase.jsx
import React, { useState } from "react";

const SubDatabase = () => {
  const [acceptanceText, setAcceptanceText] = useState("AC80% - PAC20%\nACPAC100%");

  const Section = ({ title, children }) => (
    <div style={{ marginTop: "30px" }}>
      <div style={{
        backgroundColor: "#FFD700",
        padding: "15px 20px",
        fontWeight: "bold",
        fontSize: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
      }}>
        {title}
      </div>
      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
        {children}
      </div>
    </div>
  );

  const Card = ({ header, children }) => (
    <div style={{
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.2s, box-shadow 0.2s"
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0px)"}
    >
      {header && <div style={{ color: "#d32f2f", fontWeight: "bold", fontSize: "18px", marginBottom: "12px" }}>{header}</div>}
      {children}
    </div>
  );

  const LabelInput = ({ label, type = "input", value, onChange }) => (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
      <label style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}</label>
      {type === "input" ? (
        <input style={{
          padding: "12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
          transition: "border-color 0.2s"
        }}
          onFocus={e => e.currentTarget.style.borderColor = "#2563eb"}
          onBlur={e => e.currentTarget.style.borderColor = "#ccc"}
        />
      ) : (
        <textarea
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "vertical",
            minHeight: type === "textarea" ? "120px" : "auto",
            transition: "border-color 0.2s"
          }}
          value={value}
          onChange={onChange}
          onFocus={e => e.currentTarget.style.borderColor = "#2563eb"}
          onBlur={e => e.currentTarget.style.borderColor = "#ccc"}
        />
      )}
    </div>
  );

  const Button = ({ children, small }) => (
    <button style={{
      backgroundColor: small ? "#ccc" : "#00BFFF",
      color: small ? "#000" : "#fff",
      padding: small ? "10px 15px" : "12px 20px",
      fontSize: small ? "14px" : "16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.2s",
      fontWeight: "600",
      boxShadow: small ? "none" : "0 2px 6px rgba(0,0,0,0.15)"
    }}
      onMouseOver={(e) => e.currentTarget.style.opacity = 0.85}
      onMouseOut={(e) => e.currentTarget.style.opacity = 1}
    >
      {children}
    </button>
  );

  const MassiveCreation = () => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
      <Button small>Download template</Button>
      <input type="file" style={{ padding: "6px" }} />
    </div>
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "1600px", margin: "0 auto" }}>
      <Section title="Sub-Database : Account - Project Name">
        <Card header="Account Creation">
          <LabelInput label="Create Account" />
          <LabelInput label="Existed Account" type="textarea" />
          <Button>Save</Button>
        </Card>

        <Card header="Project Assignment to Account">
          <LabelInput label="Account Huawei" />
          <LabelInput label="Project Name" type="textarea" />
          <Button>Save</Button>
        </Card>

        <Card>
          <LabelInput label="Massive creation" />
          <MassiveCreation />
        </Card>
      </Section>

      <Section title="Sub-Database : Category - Item">
        <Card header="Category Items">
          <LabelInput label="Create Category" />
          <LabelInput label="Existed Category" type="textarea" />
          <Button>Save</Button>
        </Card>

        <Card header="Assign Item to Category">
          <LabelInput label="Category" />
          <LabelInput label="Item Description" type="textarea" />
          <Button>Save</Button>
        </Card>

        <Card>
          <LabelInput label="Massive creation" />
          <MassiveCreation />
        </Card>
      </Section>

      <Section title="Sub-Database : Acceptance Term">
        <Card header="Category Items">
          <LabelInput label="Create Category" />
          <LabelInput label="Existed Category" type="textarea" value={acceptanceText} onChange={(e) => setAcceptanceText(e.target.value)} />
          <Button>Save</Button>
        </Card>

        <Card header="Assign Item to Category">
          <LabelInput label="Category" />
          <LabelInput label="Item Description" type="textarea" />
          <Button>Save</Button>
        </Card>

        <Card>
          <LabelInput label="Massive creation" />
          <MassiveCreation />
        </Card>
      </Section>
    </div>
  );
};

export default SubDatabase;

