import axios from "axios";

const API = {
  employees: function () {
    return axios.get(
      "https://run.mocky.io/v3/ce160a84-83a8-45cf-9cf7-755d61acef54"
    );
  },
};

export default API;
