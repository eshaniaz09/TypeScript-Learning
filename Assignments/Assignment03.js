// Question-01:
// - Write a program that calculates the percentage. 
const num = 30;
const total = 50;
console.log(`The percentage is of num is:  ${(num / total) * 100}%`);
//Question-02:
// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
const priceOfProduct = 100;
//Solve by using if-else
if (priceOfProduct > 100) {
    console.log(`The discount for  this product is 10%`);
}
else {
    console.log(`The discount for this product is 5%`);
}
// Solve by using ternary operator
const discount = priceOfProduct > 100 ? `The discount for this product is 10%` : `The discount for this product is 5%`;
console.log(discount);
//OR..
(priceOfProduct > 100) ? console.log(`The discount for  this product is 10%`) : console.log(`The discount for this product is 5%`);
//Question-03:
// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
const userAge = 10;
if (userAge <= 12) {
    console.log(`Child`);
}
else if (userAge > 12 && userAge <= 19) {
    console.log(`Teenager`);
}
else {
    console.log(`Adult`);
}
// Question-04:
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
const temperature = 30;
if (temperature < 10) {
    console.log("It's cold. Wear warm clothes like a jacket, scarf, and gloves.");
}
else if (temperature >= 10 && temperature < 20) {
    console.log("It's cool. A light jacket or sweater would be suitable.");
}
else if (temperature >= 20 && temperature < 30) {
    console.log("It's mild. You can wear a t-shirt or a light sweater.");
}
else {
    console.log("It's warm. Shorts and a t-shirt would be comfortable.");
}
// Question-05:
// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
const number = 9;
const output = number % 3 === 0; //true
console.log("🚀 ~ file: Assignment03.ts:35 ~ output:", output);
const output2 = number % 5 === 0; //false
console.log("🚀 ~ file: Assignment03.ts:37 ~ output2:", output2);
const output3 = number % 3 === 0 || number % 5 === 0; //true
console.log("🚀 ~ file: Assignment03.ts:39 ~ output3:", output3);
const output4 = !(number % 3 === 0); // false
console.log("🚀 ~ file: Assignment03.ts:41 ~ output4:", output4);
const output5 = !(number % 5 === 0); //true
console.log("🚀 ~ file: Assignment03.ts:39 ~ output5:", output5);
//Question-06:
// - Write a program that checks if the given year is leap year or not.
const year = 2000;
//by using if-else
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}
// by using ternary operator:
(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? console.log(`${year} is a leap year`) : console.log(`${year} is not a leap year`);
// another way:
const isLeapYear = (year % 4 && year % 100 !== 0) || (year % 400 === 0);
console.log(`Is ${year} a leap year? : ` + isLeapYear);
//Question-07:
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
const userInputNumber = 3;
// by using nested if statements
if (userInputNumber >= 1 && userInputNumber <= 7) {
    if (userInputNumber === 1) {
        console.log(`Monday`);
    }
    else if (userInputNumber == 2) {
        console.log(`tuesday`);
    }
    else if (userInputNumber == 3) {
        console.log(`wednesday`);
    }
    else if (userInputNumber == 4) {
        console.log('Thursday');
    }
    else if (userInputNumber == 5) {
        console.log('Friday');
    }
    else if (userInputNumber == 6) {
        console.log('Saturday');
    }
    else if (userInputNumber == 7) {
        console.log('Sunday');
    }
}
else {
    console.log('Please enter a number between 1 to 7');
}
// by using switch statements
switch (userInputNumber) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log(`please enter the number from 1 to 7`);
}
//Question-08:
// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if
// greater than 200 then add 15 % of tax so on up to if greater than 500 then add 25 % of tax
// Where the tax amount will be calculated by the amount of bill.
var units = 300;
var taxRate = 0;
if (units <= 100) {
    console.log("Tax is not applicable as units are less than or equal to 100.");
}
else if (units <= 200) {
    taxRate = 10;
}
else if (units <= 300) {
    taxRate = 15;
}
else if (units <= 500) {
    taxRate = 20;
}
else {
    taxRate = 25;
}
var appliedTax = (taxRate / 100) * units;
var totalBill = appliedTax + units;
console.log(`The tax on ${units} units is ${taxRate}%, so the total bill amount is ${totalBill}.`);
// Question-9:
// - Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.
let attendance = 90; //out of 100
let practicalMarks = 50; //out of 60
let practicalTotal = 60;
let theoryMarks = 40; //out of 50
let theoryTotal = 50;
let attendancePercentage = Math.floor((attendance / 100) * 100);
let practicalPercentage = Math.floor((practicalMarks / practicalTotal) * 100);
let theoryPercentage = Math.floor((theoryMarks / theoryTotal) * 100);
if (attendancePercentage > 75 && practicalPercentage > 50 && theoryPercentage > 45) {
    console.log(`Congratulations you passed the semester.`);
}
else {
    console.log(`You are fail`);
}
//Question-10:
//  - Write a ts program that evaluates the grades of the students:
//   * 80% or greater, grade A
//   * 70% or greater, grade B
//   * 60% or greater, grade C
//   * 50% or greater, grade D
//   * Less than 50% , grade F.
let score = 35;
let totalMarks = 60;
let percentageScore = Math.floor((score / totalMarks) * 100);
if (percentageScore >= 80) {
    console.log(`Grade : ${'A'}`);
}
else if (percentageScore < 80 && percentageScore >= 70) {
    console.log(`Grade : ${'B'}`);
}
else if (percentageScore < 70 && percentageScore >= 60) {
    console.log(`Grade : ${'C'}`);
}
else if (percentageScore < 60 && percentageScore >= 50) {
    console.log(`Grade : ${'D'}`);
}
else {
    console.log(`Grade : ${'F'}`);
}
export {};
