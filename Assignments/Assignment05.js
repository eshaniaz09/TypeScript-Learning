//Question 1:
//  - Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5 it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using function
var dayOfWeek = (a) => {
    if (a >= 1 && a <= 7) {
        switch (a) {
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
            default:
                console.log(`Weekend`);
                break;
        }
    }
    else {
        console.log('Please enter the number between 1 to 7');
    }
};
dayOfWeek(5);
//Question 2:
//  - Try making ATM Machine matches pin and account number it it matches then user can withdraw amount. And if he or she hasn't sufficient balance show them a message .Show message for wrong account number and wrong pin separately.
var ATM = (pinNumber, accountNumb, withdrawAmount_, totalBalance_) => {
    if (pinNumber === 2244) {
        if (accountNumb === 23456) {
            if (withdrawAmount_ <= totalBalance_) {
                totalBalance_ = totalBalance_ - withdrawAmount_;
                console.log(`Your withdrawal amount is ${withdrawAmount_} & your remaining balance is ${totalBalance_}`);
            }
            else {
                console.log('Insufficient balance ');
            }
        }
        else {
            console.log('Account number not found');
        }
    }
    else {
        console.log('Invalid pin');
    }
};
ATM(2244, 2346, 800, 1000);
//Question:3
//  - Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else if abd switch statement.
let timeCurrent = new Date().getHours();
var greeting = (a) => {
    if (a >= 4 && a <= 11) {
        console.log('Good Morning');
    }
    else if (a > 11 && a <= 16) {
        console.log(`Good Afternoon`);
    }
    else if (a > 16 && a <= 18) {
        console.log(`Good evening`);
    }
    else if (a > 18 && a <= 24) {
        console.log(`Good night`);
    }
    else {
        console.log(`Good mid night`);
    }
};
greeting(timeCurrent);
// Question-4
//  - Write a program that prints the name of study for a person for instance   middle , matric etc from playgroup to PhD on basis of class number. Do it with functions .
// var classN: number = 2;
var studyClass = (classN) => {
    switch (classN) {
        case 1:
            console.log('Playground');
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('Primary');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Middle');
        case 9:
        case 10:
            console.log('high school (matric');
            break;
        case 11:
        case 12:
            console.log('Intermediate (FSC/FA/ICS');
            break;
        case 13:
        case 14:
        case 15:
        case 16:
            console.log("Bachelor's Degree (BS program)");
            break;
        case 17:
        case 18:
            console.log("Master's Degree");
            break;
        case 19:
        case 20:
            console.log('PHD');
    }
};
studyClass(13);
//Question-5:
//  - Write a TS program that check ms weather if the number is positive, zero or negative.use functions
var checkNumber = (num) => {
    if (num > 0) {
        return 'Positive number';
    }
    else if (num < 0) {
        return 'Negative number';
    }
    else {
        return 'Its a zero';
    }
};
console.log(checkNumber(6));
// Question-6
//  - Take 5 different numbers and check which on is greatest and then check which one is smallest use separate conditionals  for both scenarios.
// approach 1 using functions
var maximumMinimum = (a, b, c, d, e) => {
    let maxNumb = a;
    if (b > maxNumb) {
        maxNumb = b;
    }
    if (c > maxNumb) {
        maxNumb = c;
    }
    if (d > maxNumb) {
        maxNumb = d;
    }
    if (e > maxNumb) {
        maxNumb = e;
    }
    return maxNumb;
};
console.log(maximumMinimum(22, 45, 6, 89, 56));
var maximumMinimum = (a, b, c, d, e) => {
    let minNumb = a;
    if (b < minNumb) {
        minNumb = b;
    }
    if (c < minNumb) {
        minNumb = c;
    }
    if (d < minNumb) {
        minNumb = d;
    }
    if (e < minNumb) {
        minNumb = e;
    }
    return minNumb;
};
console.log(maximumMinimum(22, 45, 6, 89, 56));
// approach 2
var maximumMinimum = (a, b, c, d, e) => {
    return Math.max(a, b, c, d, e);
};
console.log(maximumMinimum(22, 45, 6, 89, 56));
var maximumMinimum = (a, b, c, d, e) => {
    return Math.min(a, b, c, d, e);
};
console.log(maximumMinimum(22, 45, 6, 89, 56));
// Question 7:
// - Write a program that calculates the percentage.
//way 1:
var percentCalculator = (totaL, obtained) => {
    var per = (obtained / totaL) * 100;
    return per;
};
// way 2:   
// var percentCalculator = (totaL: number, obtained: number): number =>  Math.floor((obtained / totaL) * 100);
console.log(percentCalculator(50, 48)); // we cannot call the fat arrow functions above the function definitions because the variable is called before it is declared and assigned
//Question 8:
// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var discountOfProduct = (actualPrice) => {
    var discountPrice1 = actualPrice - ((actualPrice / 100) * 10);
    var discountPrice2 = actualPrice - ((actualPrice / 100) * 5);
    if (actualPrice > 100) {
        return discountPrice1;
    }
    else {
        return discountPrice2;
    }
};
console.log(discountOfProduct(200));
///Question 9:
// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var userProvidedAge = (agE) => {
    var ageCategory;
    switch (true) {
        case agE >= 0 && agE <= 12:
            ageCategory = 'Child';
            break;
        case agE >= 13 && agE <= 19:
            ageCategory = 'Teenager';
            break;
        default:
            ageCategory = 'Adult';
            break;
    }
    return ageCategory;
};
console.log(userProvidedAge(18));
//Question 10:
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperatureType = (temperature) => {
    var clothSuggestion;
    if (temperature < 10) {
        clothSuggestion = "It's cold. Wear warm clothes like a jacket, scarf, and gloves.";
    }
    else if (temperature >= 10 && temperature < 20) {
        clothSuggestion = "It's cool. A light jacket or sweater would be suitable.";
    }
    else if (temperature >= 20 && temperature < 30) {
        clothSuggestion = "It's mild. You can wear a t-shirt or a light sweater.";
    }
    else {
        clothSuggestion = "It's warm. Shorts and a t-shirt would be comfortable.";
    }
    return clothSuggestion;
};
console.log(temperatureType(25));
//Question 11:
// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
// to check divisible of 3:
var numberCheck = (num_) => (num_ % 3 === 0);
console.log(numberCheck(18));
// to check divisible of 5:
var numberCheck = (num_) => (num_ % 5 === 0);
console.log(numberCheck(18));
//for both check
var numberCheck = (num_) => (num_ % 3 === 0 && num_ % 5 === 0);
console.log(numberCheck(18));
// for one of them can be true:
var numberCheck = (num_) => (num_ % 3 === 0 || num_ % 5 === 0);
console.log(numberCheck(18));
// Question 12:
// - Write a program that checks if the given year is leap year or not.
var checkLeapYear = (yr) => ((yr % 4 === 0 && yr % 100 != 0) || (yr % 400 === 0));
console.log(checkLeapYear(2024)); //true
// Question 13:
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use functions statements to print the corresponding day's name.
var daysOfWeek = (dayNum) => {
    var dayName;
    switch (dayNum) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'Please enter the number between 1 to 7';
            break;
    }
    return dayName;
};
console.log(daysOfWeek(5));
//Question 14:
// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if
// greater than 200 then add 15 % of tax so on up to if greater than 500 then add 25 % of tax
// Where the tax amount will be calculated by the amount of bill.
var priceIncludingTax = (pricePerUnit, unitSConsumed) => {
    var amountBill = unitSConsumed * pricePerUnit;
    var taxAmount;
    var totalPrice;
    if (unitSConsumed > 100 && unitSConsumed <= 200) {
        taxAmount = amountBill * (10 / 100);
    }
    else if (unitSConsumed > 200 && unitSConsumed <= 500) {
        taxAmount = amountBill * (15 / 100);
    }
    else if (unitSConsumed > 500) {
        taxAmount = amountBill * (25 / 100);
    }
    else {
        taxAmount = 0; // No tax for consumption less than or equal to 100.
    }
    totalPrice = amountBill + taxAmount;
    return totalPrice;
};
console.log(priceIncludingTax(2, 200));
// Question 15:
// - Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.
var studentPassOrFail = (attendance_Percentage, theory_Percentage, practical_Percentage) => {
    if (attendance_Percentage > 75 && theory_Percentage > 50 && practical_Percentage > 45) {
        return 'Pass';
    }
    else {
        return 'Fail';
    }
};
console.log(studentPassOrFail(78, 60, 46));
//Question 16:
//  - Write a ts program that evaluates the grades of the students:
//   * 80% or greater, grade A
//   * 70% or greater, grade B
//   * 60% or greater, grade C
//   * 50% or greater, grade D
//   * Less than 50% , grade F.
var gradesOfStudents = (percentAge) => {
    if (percentAge >= 80) {
        return 'A';
    }
    else if (percentAge >= 70 && percentAge < 80) {
        return 'B';
    }
    else if (percentAge >= 60 && percentAge < 70) {
        return 'C';
    }
    else if (percentAge >= 50 && percentAge < 60) {
        return 'D';
    }
    else {
        return 'F';
    }
};
console.log(gradesOfStudents(78));
export {};
