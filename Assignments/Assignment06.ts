// Assignment for the week is:

//Question-01:
//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

let insertValue = (array:number[]): number[] => {
    array.splice(8, 0, 9);
    return array;
}

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log("Array before inserting value: ", array);
let afterInserting:number[] = insertValue(array);
console.log("Array after inserting value ", afterInserting);

//Question-02:
//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation.
let shoppingCart: string[] = ['pencil Quantity = 2', 'headphones Quantity = 1', 'wireless mouse Quantity = 1', 'notebook Quantity = 3'];
addItemToShoppingCart('keyboard Quantity=1');
removeItemFromShoppingCart();
updateQuantityOfCartItems();


function addItemToShoppingCart(itemName: string):void {
    shoppingCart.splice(shoppingCart.length, 0, itemName);
    console.log(shoppingCart);
}
function removeItemFromShoppingCart():void {
    if (shoppingCart.length > 0) { 
        shoppingCart.splice(shoppingCart.indexOf('pencil Quantity = 2'), 1);
        console.log(shoppingCart);
    }
    else { 
        console.log('No item found in cart. Please select the items to add to cart');
    }
}

function updateQuantityOfCartItems():void {
    shoppingCart.splice(shoppingCart.indexOf('notebook Quantity = 3'), 1, 'notebook Quantity = 2');
    console.log(shoppingCart);
}

//Question-03:
//  - Write a program that uses a while loop to print the first 25 integers.
let integers: number = 1;
while (integers <= 25) {
    console.log(integers);
    integers++;
}

///Question-04:
//  - Write a program that uses a while loop to print the first 10 even numbers.
let numbers: number = 1;
while (numbers <= 20) { 
    if (numbers % 2 == 0)
    console.log(`${numbers}`);
    numbers++;
}

//Question-05:
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
let findFactorial = (num_: number): number => {
    let fact: number = 1; 
    while (num_>0) {
        fact = fact * num_;
        num_--;
    }
    return fact;
}

console.log(findFactorial(5)); //5*4*3*2*1


// Question-6:
//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let positiveArray: number[] = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
let i = 0;
while (i <= positiveArray.length) {
    if (positiveArray[i] < 0) {
        console.log(`The negative element in the array is: ${positiveArray[i]}`);
        positiveArray.splice(i, 1);
    }
    i++;
}
console.log(positiveArray); // Array after removing the negative number element in the array.

//Question-7:
//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let sumOfArray = (arraY:number[]): number => {
    let s = 0;
    let i = 0;
    while (i < arraY.length) {
        s = s + arraY[i];
        i++;
    }
    return s;
}
let arraY: number[] = [1, 2, 3, 4, 5];
let sum: number = sumOfArray(arraY);
console.log(sum);

//Question-8:
//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
let conversionIntoFahrenheit = (temperaturesInCelsius:number[]): number[]=>{
    let fahrenheitArr: number[] = [];
    let i: number = 0;
    while (i < temperaturesInCelsius.length) { 
        let temp: number = (temperaturesInCelsius[i] * 9 / 5) + 32;
        fahrenheitArr.push(temp);
        i++;
    }
    return fahrenheitArr;
}
let temperaturesInCelsius: number[] = [10 ,20, 30, 40, 50];
let resultArray: number[] = conversionIntoFahrenheit(temperaturesInCelsius);
console.log(resultArray);

//Question-9:
//  - Write a program to remove all the odd numbers from an array.
let numbered: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value: number = 0;

while (value < numbered.length) {
    if (numbered[value] % 2 !== 0) {
        numbered.splice(value, 1);
    } else {
        value++;
    }
}

console.log(numbered);


