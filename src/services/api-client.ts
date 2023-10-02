import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d9f78f7bcfd1461380d3b18854dd6e27",
  },
});

export default apiClient;
