"use strict";
const employeesList = [
    ...document.querySelectorAll("li")
];
const ul = document.querySelector("ul");
function sortBySalary() {
    const salarySorted = employeesList.sort((a, b)=>parseFloat(b.dataset.salary.replace("$", "").replace(/,/g, "")) - parseFloat(a.dataset.salary.replace("$", "").replace(/,/g, "")));
    salarySorted.forEach((li)=>ul.appendChild(li));
}
function getgetEmployees() {
    return employeesList.map((el)=>({
            name: el.textContent.trim(),
            age: el.dataset.age,
            position: el.dataset.position,
            salary: parseFloat(el.dataset.salary.replace("$", "").replace(/,/g, ""))
        }));
}
sortBySalary();
const employeesObjArray = getgetEmployees();
console.log(employeesObjArray);

//# sourceMappingURL=index.f75de5e1.js.map
