"use strict";
// -calculate your age based on the current year and your birth year.
Object.defineProperty(exports, "__esModule", { value: true });
let currentYear = 2023;
let myBirthYear = 2004;
let myAge = currentYear - myBirthYear;
console.log("my current age is " + myAge);
// - Write a program that calculates the area of a rectangle using length and width variables.
let length = 20;
let width = 40;
let areaOfRectangle = length * width;
console.log("The area of a rectangle is: " + areaOfRectangle);
// - Write a program that calculates the area of a circle.
let radius = 10;
let areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log("The area of a circle is: " + areaOfCircle);
// - Write a program that calculates the area of the cube.
let sideLength = 10;
let areaOfCube = 6 * Math.pow(sideLength, 2);
console.log("The area of the cube is: " + areaOfCube);
// - Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
let temperatureInFahrenheit = 50;
let temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9;
temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
console.log("Temperature from fahrenheit to celsius: " + temperatureInCelsius);
console.log("Temperature from celsius to fahrenheit: " + temperatureInFahrenheit);
// - Convert a given number of seconds into minutes and seconds using variables.
let number = 200;
let minutes = Math.floor(number / 60);
let seconds = number % 60;
console.log("Minutes: " + minutes);
console.log("Seconds: " + seconds);
// - Write a program that calculates the percentage.
let myMarks = 40;
let totalMarks = 50;
let percentage = myMarks / totalMarks * 100;
console.log("Percentage: " + percentage + "%");
// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
let days = 17;
let weeks = Math.floor(days / 7);
days = days % 7;
console.log("Weeks: " + weeks);
console.log("Days: " + days);
// Increment and Decrement Operator:
//  - Q1:
// let a = 2;          //a = 3
// let b = ++a * 2;   // 3*2
// console.log("b = " + b);
// - Q2
// let x = 5;          //4
// let y = x-- + 2;   //5+7
// console.log("y = " + y); 
// - Q3 
// let x = 3;   // 6
// let y = ++x + x++ + ++x;  //4 + 4 + 6
// // y?
// console.log(`y = ${y}`);
// - Q4 
// let m = 2;  //3
// let n = ++m * m++ * --m;  //3*3*3
// // n?
// console.log(`n = ${n}`);
// - Q5
// let a = 3;   //5
// let b = 5;  //3
// let result = ++a + b-- - a++ + --b;  //4+5-4+3 = 8
// // result?
// console.log(`result = ${result}`);
// - Q6
// let m = 2;    //2
// let n = 4;   //4
// let p = m++ + ++n - --m + n--;  //2+5-2+5 = 10
// // m?,n?,p?
// console.log(`n = ${n} , m = ${m} , p = ${p}`);
// - Q7
// let a = 5;          //6
// let b = 3;         //2  
// let c = 2;        //2
// let d = 7;       //6
// let result = ++a * (b-- + c) / --d;  // 6*5/6 = 5
// // a?, b?, c?, d? ,result?
// console.log(`a=${a} , b=${b} , c=${c} , d=${d} , result=${result}`);
// - Q8
let m = 2; //3
let n = 3; //2
let o = 4; //3
let result = m++ * (--n + m) / (o-- - n); //2*5/2 = 5
// m?, o?, n?, result?
console.log(`m=${m} , n=${n} , o=${o} , result=${result}`);
exports.default = {};
