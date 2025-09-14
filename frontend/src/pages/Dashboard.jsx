// components/Dashboard.jsx
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const barData = [
  { name: "Total", received: 80, paid: 70, unit: "MMAD" },
  { name: "Weekly", received: 200, paid: 200, unit: "MMAD" },
  { name: "Monthly", received: 350, paid: 350, unit: "MMAD" },
  { name: "Yearly", received: 500, paid: 500, unit: "MMAD" },
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

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA336A",
  "#9933FF",
  "#FF3366",
];

const Dashboard = () => {
  const [filters, setFilters] = useState({ account: "", project: "", category: "" });

  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const styles = {
    container: { padding: "2rem", fontFamily: "Arial, sans-serif", background: "#f5f7fb", minHeight: "100vh" },
    section: { marginBottom: "2rem", background: "#fff", padding: "1.5rem", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
    sectionTitle: { marginBottom: "1.5rem", fontWeight: "600", fontSize: "1.25rem", color: "#2d3436", background: "#ffeaa7", padding: "0.5rem 1rem", borderRadius: "8px" },
    poCards: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" },
    poCard: { background: "#fdfdfd", padding: "1.2rem", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
    poCardTitle: { fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" },
    poCardValue: { fontSize: "1.4rem", fontWeight: "bold", color: "#0984e3", marginBottom: "1rem" },
    chartContainerFull: { width: "100%", height: "200px" },
    filters: { display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" },
    input: { flex: "1 1 180px", padding: "0.6rem 0.8rem", borderRadius: "8px", border: "1px solid #dfe6e9", fontSize: "0.9rem" },
    chartContainer: { width: "100%", height: "340px" },
  };

  return (
    <div style={styles.container}>
      {/* Global View */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🌍 Global View</h2>
        <div style={styles.poCards}>
          {barData.map((d, i) => (
            <div key={i} style={styles.poCard}>
              <h3 style={styles.poCardTitle}>{d.name}</h3>
              <div style={styles.poCardValue}>{d.received + d.paid} {d.unit}</div>
              <div style={styles.chartContainerFull}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[d]}
                    layout="vertical"
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                  >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    {/* Barre unique divisée en deux couleurs */}
                    <Bar dataKey="received" stackId="a" fill="#00b894" barSize={30} />
                    <Bar dataKey="paid" stackId="a" fill="#6c5ce7" barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Split GAP Acceptance */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📊 Split GAP Acceptance</h2>
        <div style={styles.filters}>
          <input type="text" placeholder="Filter by Account" name="account" value={filters.account} onChange={handleChange} style={styles.input} />
          <input type="text" placeholder="Filter by Project" name="project" value={filters.project} onChange={handleChange} style={styles.input} />
          <input type="text" placeholder="Filter by Category" name="category" value={filters.category} onChange={handleChange} style={styles.input} />
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
      </div>
    </div>
  );
};

export default Dashboard;
