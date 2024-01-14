"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import is used to get the variable from another file
const _12_object_1 = require("./12-object");
console.log(_12_object_1.carss);
// Question 1: Doubling Numbers
// Given an array of numbers, use the map function to create a new array where each number is doubled.
const arr = [2, 4, 6, 8];
const arr_2 = arr.map((elem) => elem * elem);
console.log(arr_2);
// Question 2: Squaring Numbers
// Create a function that takes an array of numbers and uses the map function to return a new array where each number is squared.
let squareFunc = (arr) => {
    arr = arr.map((elem) => elem * 2);
    return arr;
};
console.log(squareFunc(arr));
// Question 3: String Lengths
// Given an array of strings, use the map function to create a new array containing the lengths of each string.
let stringArr = ['esha', 'eman', 'tehzeeb', 'hamna'];
let stringLength = stringArr.map((str) => str.length);
console.log(stringLength);
// Question 4: Uppercase Strings
// Write a function that takes an array of strings and uses map to return a new array where each string is converted to uppercase.
let upperCaseString = (stringArr) => {
    stringArr = stringArr.map((stringValue) => stringValue.toLocaleUpperCase());
    return stringArr;
};
console.log(upperCaseString(stringArr));
// Question 5: Extract First Letter
// Given an array of words, use the map function to create a new array containing only the first letter of each word
let extractFirstLetter = (stringArr) => {
    stringArr = stringArr.map((value) => value[0]);
    return stringArr;
};
console.log(extractFirstLetter(stringArr));
