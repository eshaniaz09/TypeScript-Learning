"use strict";
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
