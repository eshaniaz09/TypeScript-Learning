import inquirer from "inquirer";
import chalk from "chalk";
let todoS = [];
let loop = true;
while (loop) {
    const todoList = await inquirer.prompt([
        {
            type: 'input',
            message: 'What do you want to add in your todo? ',
            name: 'TODO'
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add more tasks?',
            default: false
        }
    ]);
    const { TODO, addMore } = todoList;
    loop = addMore;
    if (TODO) {
        todoS.push(TODO);
    }
    else {
        console.log('kindly add valid input. ');
    }
}
;
if (todoS.length > 0) {
    console.log('Your todo list: ');
    todoS.forEach(todo => {
        console.log(chalk.bgBlack(todo));
    });
}
else {
    console.log('No todo list found');
}
