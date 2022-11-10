
const util = require ('util');
const axios = require("axios");


exports.getEmployees = async () => { 
  try {  
      const employeeResponse = await axios.get('http://localhost:8080/api/employees')
      //console.log(employeeResponse.data)
      return employeeResponse.data
    } catch (e) {
       return new Error('Could not get employee')
    }
}
