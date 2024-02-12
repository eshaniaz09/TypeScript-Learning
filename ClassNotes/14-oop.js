"use strict";
// In this class we discuss :
//=> 4 pillars of object oriented programming:
//   inheritance
// polymorphism
// abstraction
// incapsulation
//=> interface
//=> generics
class Seat {
    constructor(count, setColor, heat) {
        this.count = count;
        this.setColor = setColor;
        this.heat = heat;
    }
}
// inheritance: Seat is the parent class and car is the child class
class car extends Seat {
    //constructor automatically call when the oject is created
    constructor(a, b, c) {
        // super()=> is used to call the constructor of the parent class
        super(4, "black", true);
        this.companY = "google";
        this.coloR = "black";
        this.pricE = 234;
        this.companY = a;
        this.coloR = b;
        this.pricE = c;
    }
}
var carObject = new car("honda", "red", 2345);
var carObject2 = new car("tobasha", "black", 4567);
console.log(carObject);
// carObject2.coloR = "yellow";bv
console.log(carObject.coloR);
console.log(carObject2.coloR);
// another example
class triangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class shape extends triangle {
    constructor(width, height, length) {
        super(width, height);
        this.length = length;
    }
    getArea() {
        return (this.width * this.height * this.length);
    }
}
var triangleObj = new triangle(12, 12);
var shapeObj = new shape(12, 13, 13);
console.log(shapeObj.getArea());
class A {
    // email: 'eshaniaz5@gmail.com'
    constructor(userName, email, isPerson) {
        this.userName = userName;
        this.email = email;
        this.isPerson = isPerson;
    }
}
let student1 = new A('esha', 'eshaniaz5@gmail.com', true);
let student2 = new A('hamna', 'hamna@gmail.com', true);
let student3 = new A('tehzeeb', 'tehzeeb@gmail.com', true);
console.log(student1.userName);
console.log(student2.userName);
console.log(student3.userName);
class B extends A {
    constructor(userName, email, isPerson, rollNumber) {
        super(userName, email, isPerson);
        this.rollNumber = rollNumber;
    }
}
let student1Info = new B('esha', 'eshaniaz5@gmail.com', true, 9);
// let suM<T> = (a:T, b:T)=> {
//     return a+b;
// }
// suM<number>(1, 2)
// generics => passing any type in the function declaration 
function suM(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        throw new Error('Unsupported types for addition');
    }
}
console.log(suM(12, 13)); // Works
console.log(suM('esha', 'niaz')); // Works
// console.log(suM<boolean>(true, false)); // Compile-time error
function returnValue(a, b) {
    return b;
}
returnValue('esha', 9);
returnValue(12, 13);
// abstraction=> defining an abstract classes .
// interface hello{
//     name: string;
//     claSS:number
// }
// class hello implements hello{
//     name : string ;
//     constructor(name: string, claSS:number) {
//         abstract claSS: number;
//         this.name = name;
//     }
// }
// class world extends hello{
//     rOllNumber: number;
//     constructor(name: string, claSS: number, rOllNumber: number) {
//         super(name, claSS);
//         this.rOllNumber;
//     }
// }
// incapsulation => we can incapsulation some properties and functions of the class so that the object of class and child class can not
// access these properties and functions
//public => accessible in both obj and child classes(very low incapsulation)
//private => not accessible in both classes and object only accessible to own class
//protected => not accessible in the object but accessible in own class and child classes
// polymorphism=>  when  the same interface is used by different classes and make the different representations or logics by by these different classes
//                 Note
// type are used with the objects in the functional programming and "interface" is used with the class of an object in 
