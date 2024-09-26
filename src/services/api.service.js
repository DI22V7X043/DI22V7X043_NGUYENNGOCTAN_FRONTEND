import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const createApiClient = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    headers: commonConfig.headers, // Sử dụng đúng cú pháp cho headers
  });
};

export default createApiClient;
