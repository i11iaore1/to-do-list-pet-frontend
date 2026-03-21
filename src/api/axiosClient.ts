import axios from "axios";

const BASE_URL = "https://api.example.com";
const AUTH_PREFIX = "Bearer";
export let ACCESS_TOKEN = "";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { Authorization: `${AUTH_PREFIX} ${ACCESS_TOKEN}` },
});
