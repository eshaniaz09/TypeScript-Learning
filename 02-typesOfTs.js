// there are many and many types of the ts like:
// number       string       Boolean       Null
// array        object       Function       undefined
// tuple        enum interface     any
// class        interface     any and many more........
// Syntax of ts:
// 1. let variableName : dataType = value;
//    or
// 2. const variableName : dataType = value;
// lets start with the types of the ts
// 1-string
var named = "Esha";
console.log(named);
// 2-boolean 
var isLogeIn = false;
console.log(isLogeIn);
// 3-number
//- js dose note have the runtime value for integer , so there's no equivalent
// to int or float , everything is the simple number . the value is being inferred
// how the value is inferred and what is inferred ?
var age = 25;
console.log(typeof (age));
console.log(age);
// note : we don't node to write the : type in the syntax of ts in some cases
// cuz ts is very smarter to understand the type and declared by itself
// so the good practice to write the code is:
//   let mySelf = "esha"
// but in some cases its compulsory to write the : type in syntax
// 4- any
var mySelf = "esha";
console.log(mySelf);
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
var hero;
function heroFun() {
    return "hello esha";
}
hero = heroFun();
console.log(typeof (hero));
console.log(hero);
