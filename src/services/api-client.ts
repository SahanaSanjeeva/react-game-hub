import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "93b463a439404970a281d8aab397fe75",
  },
});
