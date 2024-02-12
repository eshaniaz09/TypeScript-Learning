"use strict";
// // There are two types of scope :
// //global Scope variable
// //block scope variable
// //let => block scope variable
// //const => block scope variable
// //var => global scope variable
// let a: string = 'Esha';
// {
//     a = 'hello';
//     // let a: string = "niaz";
//     console.log(a);
// }
// //now the value of a is updated
// //we can reassign the value of block scope element let
// console.log(a);
// // we cannot reassign the value of block scop element const
// const b: string = 'hello';
// {
//     // b = 'world'; // compilation error message
//     console.log(b);
// }
// console.log(b);
//
// if (true) {
//     let a = 4;
// } else {
//     let s = 'hello';
// }
// // console.log(a);
// let array2: Array<number> = [1, 2, 3];
// // let array3 = new Array[number];
// let array4: number[] = [];
// let array5: number[] = new number[7];
// let myType= <any> { name: 'esha', id: 1 };
// myType = { id: 2, name: 'tom' };
// myType = { id: 3, name: 'mike', gender: false };
// myType = { id: 4, gender: false };
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);
