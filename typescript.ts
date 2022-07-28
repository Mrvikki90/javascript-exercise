// const data:number = 10;
// console.log(data);

// let ross = {
//     firstName : 'ross',
//     lastName : 'Geller',
//     age : 30,
//     getSalary : (base : number) => base * 10
// };

// let getPerson = (arg :{
//     firstName : string,
//     lastName : string
// }):string => {
//   return `hello ${arg.firstName} ${arg.lastName}`
// }
// console.log(getPerson(ross));

// interface person {
//     firstName : string,
//     lastName : string,
//     age : number,
//     getSalary : (base : number) => number;
// };  

// let ross:person = {
//     firstName : 'ross',
//     lastName : 'Geller',
//     age : 30,
//     getSalary : (base : number) => base * 10
// };

// let getPersonInfo = (person : person) : string => {
//      return `hello ${person.firstName} ${person.lastName}`
// };

// console.log(getPersonInfo(ross));

// interface student {
//     firstName : string,
//     lastName : string,
//     age : number
// };

// let ross:student = {
//     firstName : 'ross',
//     lastName : 'Geller',
//     age : 30,
// };

// let getAge = (_student : student) : number => {
//     return _student.age + 10;
// };

// console.log(getAge(ross));

// interface isSumOdd {
//     (a:number , b:number) : boolean
// };

// let isSumOdd : isSumOdd = ( x:number , y:number ) : boolean => {
//     if(x+y % 2 === 0){
//         return false;
//     }
//     return true
// };

// console.log( isSumOdd(1,2));

// class Animal {
//     sound: string
    
//     constructor(sound: string) {
//         this.sound = sound;
//     }

//     getSound(): string {
//         return `${this.sound}! ${this.sound}`
//     }
// }
// interface AnimalInterface{
//     new(sound: string): Animal;
// }
// let createAnimal = (frt: AnimalInterface, type: string): Animal => {
//     return type === 'dog' ? new frt('woof') : new frt('meow');
// }
// let dog:Animal = createAnimal(Animal,'dog');
// console.log('dog.getSound() =>',dog.getSound());

// interface SimpleObject {
//     [key : string] : any;
// }

// //let ross : SimpleObject = { name : "Ross geller", age : 30};
// let monica : SimpleObject = {name : 12, 1: 10}

// //console.log("ross =>",ross);
// console.log("monica =>",monica);

// class Animal {
// sound : string

// constructor(sound:string){
//     this.sound = sound;
// }

// getSound() : string {
//     return `${this.sound}! ${this.sound}`
// }}

// interface AnimalInterface {
//     new (sound : string) : Animal;
// }

// let createAnimal = ( osm : AnimalInterface , type : string) : Animal => {
// return type === 'dog' ? new osm('woof') : new osm ('meow');
// }

// let dog : Animal = createAnimal(Animal,'dog');
// console.log(dog.getSound());


class Person {

    private firstName: string
    private lastName: string

    constructor( firstName: string , lastName: string ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
   class Employee extends Person {
    constructor(
    firstName: string,
    lastName: string,
    private jobTitle: string) {

    // call the constructor of the Person class:
    super(firstName, lastName);
    }}

    let employee = new Employee('John','Doe','Front-end Developer');
    
    console.log(employee.getFullName());