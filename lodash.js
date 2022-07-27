
const _ = require('lodash');
// 1.------------------>>>>>>>>>>


const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

  const result = _.map(members,((value) =>{
        let data =  _.split(value.name," ");
        return (data[0]);
     }));

     console.log("1. Get array of first names of everyone");
    console.log(result);
    console.log('----------------------------------------------------------------------------------------------')
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
  */
 
  console.log("2. Make everyone's last names in UPPERCASE in given array of objects");

  let result2 = _.forEach(members, function(value){
    let result = value.name;
    let data  = _.split(result," ");
    const item = _.upperCase(data[1]);
    console.log(item);
  }); 

  console.log('----------------------------------------------------------------------------------------------')

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

   let getAges = _.filter(members,function(o){
    return o.age > 41 &&  o.age < 60;
  })
  console.log("3. Get entries where age is between 41-60");
   console.log(getAges);
   console.log('----------------------------------------------------------------------------------------------')
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

  let averageVal = _.meanBy(members,function(o){
    return o.age;
  })
  console.log("4. Get average age");
  console.log(averageVal);
  console.log('----------------------------------------------------------------------------------------------')

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

  const getAge = _.reduce(members,function(acc,member){
    return acc.age > member.age ? acc : member;
  },0)
  console.log("5. Get Person with maximum age");
  console.log(getAge);
  console.log('----------------------------------------------------------------------------------------------')
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
   
const obj = {
    young: [],
    old: [],
    noage: []
}

   _.map(members, function (o) {
    if (o.age < 35) {
        obj.young.push(o);
    } else if (o.age > 35) {
        obj.old.push(o);
    } else {
        obj.noage.push(o);
    }
})
console.log("6. Divide persons in three groups, result should look like");
console.log(obj);
console.log('----------------------------------------------------------------------------------------------')
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

    let data =  {name: 'kamal kumar', age: 32};
    members.splice(2,0,data);
    console.log("7. add a new member to same members array instance at index 2")
    console.log(members);
