import axios from "axios";

const apiCodeBurger = axios.create({
  baseURL: "https://code-club-burger-production.up.railway.app",
});

export default apiCodeBurger;
