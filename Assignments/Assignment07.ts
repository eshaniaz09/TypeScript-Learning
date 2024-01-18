// Develop a ts calculator application which may perform basic arithmetic operations and take input from users using inquirer
// Note: The output must be shown in different colors for each output of arithmetic operation.

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number: '
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number'
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the operator you want to perform: ',
        choices: ['+', '-', '*', '/']
    }
]);
let result: number;
switch (answer.operator) {
    case '+':
        result = answer.num1 + answer.num2;
        console.log('The answer for addition is: ', result);
        break;
    case '-':
        result = answer.num1 - answer.num2;
        console.log('The answer for the subtraction is: ', result);
        break;
    case '*':
        result = answer.num2 * answer.num2;
        console.log('The answer for the multiplication is: ', result);
        break;
    case '/':
        result = answer.num1 / answer.num2;
        console.log('The answer for the division is: ', result);
        break;
}