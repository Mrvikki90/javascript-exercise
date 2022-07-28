
const lodash = require('lodash');
const { resolve } = require('path');
var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: "
            + this.ename + "-->Salary: "
            + this.salary;
}}

//console.log("Employee=> ", employee);
// var newEmployee = employee;
// console.log(newEmployee);

// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log(newEmployee);

// var newEmployee = JSON.parse(JSON.stringify(employee));


// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;

// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// var deepCopy = lodash.cloneDeep(employee);
// console.log("Original Employee Object");
// console.log(employee);
// console.log("Deep Copied Employee Object");
// console.log(deepCopy);
// deepCopy.eid = "E103";
// deepCopy.ename = "Beck";
// deepCopy.details = function () {
//     return "Employee ID: " + this.eid
//         + "-->Salary: " + this.salary;
// }
// console.log("----------After Modification----------");
// console.log("Original Employee Object");
// console.log(employee);
// console.log("Deep Copied Employee Object");
// console.log(deepCopy);
// console.log(employee.details());
// console.log(deepCopy.details());

// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };


// using spread ...
// let p1 = {
//     ...person
// };

// // using  Object.assign() method
// let p2 = Object.assign({}, person);

// // using JSON
// let p3 = JSON.parse(JSON.stringify(person))

// console.log(p1);
// console.log(p2);
// console.log(p3);
// function getScores() {
//     return [70, 80, 90, 100];
//  }
 
//  let [x,...args] = getScores();
//  console.log(x);
//  console.log(args);

// function getProfile() {
//     return [
//         'John',
//         'Doe',
//         ['Red', 'Green', 'Blue']
//     ];
// }

// let [
//     firstName,
//     lastName,
//     [
//         color1,
//         color2,
//         color3,
//     ]
// ] = getProfile();
// console.log(color1);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// let {firstName:fname , lastName:lname}  = person;
// console.log(fname + lname );


// var mypromise = new Promise((resolve, reject) => {
//     console.log("Demo to show promise in Typescript !!");
//     resolve(100);
//     });
//     mypromise.then((value) => value + 200)
//     .then((value) => console.log("value from the promise functionis" + value));   

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //resolve('foo');
//       reject('goo');
//     }, 300);
//   });

// myPromise.then((value)=>{
// console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

// const myPromise = new Promise((done,ok) => {
//     setTimeout(() => {
//         ok("success");
//         done("reject");
//     });
// });

// myPromise.then((succesMesggage)=>{
//     console.log(succesMesggage)
// .catch((error)=>{
//     console.log(error);
// })

// let getResult = (info) => {
//     return info;
// }

// let myPromise = new Promise((myReject) => {
//     let x = 0;
//         if (x == 0){
//             myResolve("ok")
//         }else{
//             myReject("error")
//         }
// })    

// let promise = new Promise(function(reject,resolve) {
//         resolve("done!"); 
//   });

//   promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();

// const resolveInTwoSeconds = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(2), 2000);
//     })
//   };
  
//   const resolveInThreeSeconds = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(3), 3000);
//     })
//   };
  
//   const resolveInFiveSeconds = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(5), 5000);
//     })
//   };

//   (async function() {
//     const asyncFunctions = [
//       resolveInTwoSeconds(),
//       resolveInThreeSeconds(),
//       resolveInFiveSeconds()
//     ];
//     const results = await Promise.all(asyncFunctions);
//     // outputs `[2, 3, 5]` after five seconds
//     console.log(results);
//   })();
 


