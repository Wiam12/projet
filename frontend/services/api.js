// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://respectful-vibrancy-production.up.railway.app/api",
});

// Ajout automatique du token dans les headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ---- Auth ----
export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data; // ton backend doit renvoyer { token: "..." }
};

// ---- Dashboard ----
export const getDashboardStats = async () => {
  const res = await api.get("/dashboard-stats");
  return res.data;
};

export const getMergedData = async () => {
  const res = await api.get("/merged-data");
  return res.data;
};

export const getAccountsReview = async () => {
  const res = await api.get("/accounts-review");
  return res.data;
};
// ---- Acceptance ----
export const getAcceptanceData = async () => {
  const res = await api.get("/po_data"); // correspond au endpoint /api/po_data
  return res.data;
};
// ---- Accounts ----
export const updateAccount = async (accountId, payload) => {
  const res = await api.put(`/accounts/${accountId}`, payload);
  return res.data;
};
// ---- Upload ----
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await api.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

export const uploadAcceptanceFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await api.post("/acceptance/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};


export default api;
