// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employee = {
  firstName: [],
  lastName: [],
  salary:[],
}

// Collect employee data
const collectEmployees = function()  {
  
  const employees = [];
  
  while (confirm("Would you like to add an employee?")) {
    const firstName = prompt("Please enter the employees first name:");
    const lastName = prompt("Please enter the employees last name:");
    const salary = prompt("Please enter the salary of the employee:");
      
// Create a new employee object
 const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary) || 0 // Convert salary to a number or default to 0
  };

  employees.push(newEmployee);
}

// Sort employees by last name in ascending order
employees.sort((a, b) => {
  if (a.lastName < b.lastName) return -1;
  if (a.lastName > b.lastName) return 1;
  return 0;
});

console.log(employees);
};

// Event listener for the button click
addEmployeesBtn.addEventListener('click', collectEmployees);

// Display the average salary
const displayAverageSalary = function(employeesArray) {

let salaryTotal = 0

  for (let s = 0; s < employeesArray.length; s++) {
    let salary = employeesArray[s].salary;
    salaryTotal = salaryTotal + salary;
  }

  const averageSalary = totalSalary / employeesArray.length;

  return console.log (
    `The average salary of ${employeesArray.length} employee's us ${averageSalary}`
  );
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
   
  // Check if the employeesArray is not empty
    if (employeesArray.length === 0) {
        console.log("No employees to select from.");
        return;
    }
   
      // Generate a random index within the range of the array length
      const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
      // Get the random employee object at the random index
      const randomEmployee = employeesArray[randomIndex];
  
      // Display the full name of the random employee
      console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  };

  getRandomEmployee(employees);

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
