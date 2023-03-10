import axios from "axios";

const baseURL = "http://localhost:5000";

const headers = {
  "content-type": "application/json",
  accept: "application/json",
};
const token = localStorage.getItem("token");
if (token) headers.authorization = `Bearer ${token}`;

// create a axios instant
export const axiosInstance = axios.create({
  baseURL,
  headers,
});
