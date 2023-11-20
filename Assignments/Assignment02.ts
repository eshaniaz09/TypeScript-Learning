
// -calculate your age based on the current year and your birth year.

let currentYear: number = 2023;
let myBirthYear: number = 2004;
let myAge: number = currentYear - myBirthYear;
console.log("my current age is " + myAge);

// - Write a program that calculates the area of a rectangle using length and width variables.

let length: number = 20;
let width: number = 40;
let areaOfRectangle: number = length * width;
console.log("The area of a rectangle is: " + areaOfRectangle);

// - Write a program that calculates the area of a circle.

let radius: number = 10;
let areaOfCircle: number = Math.PI * Math.pow(radius , 2);
console.log("The area of a circle is: " + areaOfCircle);

// - Write a program that calculates the area of the cube.

let sideLength: number = 10;
let areaOfCube: number = 6 * Math.pow(sideLength, 2);
console.log("The area of the cube is: " + areaOfCube);


// - Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.

let temperatureInFahrenheit: number = 50;
let temperatureInCelsius: number = (temperatureInFahrenheit - 32) * 5 / 9;
 temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
console.log("Temperature from fahrenheit to celsius: " + temperatureInCelsius);
console.log("Temperature from celsius to fahrenheit: " + temperatureInFahrenheit);


// - Convert a given number of seconds into minutes and seconds using variables.

let number: number = 200;
let minutes: number = Math.floor(number / 60);
let seconds: number = number % 60;
console.log("Minutes: " + minutes);
console.log("Seconds: " + seconds);

// - Write a program that calculates the percentage.

let myMarks: number = 40;
let totalMarks: number = 50;
let percentage: number = myMarks / totalMarks * 100;
console.log("Percentage: " + percentage + "%");


// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

let days: number = 17;
let weeks: number = Math.floor(days / 7);
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
let m = 2;       //3
let n = 3;      //2
let o = 4;     //3
let result = m++ * (--n + m) / (o-- - n);    //2*5/2 = 5
// m?, o?, n?, result?
console.log(`m=${m} , n=${n} , o=${o} , result=${result}`);







export default {}




