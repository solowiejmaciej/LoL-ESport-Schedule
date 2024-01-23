import axios from "axios";

const httpClient = axios.create({
  baseURL: "/api/persisted/gw",
  maxBodyLength: Infinity,
  headers: {
    "x-api-key": "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z",
  },
  params: {
    hl: "en-US",
  },
});

export default httpClient;
