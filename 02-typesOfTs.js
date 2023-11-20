"use strict";
// there are many and many types of the ts like:
// number       string       Boolean       Null
// array        object       Function       undefined
// tuple        enum interface     any
// class        interface     any and many more........
// 1-string
// let named: string = "Esha";
// console.log(named);
// 2-boolean
// let isLogeIn: boolean = false;
// console.log(isLogeIn);
// 3-number
//- js dose note have the runtime value for integer , so there's no equivalent
// to int or float , everything is the simple number . the value is being inferred
// how the value is inferred and what is inferred ?
// Type inference in TypeScript can be powerful for catching type-related errors during development, providing better tooling support, and improving code quality. However, it's important to note that explicit type annotations can still be added to provide additional clarity or to enforce specific constraints in the code.
// it will be inferred as a floating point number if we assign decimal numbers
// otherwise it will be inferred as an integer
// let age: number = 25;
// console.log(typeof (age));
// console.log(age);
// note : we don't node to write the : type in the syntax of ts in some cases
// cuz ts is very smarter to understand the type and declared by itself
// so the good practice to write the code is:
//   let mySelf = "esha"
// but in some cases its compulsory to write the : type in syntax
// 4- any
// let mySelf: any = "esha";
// console.log(mySelf);
// it is not a good practice to write the code in any cuz it
// breaks the rule or strictness of the typescript
// heres an other example :
// let hero : string;
// function heroFun(){
//          return "hello esha"
// }
// hero = heroFun();
// heres the type of hero is any means it may be string , number or boolean ..
// its not still the good practice to write the code
// how can we resolve it lets see...
// let hero: string;
// function heroFun() {
//     return "hello esha";
// }
// hero = heroFun();
// console.log(typeof (hero));
// console.log(hero);
