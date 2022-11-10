const express = require("express");
const router = express.Router();
const employeedata = require("./employeedata");

// Add your routes here - above the module.exports line

router.get("/addemployee", async (req, res) => {
  res.render("new-employee-form");
});

router.post("/addemployee", async (req, res) => {
  var employee = req.body;
  let insertedKey = await employeedata.addEmployee(req.body);
});

module.exports = router;
