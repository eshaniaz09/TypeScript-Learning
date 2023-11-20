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
exports.default = {};
