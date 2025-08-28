// components/Dashboard.jsx
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "Total", received: 150, paid: 120 },
  { name: "Weekly", received: 80, paid: 50 },
  { name: "Monthly", received: 200, paid: 150 },
  { name: "Quarter", received: 400, paid: 300 },
  { name: "Yearly", received: 1000, paid: 850 },
];

const pieData = [
  { name: "Within 15 days", value: 50 },
  { name: "15-30 days", value: 40 },
  { name: "30-60 days", value: 30 },
  { name: "60-90 days", value: 20 },
  { name: "90-120 days", value: 15 },
  { name: "120-365 days", value: 10 },
  { name: "More than 1 year", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A", "#9933FF", "#FF3366"];

const Dashboard = () => {
  const [filters, setFilters] = useState({ account: "", project: "", category: "" });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const styles = {
    container: { padding: "1rem", fontFamily: "Arial, sans-serif" },
    section: { marginBottom: "2rem", background: "#fff", padding: "1rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    sectionTitle: { marginBottom: "1rem" },
    filters: { display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" },
    input: { flex: "1 1 150px", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" },
    poCards: { display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" },
    poCard: { flex: "1 1 150px", background: "#f4f4f4", padding: "1rem", borderRadius: "8px", textAlign: "center" },
    chartContainer: { width: "100%", height: "300px", marginBottom: "1rem" },
    timelineCards: { display: "flex", flexWrap: "wrap", gap: "0.5rem" },
    timelineCard: { flex: "1 1 150px", background: "#e0e0e0", padding: "0.5rem", borderRadius: "6px", textAlign: "center" },
  };

  const timelineLabels = [
    "Within 15 days",
    "15-30 days",
    "30-60 days",
    "60-90 days",
    "90-120 days",
    "120-365 days",
    "More than 1 year",
  ];

  return (
    <div style={styles.container}>
      {/* Global View */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Global View</h2>
        <div style={styles.poCards}>
          <div style={styles.poCard}>
            <h3>Total</h3>
            <div>{barData[0].received + barData[0].paid}</div>
          </div>
          <div style={styles.poCard}>
            <h3>Received PO</h3>
            <div>{barData[0].received}</div>
          </div>
          <div style={styles.poCard}>
            <h3>Paid PO</h3>
            <div>{barData[0].paid}</div>
          </div>
        </div>

        <div style={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="received" fill="#8884d8" />
              <Bar dataKey="paid" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Split GAP Acceptance */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Split GAP Acceptance</h2>
        <div style={styles.filters}>
          <input
            type="text"
            placeholder="Filter by Account"
            name="account"
            value={filters.account}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Filter by Project"
            name="project"
            value={filters.project}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Filter by Category"
            name="category"
            value={filters.category}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={120} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.timelineCards}>
          {timelineLabels.map((label, i) => (
            <div key={i} style={styles.timelineCard}>{label}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
