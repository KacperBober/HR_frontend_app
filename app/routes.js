const express = require("express");
const router = express.Router();
const employeedata = require("./employeedata");

// Add your routes here - above the module.exports line

router.get("/addemployee", async (req, res) => {
  res.render("new-employee-form");
});

router.post("/addemployee", async (req, res) => {
  try {
    let insertedKey = await employeedata.addEmployee(req.body);
    res.render("new-employee-form");
  } catch (e) {
    return new Error("Could not get employee");
  }
});

router.get("/list-employees", async (req, res) => {
  res.render("list-employees", {
    employees: await employeedata.getEmployees(),
  });
});

module.exports = router;
