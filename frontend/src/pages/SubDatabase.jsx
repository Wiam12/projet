// pages/SubDatabase.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SubDatabase = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("account");
  const [acceptanceText, setAcceptanceText] = useState("AC80% - PAC20%\nACPAC100%");

  useEffect(() => {
    if(location.state?.tab) setActiveTab(location.state.tab);
  }, [location.state]);

  const Section = ({ title, children }) => (
    <div style={{ marginTop: "30px" }}>
      <div style={{ backgroundColor: "#FFD700", padding:"15px", fontWeight:"bold", fontSize:"20px", borderRadius:"8px" }}>{title}</div>
      <div style={{ marginTop:"20px", display:"flex", flexDirection:"column", gap:"20px" }}>{children}</div>
    </div>
  );

  const Card = ({ header, children }) => (
    <div style={{ backgroundColor:"#fff", padding:"20px", borderRadius:"10px", boxShadow:"0 3px 10px rgba(0,0,0,0.1)" }}>
      {header && <div style={{ color:"#d32f2f", fontWeight:"bold", fontSize:"18px", marginBottom:"12px" }}>{header}</div>}
      {children}
    </div>
  );

  const LabelInput = ({ label, type="input", value, onChange }) => (
    <div style={{ display:"flex", flexDirection:"column", marginBottom:"10px" }}>
      <label style={{ fontWeight:"bold", marginBottom:"5px" }}>{label}</label>
      {type==="input" ? (
        <input style={{ padding:"12px", borderRadius:"6px", border:"1px solid #ccc", fontSize:"16px" }} />
      ) : (
        <textarea style={{ padding:"12px", borderRadius:"6px", border:"1px solid #ccc", fontSize:"16px", minHeight:"120px" }} value={value} onChange={onChange} />
      )}
    </div>
  );

  const Button = ({ children, small }) => (
    <button style={{ backgroundColor: small?"#ccc":"#00BFFF", color:small?"#000":"#fff", padding:small?"10px 15px":"12px 20px", border:"none", borderRadius:"6px", cursor:"pointer", fontWeight:600 }}>{children}</button>
  );

  const MassiveCreation = () => (
    <div style={{ display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap" }}>
      <Button small>Download template</Button>
      <input type="file" style={{ padding:"6px" }} />
    </div>
  );

  return (
    <div style={{ padding:"20px", fontFamily:"Arial, sans-serif", maxWidth:"1600px", margin:"0 auto" }}>
      {activeTab === "account" && (
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
      )}

      {activeTab === "category" && (
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
      )}

      {activeTab === "acceptance" && (
        <Section title="Sub-Database : Acceptance Term">
          <Card header="Category Items">
            <LabelInput label="Create Category" />
            <LabelInput label="Existed Category" type="textarea" value={acceptanceText} onChange={e=>setAcceptanceText(e.target.value)} />
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
      )}
    </div>
  );
};

export default SubDatabase;


