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
type carType = { company: string, isUsed: boolean, year: number };
let car: carType = {
    company: 'honda',
    isUsed: true,
    year: 2024
};

console.log(car);


