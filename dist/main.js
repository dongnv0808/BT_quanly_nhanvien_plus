"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
let employees = [];
function showEmployee(employee) {
    console.log(employee);
}
function addNewEmployee(employee) {
    employees.push(employee);
}
function deleteEmployee(index) {
    employees.splice(index, 1);
}
let employee1 = new employee_1.Employee("Van Thi Thanh Thuy", employee_1.Gender.FEMALE, new Date("1996-09-19"), "thuy1tiramisu99@gmail.com", "0972957603");
let employee2 = new employee_1.Employee("Nghiem Van Dong", employee_1.Gender.MALE, new Date("1995-08-08"), "yamraja0808@gmail.com", "0961443122");
let employee3 = new employee_1.Employee("Nghiem Van Ninh", employee_1.Gender.MALE, new Date("1996-08-16"), "ninh.nghiemvan@gmail.com", "0972957633");
showEmployee(employee1);
showEmployee(employee2);
showEmployee(employee3);
addNewEmployee(employee1);
addNewEmployee(employee2);
addNewEmployee(employee3);
console.log(employees);
deleteEmployee(0);
console.log(employees);
