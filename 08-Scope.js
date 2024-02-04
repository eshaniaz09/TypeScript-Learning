"use strict";
// There are two types of scope :
//global Scope variable
//block scope variable
//let => block scope variable
//const => block scope variable
//var => global scope variable
let a = 'Esha';
{
    a = 'hello';
    // let a: string = "niaz";
    console.log(a);
}
//now the value of a is updated
//we can reassign the value of block scope element let
console.log(a);
// we cannot reassign the value of block scop element const
const b = 'hello';
{
    // b = 'world'; // compilation error message
    console.log(b);
}
console.log(b);
