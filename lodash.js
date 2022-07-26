const { result, map } = require('lodash');
const _ = require('lodash');
// 1.------------------>>>>>>>>>>


// const members = [
//     {name: 'Rakesh Gupta', age: 20},
//     {name: 'Yash Jangid', age: 40},
//     {name: 'Firoz Khan', age: 41},
//     {name: 'Amrit Srivastava', age: 17},
//     {name: 'Chandraprakash Sharma'},
//     {name: 'Swpril Ahuja', age: 45},
//     {name: 'Yogesh Khatri', age: 51}
//   ];

//      _.map(members,((value) =>{
//         let data =  _.split(value.name," ");
//         console.log(data[0]);
//      }))
    
// 2.--------->>>>>>
/*
const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
  let names = _.forEach(members, function(value){
    let result = value.name;
    let data  = _.split(result," ");
    const item = _.upperCase(data[1]);
    console.log(item);
  }); */

// 3.--------->>>>  
// const members = [
//     {name: 'Rakesh Gupta', age: 20},
//     {name: 'Yash Jangid', age: 40},
//     {name: 'Firoz Khan', age: 41},
//     {name: 'Amrit Srivastava', age: 17},
//     {name: 'Chandraprakash Sharma'},
//     {name: 'Swpril Ahuja', age: 45},
//     {name: 'Yogesh Khatri', age: 51}
//   ];

//    let getAges = _.filter(members,function(o) {
//         return o.age > 41;
//    });
//    console.log(getAges);

// 4.--------------->>>>>>>>>>

// const members = [
//     {name: 'Rakesh Gupta', age: 20},
//     {name: 'Yash Jangid', age: 40},
//     {name: 'Firoz Khan', age: 41},
//     {name: 'Amrit Srivastava', age: 17},
//     {name: 'Chandraprakash Sharma'},
//     {name: 'Swpril Ahuja', age: 45},
//     {name: 'Yogesh Khatri', age: 51}
//   ];

//   let averageVal = _.meanBy(members,function(o){
//     return o.age;
//   })
//   console.log(averageVal);


// 5. ------>>>>>>>>>>>>>>>>>>>>>>

// const members = [
//     {name: 'Rakesh Gupta', age: 20},
//     {name: 'Yash Jangid', age: 40},
//     {name: 'Firoz Khan', age: 41},
//     {name: 'Amrit Srivastava', age: 17},
//     {name: 'Chandraprakash Sharma'},
//     {name: 'Swpril Ahuja', age: 45},
//     {name: 'Yogesh Khatri', age: 51}
//   ];

//   const getAge = _.reduce(members,function(acc,member){
//     return acc.age > member.age ? acc : member;
//   },0)

//   console.log(getAge);
  
// 6 . -------------->>>>
  
// const members = [
//         {name: 'Rakesh Gupta', age: 20},
//         {name: 'Yash Jangid', age: 40},
//         {name: 'Firoz Khan', age: 41},
//         {name: 'Amrit Srivastava', age: 17},
//         {name: 'Chandraprakash Sharma'},
//         {name: 'Swpril Ahuja', age: 45},
//         {name: 'Yogesh Khatri', age: 51}
//       ];
   
// const obj = {
//     young: [],
//     old: [],
//     noage: []
// }
// const names = _.map(members);
// let getAges = _.filter(members, function (o) {
//     if (o.age < 35) {
//         obj.young.push(o.age);
//     } if (o.age > 35) {
//         obj.old.push(o.age);
//     } else {
//         obj.noage.push();
//     }
// })
// console.log(obj);

// 7.----->>>

// const members = [
//         {name: 'Rakesh Gupta', age: 20},
//         {name: 'Yash Jangid', age: 40},
//         {name: 'Firoz Khan', age: 41},
//         {name: 'Amrit Srivastava', age: 17},
//         {name: 'Chandraprakash Sharma'},
//         {name: 'Swpril Ahuja', age: 45},
//         {name: 'Yogesh Khatri', age: 51}
//     ];

//     let data =  {name: 'kamal kumar', age: 32};
//     members.splice(2,0,data);
//     console.log(members);
