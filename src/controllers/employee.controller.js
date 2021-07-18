const EmployeeModel = require('../models/employee.model');


// Get all employee list
getEmployeeList=(req,res)=>{
    //console.log('Here all employee List');
    EmployeeModel.getAllEmployees((err, employees)=>{
        console.log('We are here');
        if(err) res.send(err);
        console.log('Employees', employees);
        res.send(employees);     
    });
}

// get employee by id
getEmployeeByID = (req,res) =>{
    console.log('get employee by id');
    EmployeeModel.getEmployeeByID(req.params.id,(err,employee)=>{
        if (err) res.send(err);
        console.log('Single employee data', employee);
        res.send(employee);
    })
}

// create new employee
createNewEmployee = (req,res) =>{
    console.log('req data', req.body);
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log('valid data');
       
        EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
            if(err)
                res.send(err);
                res.json({status: true, message:'Employee Created Successfully', data: employee.insertId})
            
        });
    }
}

// update employee

updateEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill al fields'});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData,(err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        });
    }

}









module.exports = {
    getEmployeeList: getEmployeeList,
    getEmployeeByID: getEmployeeByID,
    createNewEmployee: createNewEmployee,
    updateEmployee: updateEmployee
}