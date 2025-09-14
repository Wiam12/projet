let token = null;

export const setToken = (newToken) => {
  token = newToken;
};

export const getToken = () => token;

// Exemple de fonction fetch avec token
export const fetchWithToken = async (url, options = {}) => {
  const headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : "",
  };
  const res = await fetch(url, { ...options, headers });
  return res.json();
};
