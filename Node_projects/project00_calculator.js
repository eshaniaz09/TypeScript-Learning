import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue.blackBright('Calculator'));
const calculator = await inquirer.prompt([
    {
        type: 'number',
        message: 'Enter the first number',
        name: 'number1',
    },
    {
        type: 'number',
        message: 'Enter the second number',
        name: 'number2',
    },
    {
        type: 'list',
        choices: ['+', '-', '*', '/'],
        name: 'operator'
    }
]);
let answeR = 0;
switch (calculator.operator) {
    case "+":
        answeR = calculator.number1 + calculator.number2;
        break;
    case "-":
        answeR = calculator.number1 - calculator.number2;
        break;
    case "*":
        answeR = calculator.number1 * calculator.number2;
        break;
    case "/":
        answeR = calculator.number1 / calculator.number2;
        if (isNaN(answeR))
            throw new Error("Division by zero is not allowed");
        else
            answeR = Math.floor(answeR);
        break;
    default:
        console.log('Wrong operator');
}
console.log(answeR);
