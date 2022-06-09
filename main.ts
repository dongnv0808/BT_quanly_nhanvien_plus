import { Employee, Gender } from "./employee";

let employees: Employee[] = [];

function showEmployee(employee: Employee){
    console.log(employee);
}
function addNewEmployee(employee: Employee){
    employees.push(employee)
}
function deleteEmployee(index: number){
    employees.splice(index, 1);
}

let employee1 = new Employee("Van Thi Thanh Thuy", Gender.FEMALE, new Date("1996-09-19"), "thuy1tiramisu99@gmail.com", "0972957603");
let employee2 = new Employee("Nghiem Van Dong", Gender.MALE, new Date("1995-08-08"), "yamraja0808@gmail.com", "0961443122");
let employee3 = new Employee("Nghiem Van Ninh", Gender.MALE, new Date("1996-08-16"), "ninh.nghiemvan@gmail.com", "0972957633");

showEmployee(employee1);
showEmployee(employee2);
showEmployee(employee3);

addNewEmployee(employee1);
addNewEmployee(employee2);
addNewEmployee(employee3);

console.log(employees)

deleteEmployee(0);

console.log(employees)

