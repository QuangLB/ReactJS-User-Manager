import axios from "axios";

const instance = axios.create({
  baseURL: "https://615d1b3ec298130017736401.mockapi.io/ttcn",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
