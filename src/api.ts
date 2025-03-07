import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // Criou-se um json-server na porta 3001
});

export default api;
