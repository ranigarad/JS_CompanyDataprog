// Filename: companyData.js

const companyData = {
    companyInfo: {
        companyName: "ABC Corp",
        location: "pune",
        establishedYear: 2000
    },
    employees: [
        {
            id: 1,
            name: "Vamika jadhav",
            position: "Software Engineer",
            department: "Development",
            salary: 80000
        },
        {
            id: 2,
            name: "Ram Kapoor",
            position: "Marketing Specialist",
            department: "Marketing",
            salary: 60000
        },
        {
            id: 3,
            name: "Priya Noor",
            position: "HR Manager",
            department: "Human Resources",
            salary: 75000
        }
    ]
};


console.log("Company Name:", companyData.companyInfo.companyName);
console.log("Location:", companyData.companyInfo.location);
console.log("Employee 1 Name:", companyData.employees[0].name);
console.log("Employee 2 Position:", companyData.employees[1].position);
