
interface data {
    name : string ; age? : number
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
    console.log('----------------------------------------------------------------------------------------------')

// 2.--------->>>>>>
 
    var result = members.map((value)=>{ let data = value.name.split(" ");
    return data[0].toUpperCase();            
    });
    
    console.log("2. Make everyone's last names in UPPERCASE in given array of objects");
    console.log(result);
    console.log('----------------------------------------------------------------------------------------------')
 // 3.--------->>>>  


    let getAges:data[] = members.filter((value)=>{
    return value.age && value.age > 41 && value.age < 60 ;       
    });
      console.log("3. Get entries where age is between 41-60");
    console.log(getAges);

    console.log('----------------------------------------------------------------------------------------------')
 
   

// // 4.--------------->>>>>>>>>>


    const averageVal:number = members.reduce((acc , currval) =>{
    return  currval.age ? acc + currval.age : acc 
    },0)/members.length;

  console.log("4. Get average age");
  console.log(averageVal);

  console.log('----------------------------------------------------------------------------------------------')
// // 5. ------>>>>>>>>>>>>>>>>>>>>>>


  const getAge = members.reduce((acc,currval)=>{
    return acc.age && currval.age && acc.age > currval.age ? acc : currval
  });
  console.log("5. Get Person with maximum age");
  console.log(getAge);

  console.log('----------------------------------------------------------------------------------------------')
  
// // 6 . -------------->>>>
  interface Obj {
    young : data []
    old : data []
    noage : data []
  }

const obj : Obj = {
   young : [],
    old: [],
    noage: []
}
   members.map((value) => {
   return value.age && value.age < 35 ? obj.young.push(value) : obj.old.push(value);
    })
// console.log("6. Divide persons in three groups, result should look like");
    console.log(obj);

// 7.----->>>

    let data:data[] = members.splice(2,0,{name: 'kamal kumar', age: 32});
    console.log("7. add a new member to same members array instance at index 2")
    console.log(members);
