// object=> an entity containing key and value(a property or a function)
let obj1 = {
    named: "esha",
    age: 30,
    country: 'pakistan',
    degree: 'BS software engineering',
    skillSet: ['java', 'javascript', 'cpp', 'typescript'],
    student: true
};
//accessing the properties of the object using dot notation.
console.log('obj1:', obj1.degree);
// an array also contain objects
let cars: any[] = [
    { brand: 'kia', model:'szuki', color:'blue' },
    {brand:'honda', model:'honda', color:'black'},
    { brand: 'Toyota', model: 'Camry', color:'gray'},
]
console.log(cars[0].color, cars[1].color, cars[2].color);

// defining the custom type of an object
// for an optional type we use ? with the value in the type of an object
type carType = { company?: string, isUsed: boolean, year: number };
let car: carType = {
    company: 'honda',
    isUsed: true,
    year: 2024
};
console.log(car);

// custom type for the list of cars => carType[]
let carS:carType[] = [
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
    
]
// print all the years from array
for (let index = 0; index < carS.length; index++) {
    console.log(carS[index].year);
}

// export is used to transfer the data from this file to another file
// we cannot use export default multiple times
export const carss = {
    model: 'crown',
    price: 300000,
    company: 'toyoto',
    isInsured: false,
    colors:'black'
}

// Question:
// Make a todo list array.
// [{id: 1, text: "flah flah"}]

// 1. Add item to array
// 2. ⁠edit a todo by id from arr at
// 3. ⁠del a todo by id from array
// Make sure to use id unique.

type todoType={id:number,text:string}
let todoList: todoType[] = [
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
let editToDoById: number = 4;
let editedText: string = 'The english lecture is off today.';
todoList.forEach((obj) => {
    if (obj.id === editToDoById) {
        obj.text = editedText;
    }
});
console.log(todoList);

// 3. ⁠del a todo by id from array
let delId: number = 5;
const indeX = todoList.findIndex((todo) => todo.id === delId);
console.log(indeX);
todoList.splice(indeX, 1);
console.log(todoList); // the object having id 5 has been deleted.

