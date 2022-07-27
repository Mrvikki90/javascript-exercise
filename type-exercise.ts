
interface data {
    name : string ; age? : any
}
const members: data[] = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

    var result : string[] = members.map((value) =>{
        let data = value.name.split(" ");
        return data[0];
    })
    console.log("1. Get array of first names of everyone");
    console.log(result);


// 2.--------->>>>>>
 
    console.log("2. Make everyone's last names in UPPERCASE in given array of objects");
    var result = members.map((value)=>{ let data = value.name.split(" ");
    return data[0].toUpperCase();            
    });
    console.log(result);
   
 // 3.--------->>>>  


//  let getAges = members.map((value)=>{
//     let result =   value.age;
//     result !!= undefined ? undefined : `name is ${value.name} and ${value.age}`
//   })
//     console.log(getAges);


//    let getAges = members.map( value => value.age > 41 && value.age < 60);
   //console.log("3. Get entries where age is between 41-60");
   

// // 4.--------------->>>>>>>>>>

// // const members = [
// //     {name: 'Rakesh Gupta', age: 20},
// //     {name: 'Yash Jangid', age: 40},
// //     {name: 'Firoz Khan', age: 41},
// //     {name: 'Amrit Srivastava', age: 17},
// //     {name: 'Chandraprakash Sharma'},
// //     {name: 'Swpril Ahuja', age: 45},
// //     {name: 'Yogesh Khatri', age: 51}
// //   ];

// const averageVal = members.map((data) =>{
// return data !== undefined ? data.age : undefined ;

// });
//   console.log(averageVal);
    //value.age === undefined ? undefined : value.age
//   console.log("4. Get average age");


// // 5. ------>>>>>>>>>>>>>>>>>>>>>>

// // const members = [
// //     {name: 'Rakesh Gupta', age: 20},
// //     {name: 'Yash Jangid', age: 40},
// //     {name: 'Firoz Khan', age: 41},
// //     {name: 'Amrit Srivastava', age: 17},
// //     {name: 'Chandraprakash Sharma'},
// //     {name: 'Swpril Ahuja', age: 45},
// //     {name: 'Yogesh Khatri', age: 51}
// //   ];

//   const getAge = members.reduce((acc,member)=>{
//     return acc.age > member.age ? acc : member;
//   },0)
//   console.log("5. Get Person with maximum age");
//   console.log(getAge);
  
// // 6 . -------------->>>>
  
// // const members = [
// //         {name: 'Rakesh Gupta', age: 20},
// //         {name: 'Yash Jangid', age: 40},
// //         {name: 'Firoz Khan', age: 41},
// //         {name: 'Amrit Srivastava', age: 17},
// //         {name: 'Chandraprakash Sharma'},
// //         {name: 'Swpril Ahuja', age: 45},
// //         {name: 'Yogesh Khatri', age: 51}
// //       ];
   
// const obj = {
//     young: [],
//     old: [],
//     noage: []
// }

//    _.map(members, function (o) {
//     if (o.age < 35) {
//         obj.young.push(o);
//     } if (o.age > 35) {
//         obj.old.push(o);
//     } else {
//         obj.noage.push(o);
//     }
// console.log("6. Divide persons in three groups, result should look like");
// console.log(obj);

// 7.----->>>

    // let data =  {name: 'kamal kumar', age: 32};
    // members.splice(2,0,data);
    // console.log("7. add a new member to same members array instance at index 2")
    // console.log(members);
