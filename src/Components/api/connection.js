import axios from "axios";

const API = axios.create({
  baseURL: "https://api.hgbrasil.com/weather?key=db5f9918&city_name=",
});

export default API;
