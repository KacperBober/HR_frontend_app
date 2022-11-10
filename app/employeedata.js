const util = require("util");
const axios = require("axios");

exports.addEmployee = async (newEmployee) => {
  axios
    .post("http://localhost:8080/api/employee", newEmployee)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

exports.getEmployees = async () => {
  try {
    const employeeResponse = await axios.get(
      "http://localhost:8080/api/employee"
    );
    //console.log(employeeResponse.data)
    return employeeResponse.data;
  } catch (e) {
    return new Error("Could not get employee");
  }
};
