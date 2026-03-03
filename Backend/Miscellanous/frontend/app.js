// const stu1 ={
//     name : "adam",
//     age : 25,
//     marks :95,
//     getMarks: function(){
//         return this.marks;
//     }
// }
// const stu2 ={
//     name : "adam",
//     age : 25,
//     marks :95,
//     getMarks: function(){
//         return this.marks;
//     }
// }
// const stu3 ={
//     name : "adam",
//     age : 25,
//     marks :95,
//     getMarks: function(){
//         return this.marks;
//     }
// }

//this is inefficient as we are creating the object with same keys and same functions
let arr =[1,2,3];
arr.sayHello = () =>{
    console.log("hello! , i am arr");
};
//factory function but has memory disadvantage
// function personMaker(name,age){
//     const person ={
//         name :name,
//         age : age,
//         talk(){
//             console.log(`hi ,my name is ${this.name}`);
//         }
//     };
//     return person
// }

//constructors - doesnot return anything and start with capital
// function Person(name,age){
//     this.name =name;
//     this.age =age;
//     console.log(this);
// }
// Person.prototype.talk = function() {
//     console.log(`hello, ${name}`);
// }
// let p1 = new Person("adam",25); //this is instance 
// let p2 = new Person("jack",21);



//class
// class Person{
//     constructor(name,age){
//         this.name = name ;
//         this.age = age;
//     }
//     talk(){
//         console.log(`hi ${this.name}`);
//     }
// }

// let p1 = new Person("adam",101);

//inheritance 

// class Person{
//     constructor(name,age){
//         console.log("Person class constructor");
//         this.name =name;
//         this.age =age;
       
//     }
//     talk(){
//         console.log(`hi  i am ${this.name}`);
//     }
// }
// class Student extends Person{
//     constructor(name,age,marks){
//         console.log("Student class constructor")
//         super(name,age); //parent class constructor is being called 
//         this.marks =marks;
//     }
// }
// // let stu1 = new Student("adnan",20,90);

// class Teacher extends Person{
//     constructor(name,age,subject){
//         console.log("teacher class constructor")
//         super(name,age); //parent class constructor is being called 
//         this.subject =subject;
//     }
// }
// // let T1 = new Teacher("anand",40,"english");


class Mammal{
    constructor(name){
        this.name = name;
        this.type ="warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    barks(){
        console.log("wooff");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    eat(){
        console.log("cat is eating");//function overriding 
    }
    Meow(){
        console.log("Meow");
    }
}