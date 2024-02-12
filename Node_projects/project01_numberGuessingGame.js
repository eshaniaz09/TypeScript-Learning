import inquirer from "inquirer";
// the system generates the random number
const systemGeneratedNUmber = Math.floor(Math.random() * 10);
const guessGameNumber = await inquirer.prompt([
    {
        type: 'number',
        name: 'userGuess',
        message: `I have a secret number between 1 and 9. Can you guess what it is? `,
    }
]);
const { userGuess } = guessGameNumber;
if (userGuess === systemGeneratedNUmber) {
    console.log('userGuess = ', userGuess, 'systemGeneratedNumber = ', systemGeneratedNUmber);
    console.log('Yes...! your answer is correct \n You win.');
}
else {
    console.log('Please try again. \n Better luck next time.');
}
