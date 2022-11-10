const util = require("util");
const axios = require("axios");

exports.addEmployee = async (newEmployee) => {
  axios
    .post("http://localhost:8080/api/employee", newEmployee)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


