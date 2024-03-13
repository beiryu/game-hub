import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c51c98b3112643fe91cf840e73170245",
  },
});
