"use strict";
//      https://forms.gle/d49g7ToE2VMhbP4j6
//Question-1:
//  - Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5 it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.
const dayNumber = 2;
switch (dayNumber) {
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
        console.log(`Weekend`);
        break;
    default:
        console.log(`please enter the number from 1 to 6`);
}
//Question:2
//  - Try making ATM Machine matches pin and account number it it matches then user can withdraw amount. And if he or she hasn't sufficient balance show them a message .Show message for wrong account number and wrong pin separately.
const accountNumber = 2244;
const yourPin = 99;
let totalBalance = 12000;
const withdrawAmount = 11000;
if (accountNumber === 2244) {
    if (yourPin === 99) {
        if (withdrawAmount <= totalBalance) {
            totalBalance = totalBalance - withdrawAmount;
            console.log(`your withdrawal amount is ${withdrawAmount} and your remaining account balance is ${totalBalance}`);
        }
        else {
            console.log(`You has't sufficient balance to withdrawal`);
        }
    }
    else {
        console.log(`Invalid pin`);
    }
}
else {
    console.log(`Invalid number! please enter the correct account number`);
}
//Question:3
//  - Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else if abd switch statement.
// using if-else statements
let currentHour = new Date().getHours();
console.log(currentHour);
if (currentHour >= 4 && currentHour <= 11) {
    console.log(`Good Morning`);
}
else if (currentHour > 11 && currentHour <= 16) {
    console.log(`Good afternoon`);
}
else if (currentHour > 16 && currentHour <= 18) {
    console.log(`Good evening`);
}
else if (currentHour > 18 && currentHour <= 24) {
    console.log(`Good night`);
}
else {
    console.log(`Good mid night`);
}
// switch statement
switch (true) {
    case currentHour >= 4 && currentHour <= 11:
        console.log(`Goog morning`);
        break;
    case currentHour > 11 && currentHour <= 16:
        console.log(`Good afternoon`);
        break;
    case currentHour > 16 && currentHour <= 18:
        console.log(`Good evening`);
        break;
    case currentHour > 18 && currentHour <= 24:
        console.log(`Good night`);
        break;
    default:
        console.log(`good mid night`);
}
// Question-4
//  - Write a program that prints the name of study for a person for instance   middle , matric etc from playgroup to PhD on basis of class number. Do it with both if else if and switch statement .
// using if-else-if statements
let classNumber = 5;
if (classNumber === 1) {
    console.log(`PlayGround`);
}
else if (classNumber >= 2 && classNumber <= 5) {
    console.log(`Primary study`);
}
else if (classNumber >= 6 && classNumber <= 8) {
    console.log(`Middle study`);
}
else if (classNumber >= 9 && classNumber <= 10) {
    console.log(`High study (matric)`);
}
else if (classNumber >= 11 && classNumber <= 12) {
    console.log(`Intermediate study (FSC/ICS/FA)`);
}
else if (classNumber >= 13 && classNumber <= 16) {
    console.log(`Undergraduate (Bachelor's Degree)`);
}
else if (classNumber >= 17 && classNumber <= 18) {
    console.log(`Postgraduate (Master's Degree)`);
}
else if (classNumber >= 19 && classNumber <= 20) {
    console.log(`PHD`);
}
else {
    console.log(`Invalid Class Number`);
}
// switch statement
switch (classNumber) {
    case 1:
        console.log(`Playground`);
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`Primary study`);
        break;
    case 6:
    case 7:
    case 8:
        console.log(`Middle study`);
        break;
    case 9:
    case 10:
        console.log(`High study (matric)`);
        break;
    case 11:
    case 12:
        console.log(`Intermediate study (FSC/ICS/FA)`);
        break;
    case 13:
    case 14:
    case 15:
    case 16:
        console.log(`Undergraduate (Bachelor's Degree)`);
        break;
    case 17:
    case 18:
        console.log(`Postgraduate (Master's Degree)`);
        break;
    case 19:
    case 20:
        console.log(`PHD`);
        break;
    default:
        console.log(`Invalid Class Number`);
}
//Question-5:
//  - Write a TS program that check ms weather if the number is positive, zero or negative.
let anyNumber = 0;
// using if-else-if
if (anyNumber > 0) {
    console.log(`${anyNumber} is a positive number`);
}
else if (anyNumber < 0) {
    console.log(`${anyNumber} is a negative number`);
}
else {
    console.log(`${anyNumber} is zero`);
}
// using switch
switch (true) {
    case anyNumber > 0:
        console.log(`${anyNumber} is a positive number`);
        break;
    case anyNumber < 0:
        console.log(`${anyNumber} is a negative number`);
        break;
    default:
        console.log(`${anyNumber} is zero`);
}
// Question-6
//  - Take 5 different numbers and check which on is greatest and then check which one is smallest use separate conditionals  for both scenarios.
let numb1 = 33;
let numb2 = 2;
let numb3 = 89;
let numb4 = 0;
let numb5 = 53;
//  my 1st approach for greatest number
let max_num = numb1;
if (numb2 > max_num) {
    max_num = numb2;
}
if (numb3 > max_num) {
    max_num = numb3;
}
if (numb3 > max_num) {
    max_num = numb3;
}
if (numb3 > max_num) {
    max_num = numb3;
}
if (numb4 > max_num) {
    max_num = numb4;
}
if (numb4 > max_num) {
    max_num = numb4;
}
if (numb5 > max_num) {
    max_num = numb5;
}
console.log(`${max_num} is the largest number `);
// my second approach
let largest_numb = Math.max(numb1, numb2, numb3, numb4, numb5);
console.log(largest_numb);
// my 1st approach for smallest number:
let min_num = numb1;
if (numb2 < min_num) {
    min_num = numb2;
}
if (numb3 < min_num) {
    min_num = numb3;
}
if (numb4 < min_num) {
    min_num = numb4;
}
if (numb5 < min_num) {
    min_num = numb5;
}
console.log(`${min_num} is the smallest number`);
// my second approach 
let smallest_numb = Math.min(numb1, numb2, numb3, numb4, numb5);
console.log(smallest_numb);
