// Develop a ts calculator application which may perform basic arithmetic operations and take input from users using inquirer
// Note: The output must be shown in different colors for each output of arithmetic operation.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.gray.bold.italic.underline('Calculator'));
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number: '
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number: '
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the operator you want to perform: ',
        choices: ['+', '-', '*', '/']
    }
]);
let result;
switch (answer.operator) {
    case '+':
        result = answer.num1 + answer.num2;
        console.log(chalk.yellow('The answer for addition is: '), chalk.yellow(result));
        break;
    case '-':
        result = answer.num1 - answer.num2;
        console.log(chalk.blue('The answer for the subtraction is: '), chalk.blue(result));
        break;
    case '*':
        result = answer.num2 * answer.num2;
        console.log(chalk.red('The answer for the multiplication is: '), chalk.red(result));
        break;
    case '/':
        result = answer.num1 / answer.num2;
        console.log(chalk.green('The answer for the division is: '), chalk.green(result));
        break;
}
// async function startAgain() {
//     do{
//         await answer();
//        var again= await inquirer
//         .prompt ({
//             type:'input',
//             name:'restart',
//             message:'Do you want to continue again? press y or n'
//         })
//     }while(again.restart=='Y'|| again.restart=='y'|| again.restart=='yes'||again.restart=='Yes')
// }
// startAgain();
