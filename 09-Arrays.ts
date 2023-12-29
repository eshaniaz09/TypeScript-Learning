//Arrays: used to save the data in a sequence
let array: string[] = ['esha ', 'tehzeeb ', 'hamna '];
console.log(array);
let data2 = 2;
console.log(array[data2]);

console.log(`my array elements are ${array}`);

//Accessing elements of an Array using Index
console.log('Accessing elements by index');
console.log("Element at index 0 is : ", array[0]);
console.log("Element at index 1 is : ", array[1]);
console.log("Element at index 2 is : ", array[2]);
//Length property: returns the number of elements in an array
console.log('The length of this array is ', array.length)
// Last index is always equal to array length:
console.log("Last element is :", array[array.length - 1]);

let rollNumbers: number[] = [1, 2, 3, 4, 5, 6];
let data = 2;
console.log(rollNumbers[data]);
// printing both arrays
console.log(array[data], rollNumbers[data]);

let truthFalse: boolean[] = [true, false, true, false, false];
let data3: number = 2;
console.log(truthFalse[data3]);
console.log(truthFalse[2]);
console.log(array[data3], rollNumbers[data3], truthFalse[data3]);

//                       -----Note-----
// wo can use extract data form an array by using three forms
// by writing the index number
// the variable (which includes the index number of the array)
// by passing the function which returns the number
// the return type of the length is number




//                the methods or prototype for the arrays:
//1- push()=>  to add the new string or number in the last array
let studentsNames: string[] = ['esha',  'tehzeeb', 'umer', 'ayyan', 'waleed'];
console.log(studentsNames);
console.log(studentsNames.push());

studentsNames.push('hamna', 'zainab');
console.log(studentsNames[studentsNames.length - 1]);
console.log(studentsNames.push('saqib')); //8 this returns the index number of the new number or string added
let emptyArray: string[] = [];
console.log(studentsNames.length-1);

console.log(emptyArray.push()); //0
console.log(studentsNames.push()); // returns the last index


//2- pop() => to remove the number or string from the last of the array , returns the removed value or if there is no value in he array in returns the undefined.
studentsNames.pop();// saqib
studentsNames.pop();//zainab
console.log(studentsNames);
console.log(studentsNames.pop()); // returns the removed value(hamna)
console.log(studentsNames.length); //5
console.log(studentsNames); 
console.log(emptyArray.pop()); // undefined


//3- shift()=> remove value from the start
console.log(studentsNames.shift()); //returns esha
console.log(studentsNames);
console.log(emptyArray.shift()); // undefined


//4- unshift()=> add value in the start
console.log(studentsNames.unshift()); //4 => if no value is passed in the unshift function then it returns the length of the array
console.log(studentsNames.unshift('esha')); // returns the new length
console.log(studentsNames);
let noValue:any = [];
// console.log(noValue.unshift()); //0
noValue.unshift();
console.log(noValue);

//5- splice(indexStart , deleteCount , addNewValue , addNewValue ) 
//  returns the multiple removed value or in an array 
// firsts argument is required
let newArray: string[] = ['hello', 'esha', 'you', 'are', 'great'];
// newArray.splice(1, 2); // remove esha and you
// newArray.splice(1, 0); // removes no value
// newArray.splice(0); // removes all the values
// newArray.splice(newArray.length, 1); // removes last value
// newArray.splice(0, 2, "welcome", "eman")  //[ 'welcome', 'eman', 'you', 'are', 'great' ] addition in the place of removed array
// newArray.splice(0 , 0 , 'waooww' , "its a surprise!") addition in the start
newArray.splice(newArray.length , 0, 'nice to meet you');
console.log(newArray); 








// Summary=>
//   to add new values in the array:
// push() => in the last , returns the new length of an array or if there is no value in the array it returns zero
// unshift() => in the start , returns the new length  of an array or if there is no value in the array it returns zero

// to remove values from array:
// pop() => from last , returns the removed value or if there is no value in array it returns undefined.
// shift() => from start , returns the removed array or if there is no value in array it returns undefined.




// Assignment:
let toDoList: string[] = [
    'Wake up early at 4 AM',
    'Have exercise and bath',
    'Do fajar prayer',
    'Solve one leetCode question',
    'Have a break fast',
    'Do university Assignment',
    'Get ready for uni',
    'Have lunch',
    'Do development task',
    'Sleep at 9 PM'
]

toDoList.splice(1, 1);
toDoList.splice(toDoList.indexOf('Have lunch'), 1, "Prepare lunch");
toDoList.splice(4, 0, "Study data structures and algorithms");
toDoList.splice(toDoList.length - 1, 1);
console.log(toDoList);


//6- indexOf() => returns the index number by giving the string 
console.log(newArray.indexOf('esha')); //1

//7 - sort()
let sortNumbers: number[] = [12, 34, 23,  1, 65, 88, 99, 46];
// console.log(sortNumbers.sort());

//8- slice()=> give some part of an array which we want
console.log(sortNumbers.slice(1 , 2));

