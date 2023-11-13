"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
add("5");
console.log(add("5"));
// it is may be compulsory to use the : type with the name
// of the variable to reduce the errors.
// function add2(num: number) {
//     return num + 2;
// }
// add2("5");   // this gives an error of wrong type
// another example
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("esha");
function signUp(name, email, password) {
}
signUp("esha", 3, true);
// fat arrow functions
var logedIn = function (name, email, isPaid) {
};
logedIn("esha", "esha@gmail.com", false);
// heres another case in the ts that we can not only pass the
// values of the two parameters out of three . It gives an error
// to resolve it we should gives the default values in the parameters of the
// functions
function signUp2(name, email, isPaid) {
    if (email === void 0) { email = "esha@gmail.com"; }
    if (isPaid === void 0) { isPaid = false; }
}
signUp2("esha");
// if you try to send more than two arguments it also gives an error
// function add3(num1: number, num2: number, num3: number) {
//     return num1 + num2 + num3;
// }
// add3(1, 2, 3, 4, 5);  // error
//
// heres another case if we see closely the function exp:
var sumNum = function (num1) {
    // return  num1 + "hello";
    return "hello";
};
console.log(sumNum(5));
// heres we can see that the parameter is of type number but in the
// return the string is passed and ts also accept it
// Q: How can we return more accurate value in a function
// heres the solution of such problem and good practice to write the code
var sum2 = function (num) {
    // return "hello"; error , the return value must be of type number
    return 5 + num;
};
console.log(sum2(10));
;
