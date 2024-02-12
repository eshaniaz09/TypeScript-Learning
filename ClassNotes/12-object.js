"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carss = void 0;
// object=> an entity containing key and value(a property or a function)
let obj1 = {
    named: "esha",
    age: 30,
    country: 'pakistan',
    degree: 'BS software engineering',
    skillSet: ['java', 'javascript', 'cpp', 'typescript'],
    student: true
};
exports.default = obj1;
//accessing the properties of the object using dot notation.
console.log('obj1:', obj1.degree);
// an array also contain objects
let cars = [
    { brand: 'kia', model: 'szuki', color: 'blue' },
    { brand: 'honda', model: 'honda', color: 'black' },
    { brand: 'Toyota', model: 'Camry', color: 'gray' },
];
console.log(cars[0].color, cars[1].color, cars[2].color);
let car = {
    company: 'honda',
    isUsed: true,
    year: 2024
};
console.log(car);
// custom type for the list of cars => carType[]
let carS = [
    {
        // company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    },
    {
        company: 'honda',
        isUsed: true,
        year: 2024
    }
];
// print all the years from array
for (let index = 0; index < carS.length; index++) {
    console.log(carS[index].year);
}
// export is used to transfer the data from this file to another file
// we cannot use export default multiple times but we can change the name of the variable of the default export when we import that variable from another file
exports.carss = {
    model: 'crown',
    price: 300000,
    company: 'toyoto',
    isInsured: false,
    colors: 'black'
};
let todoList = [
    { id: 1, text: 'Its CS lecture' },
    { id: 2, text: 'Its SE lecture' },
    { id: 3, text: 'Its Islamic lecture' },
    { id: 4, text: 'Tts English lecture' },
    { id: 5, text: 'Its SSH lecture' }
];
// add a new item in array
todoList.splice(todoList.length, 0, { id: 6, text: 'Its a break' });
console.log(todoList);
// add edit the item of todoList by using the item id
let editToDoById = 4;
let editedText = 'The english lecture is off today.';
todoList.forEach((obj) => {
    if (obj.id === editToDoById) {
        obj.text = editedText;
    }
});
console.log(todoList);
// 3. ⁠del a todo by id from array
let delId = 5;
const indeX = todoList.findIndex((todo) => todo.id === delId);
console.log(indeX);
todoList.splice(indeX, 1);
console.log(todoList); // the object having id 5 has been deleted.
