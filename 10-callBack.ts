// call-back functions=> when we pass the function as a parameter in the function definition
let sum3 = (sum2: () => number) => {
    return sum2 ;
}
// we define the sum2 function in the parameter of the sum3
sum3(() => {
    let x = 10;
    let y = 5;
    return x + y;
}     
);

//map():
// one of the callBack function is map(): used to run the loop according to the length of the array
// also use map in the place of the loops ,map is  also a loop
// returns the same length of the array
// returns the same or updated array

let arrY:number[] = [1, 4, 7];
const arr2 = (num:number) => {
    // console.log(Element); 
    return num;
};
console.log(arr2(10));

arrY = arrY.map((num: number) => num);
console.log(arrY);

let numbersArray:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersArrayS = numbersArray.map((num:number) => {
    if (num === 3) {
        return num;
    }
});
console.log('numbersArrayS', numbersArrayS);
console.log(numbersArray);

let names: string[] = ['esha', 'hamna'];
let rollNum: string[] = [];
rollNum = names.map((nameS: string, index: number) => `The passwords of PIAIC  student ${nameS[0 ]}  is PIAIC${nameS}${index}`);
console.log(rollNum);

let ids: number[] = [10, 20, 30, 40, 40, 50, 60, 70, 80, 90, 100];
let nature: string[] = [];
nature = ids.map((val) => {
    if ((val / 10) % 2 === 0) {
        return 'Even'
    }
    else {
        return 'odd'
     }

})
console.log(ids); // same array

console.log(nature);  // updated array

//Filter():
// filter() method creates an array with all elements that pass the test implemented by the provided filtering function.
// filter do not update the array it always return the same array
// filter is only used to get the selected part or element of the array
let arraYs: number[] = [1, -3, -4, 5, 6, -7, 8];
// arraYs = arraYs.filter((val) => {
//     return val * 2;
// })
// console.log(arraYs); // it returns the same array without updating it
// another example => remove the negative numbers 

// arraYs = arraYs.filter((val: number, index: number) => val > 0);
// console.log(arraYs);
// // now take the square of remaining values
// arraYs = arraYs.map((val) => val * val);
// console.log(arraYs);
// // in shortest way=>
arraYs = arraYs.filter((val) => val > 0).map((val) => val * val);
console.log(arraYs);

//Question:1
let fruitsName: string[] = ['Apple', 'Banana', 'Mango', 'orange'];
let fruitsHavingFiveChar: string[] = [];
fruitsHavingFiveChar = fruitsName.filter((fruitName: string) => fruitName.length == 5);
console.log(fruitsHavingFiveChar);

//Question:2
let alphabets: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'o', 'u', 'v'];
let VowelsAlpha: string[] = [];
// VowelsAlpha = alphabets.filter((value:string) => {
//     let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
//     let i = 0;
//     while (i <= vowels.length-1) {
//         if (value == vowels[i])
//             return true;
//         i++;
//     }
// }).map((val) => val.toUpperCase());
// console.log('Vowels are : ', VowelsAlpha);

// another way
VowelsAlpha = alphabets.filter((value: string) => value === 'a' || value === 'e' || value === 'i'
    || value === 'o' || value==='u'
        
).map((val) => val.toUpperCase());

console.log('Vowels are : ', VowelsAlpha);
