import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.104:3333",
  //baseURL: "http://172.16.11.241:3333",
});

export default api;
