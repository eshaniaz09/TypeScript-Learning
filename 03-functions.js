"use strict";
//  that it is may be compulsory to use the : type with the name
// of the variable in functions to reduce the errors.
// function add2(num: number) {
//     return num + 2;
// }
// add2("5");   // this gives an error of wrong type
// another example
// function getUpper(val: string) {
//     return val.toUpperCase();
// }
// getUpper("esha");
// function signUp(name : string , email : number , password : boolean) {
// }
// signUp("esha", 3, true);
// fat arrow functions
// let logedIn = (name : string , email : string , isPaid : boolean) => {
// }
// logedIn("esha" , "esha@gmail.com" , false );
// heres another case in the ts that we can not only pass the
// values of the two parameters out of three . It gives an error
// to resolve it we should gives the default values in the parameters of the
// functions
// function signUp2(name : string , email : string = "esha@gmail.com", isPaid : boolean = false) {
// }
// signUp2("esha");
// if you try to send more than two arguments it also gives an error
// function add3(num1: number, num2: number, num3: number) {
//     return num1 + num2 + num3;
// }
// add3(1, 2, 3, 4, 5);  // error
//
// heres another case if we see closely the function exp:
// let sumNum = (num1: number)=>{
//     // return  num1 + "hello";
//     return "hello";
// }
// console.log(sumNum(5));
// heres we can see that the parameter is of type number but in the
// return the string is passed and ts also accept it
// Q: How can we return more accurate value in a function
// heres the solution of such problem and good practice to write the code
// Return Type Annotations
// let sum2 = (num: number) : number => {
//     // return "hello"; error , the return value must be of type number
//     return 5 + num;
// }
// console.log(sum2(10));
// heres the type string is not assignable to type the number. it gives an error
// Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its return statements. The type annotation in the above example doesn’t change anything. Some codebase will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.
// but in case of the conditional statements may be type annotations not used like
// let number = (num: number) => {
//     if (num == 5) {
//         return true;
//     }
//     return "yes thats also fine.";
// }
// // here value may be a boolean type or a string type 
//    // (num : number) => boolean | string
// number(5);
// now lets see an array and map()  function
// const heros = ['thor', 'spiderman', 'ironman']
// heros.map((hero) : string => {
//     return `hero is ${hero}`;
//     // return 5; // this gives an error
// });
// heres this is a code practice to write the in ts
// this will give us an output as follows
// hero is thor
// hero is spiderman
// hero is ironman
// here we can see that the return type of the map function is string
// so the hero variable should be of type string
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
// console.log("hello esha");
// let's see how to use generics with arrays
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter((num) => {
//     return num % 2 == 0;
// });
// export { };
// we can pass the tree types of parameters in the function=>
// direct static values like=> 1 ,2 ,3...
// declared variables
// function => sum(sub(2,3) , b){} we only use a function as a parameter when the parameter function returns a value
