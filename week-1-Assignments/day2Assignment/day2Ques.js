const employees = [
{
eno: 101,
name: "Ravi",
marks: [78, 82, 91],
},
{
eno: 102,
name: "Bhanu",
marks: [65, 70, 68],
},
{
eno: 103,
 name: "Sneha",
  marks: [88, 92, 95], 
},
{
eno: 104,
name:"kiran",
marks: [55, 60, 58],

},
{
eno:105,
name: "Anitha",
marks: [90, 85, 87],
},
];
employees.splice(1,0,{eno:106,name:"raji",marks:[90,95,97]})//1st question
console.log(employees)
employees.splice(4,1)//2nd question
console.log(employees)

employees[3].marks.splice(2,1,75)//3rd question
   console.log(employees)

