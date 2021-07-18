const express = require('express');
const router = express.Router();
const employeController = require('../controllers/employee.controller');

// get all employees
router.get('/', employeController.getEmployeeList);

// get employee by ID
router.get('/:id', employeController.getEmployeeByID);

// create new employee
router.post('/', employeController.createNewEmployee);

// update employee
router.put('/:id', employeController.updateEmployee);

module.exports = router;