const arrayOfFitrstNames = require('./functions/arrayOfFitrstNames');
var members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

console.log("Get array of first names of everyone");
arrayOfFitrstNames(members);

// 1.  Get array of first names of everyone;  
// const names = members.map(element => {
//   let data1  = element.name.split(" ");  
//   console.log(data1[0]);
// });

// 2. Make everyone's last names in UPPERCASE in given array of objects

//  const names = members.map(Element =>{
//   console.log(Element.name);
//     var firstKeyValue = Element.name.split(" ");
//      let data1 =  firstKeyValue[1].toUpperCase();
//     return data1;
//   });
  //console.log(names);
 


// 3. Get entries where age is between 41-60

// let ages = members.map(person =>`${person.age}`);
// ages.filter(currElem =>currElem <= 40 >=60);
// console.log(ages);

// 4. Get average age--->>

// let ages = members.map(person=>person.age);
// console.log(ages);
//  let arr1 = ages.slice(0,3);
//  let arr2 = ages.slice(5);
// const arr3 = arr1.concat(arr2);
// const average = arr3.reduce((a, b) => a + b, 0) / ages.length;
//  console.log(average);

// 5. Get Person with maximum age


// const getAges = members.reduce((acc, member) => {
//   return acc.age > member.age ? acc : member;
//   });
//   console.log(getAges);
// 6.----------------->>>

 
// var obj = {
//   young: [],
//   old: [],
//   noage: []
// }
// const names = members.map(currElem => {
//   return currElem
// }).filter(currElem => {
//   var result = currElem.age < 35;
//   var result2 = currElem.age > 35;
//   if (result == true) {
//     obj.young.push(`name is ${currElem.name} and age is ${currElem.age}`);
//   } if (result2 == true) {
//     obj.old.push(`name is ${currElem.name} and age is ${currElem.age}`)
//   }
// });
  
// console.log(obj);
// 7.----->>>>

// let data =  {name: 'kamal kumar', age: 32};
// members.splice(2,0,data);
// console.log(members,);
  
// 8.----->>

// const members = [
//   {name: 'Rakesh Gupta', age: 20},
//   {name: 'Yash Jangid', age: 40},
//   {name: 'Firoz Khan', age: 41},
//   {name: 'Amrit Srivastava', age: 17},
//   {name: 'Chandraprakash Sharma'},
//   {name: 'Swpril Ahuja', age: 45},
//   {name: 'Yogesh Khatri', age: 51}
// ]; 
// var [a,b] = members; 
// console.log(a);
// console.log(b);

// 9.----->>>>
// var newArr = [];
// let data =  {name: 'Amit Singh', age: 48};
//  newArr = [...members];
// newArr.splice(0,0,data);
// console.log(newArr);

// 10. ---->> object destructing

// const students = {
//   name: 'Batman',
//   color : 'black',
//   age : 25
// };

// const {name , color , age} = students;
// console.log(`The name is ${name} and color is ${color} and age is ${age}`);

// 11. -->>>>>>

// const students = {
//   name: 'Batman',
//   color : 'black',
//   age : 25
// };

//  const {name:firstName , color:lastColor , age:pastAge} = students;
//  console.log(`The name is ${firstName} and color is ${lastColor} and age is ${pastAge}`);

// 12.---->>


// const user = { 
//   name: 'Alex',
//   address: '15th Park Avenue',
//   age: 43
// }
// const {name : firstName} = user;
// const clone = {...user};
// const {address , age} = clone;
// console.log(`The name is ${firstName} and adress is ${address} and age is ${age}`);

// 13------->>>

// let user = { 
//   name: 'Alex',
//   address: '15th Park Avenue',
//   age: 43
// }

// let newObj = {
// ...user,
// name : 'tom'
// };

// console.log(newObj);

// 14.---- Reduce in array ----->>>>

// const message = ["JavaScript ", "is ", "fun."];

// function joinStrings(accumulator, currentValue) {
//   return accumulator + currentValue;
// }

// const joinedStr = message.reduce(joinStrings);
// console.log(joinedStr);

// const numbers = [2,4,6,8];
// const sum = numbers.reduce(function sumarize(sum,number){
//   const updatedSum = sum + number;
//   return updatedSum;
// },0)

// console.log(sum);

// Reduce method on object----->>>
// let obj = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

// let sum = obj.reduce((accum,currVal)=>{
//   return accum + currVal.n;
// },0);

// console.log(sum);
