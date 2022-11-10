const express = require("express");
const router = express.Router();
const employeedata = require('./employeedata.js')

// Add your routes here - above the module.exports line

router.get("/addemployee", async (req, res) => {
  res.render("new-employee-form");
});

router.post("/addemployee", async (req, res) => {
  var employee = req.body;
  let insertedKey = await employeedata.addEmployee(req.body);
});

router.get('/list-employees', async (req, res) => { 
  res.render('list-employees', { employees: await employeedata.getEmployees() } ) 
  
});

module.exports = router;
