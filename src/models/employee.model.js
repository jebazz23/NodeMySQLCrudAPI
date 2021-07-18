var dbConn = require('../../config/db.config');

var Employee = function(employee){
    this.first_name=employee.first_name;
    this.last_name=employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.organization;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all employees
Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employees', (err,res)=>{
            if(err) {
                console.log('Error while fetching employees', err);
                result(null,err);
            }else{
                console.log('Employees fetched successfully');
                result(null,res);
                
            }
    });
}

// get e,ployee by ID from DB
Employee.getEmployeeByID = (id, result)=>{
    dbConn.query('SELECT * FROM employees WHERE id=?', id, (err,res)=>{
        if(err){
            console.log('Errir while fetching employee by id', err);
            result(null,err);
        }else{
            result(null,res);
        }
    });
}

// create new employee
Employee.createEmployee = (employeeReqData, result) =>{
dbConn.query('INSERT INTO employees SET ?', employeeReqData, (err,res)=>{
    
    if(err){
        console.log('Error while inserting data');
        result(null, err);
    }else{
        console.log('Employee created successfully');
        result(null,res);
    }
});
}



module.exports= Employee;