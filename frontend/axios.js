import axios from "axios";

export const axiosMedium = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
    //timeout: 1000,
  });

export const axiosAuth = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/auth`,
  });
