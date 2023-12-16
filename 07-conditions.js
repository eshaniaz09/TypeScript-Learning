"use strict";
var marks = 70;
if (marks >= 90) {
    console.log(`A+ Grade`);
}
else if (marks >= 80 && marks < 90) {
    console.log(`A Grade`);
}
else if (marks >= 70 && marks < 80) {
    console.log(`B grade`);
}
else if (marks >= 60 && marks < 70) {
    console.log(`C grade`);
}
else {
    console.log(`You are fail`);
}
var named = `Esha`;
var year_ = 2024;
if ((year_ % 4 == 0 && year_ % 100 !== 0) || year_ === 400) {
    console.log(`${year_} is a leap`);
}
else {
    console.log(`${year_} is not a leap year`);
}
var attendance_ = 80;
var theory_marks = 30;
var practical_marks = 50;
// if (attendance_ > 75) {
//     console.log(`you can sit in the class`);
// } else {
//     console.log(`you can not sit in the class`);
// }
if (attendance_ > 75) {
    console.log(`you are allowed to sit in the class`);
    if (theory_marks > 30) {
        console.log(`pass`);
    }
    else {
        console.log(`fail`);
    }
    if (false) {
        console.log(`pass`);
    }
    else {
        console.log(`fail`);
    }
}
else {
    console.log(`you are not eligible to pass the exam`);
}
var mySelf = `esha`;
console.log(mySelf + 'is' + 'a' + 'student');
// Create a program that simulates a simple ATM.Ask the user for their account
//  balance, and then check if they have enough funds to withdraw a certain amount.If
// yes, update the balance; otherwise, display an insufficient funds message.
var account_balance = 4000;
var withdrawal_amount = 600;
if (withdrawal_amount <= account_balance) {
    account_balance -= withdrawal_amount;
    console.log(`Now the updated account balance is ${account_balance}`);
}
else {
    console.log(`insufficient funds`);
}
// Design a program that takes a month as input (1 - 12) and prints the
// number of days in that month.
var input_month = 2;
if (input_month >= 1 && input_month <= 12) {
    if (input_month === 4 || input_month === 6 || input_month === 9 || input_month === 11) {
        console.log(`There are 30 days`);
    }
    else if (input_month === 2) {
        console.log(`there are 28 days`);
    }
    else {
        console.log(`There are 32 days`);
    }
}
else {
    console.log(` Please enter the number between 1 to 12`);
}
// Create a program that asks the user to enter three numbers.Determine
//  and print whether the sum of any two numbers is equal to the third.
var num1 = 3;
var num2 = 5;
var num3 = 8;
if ((num1 + num2 == num3) || (num1 + num3 == num2) || (num2 + num3 === num1)) {
    console.log(`The sum of two numbers are equal to the third number`);
}
else {
    console.log(`The sum of any two numbers are not equal to the third one`);
}
// if else is used for calculations or also less then greater then
// switch statements are used in the place of compression operator to match the values having different conditions or cases
// switch statements are not use in the case where we have to match the variables
var numb_1 = 3;
var numb_2 = 5;
var operator = '+';
switch (operator) {
    case "+":
        console.log(`The sum = ${numb_1 + numb_2}`);
        break;
    case "-":
        console.log(`The diff = ${numb_1 - numb_2} `);
        break;
    case "*":
        console.log(`The multiplication is = ${numb_1 * numb_2}`);
        break;
    case "%":
        console.log(` The division is = ${numb_1 % numb_2}`);
        break;
    default:
        console.log("Please Enter the correct Operator");
}
