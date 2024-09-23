//Coding Challenge #6
//Task 1: Create an Employees Array of Employee Objects
const employees = [{
    name: "Lamar Miller",
    shifts: [
      { day: "Monday", hours: 8 },
      { day: "Thursday", hours: 8 },
      { day: "Friday", hours: 8 }
    ]},{
    name: "Myles Gaskin",
    shifts: [
      { day: "Tuesday", hours: 8 },
      { day: "Wednesday", hours: 8 },
      { day: "Saturday", hours: 8 }
    ]},{
    name: "Jay Ajayi",
    shifts: [
      { day: "Monday", hours: 8 },
      { day: "Wednesday", hours: 8 },
      { day: "Sunday", hours: 8 }
    ]},{
    name: "Raheem Mostert",
    shifts: [
      { day: "Wednesday", hours: 8 },
      { day: "Friday", hours: 8 },
      { day: "Sunday", hours: 8 }
    ]}];

//Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts (employees) {
    employees.forEach(item => 
        item.shifts.forEach(shifts =>
        console.log(`${item.name} works ${shifts.day} for ${shifts.hours} hours`)
        ))}
displayEmployeeShifts (employees)

//Task 3:Create a Function to Assign a New Shift
function assignShift (employees) {
    employees.find((name)=> name === employees.name)
    if (employees.some((shifts) => shifts.day === day))
        console.log(`Error: Employee Already Schedueled`)
}

//Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours (employeeName) {
    let employee = employees.find(em => em.name === employeeName);
    return employee.shifts.reduce((total, shifts) => total + shifts.hours)
}
console.log(`Total Hours for Lamar Miller : ${calculateTotalHours("Lamar Miller")}`)

//Task 5: Create a Function to List Employees with Free Days
