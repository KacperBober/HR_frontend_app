const util = require("util");
const axios = require("axios");

exports.addEmployee = async (newee) => {
  axios
    .post("http://localhost:8080/api/employee", newee)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

exports.addEmployee2 = async (newEmployee) => {
  axios
    .post("http://localhost:8080/api/employee", newEmployee)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

exports.addEmployee2 = async (newEmployee) => {
  axios
    .post("http://localhost:8080/api/employee", newEmployee)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
