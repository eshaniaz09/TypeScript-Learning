// import inquirer from "inquirer";
// interface numberType{
//     userGuess: number;
//     tryAgain: boolean;
// }
// // the system generates the random number
// const systemGeneratedNUmber = Math.floor(Math.random() * 10);
// // let againTry = true;
//     const guessGameNumber:numberType = await inquirer.prompt([
//         {
//             type: 'number',
//             name: 'userGuess',
//             message: `I have a secret number between 1 and 9. Can you guess what it is? `,
//         },
//         {
//             type: 'confirm',
//             name: 'tryAgain',
//             message: `Do you want to play again?  `,
//             default: false
//         }
//     ]);
//     const { userGuess , tryAgain} = guessGameNumber;
//     if (userGuess === systemGeneratedNUmber) {
//         console.log('userGuess = ', userGuess, 'systemGeneratedNumber = ', systemGeneratedNUmber);
//         console.log('Yes...! your answer is correct \n You win.');
//     } else {
//         console.log('Please try again. \n Better luck next time.');
//     }
//     // againTry = tryAgain;
import inquirer from "inquirer";
async function startGuessingGame() {
    let playAgain = true;
    while (playAgain) {
        const systemGeneratedNumber = Math.floor(Math.random() * 10);
        const guessGameNumber = await inquirer.prompt([
            {
                type: 'number',
                name: 'userGuess',
                message: `I have a secret number between 1 and 9. Can you guess what it is? `,
            }
        ]);
        const { userGuess } = guessGameNumber;
        if (userGuess === systemGeneratedNumber) {
            console.log('Congratulations! Your guess is correct. You win!');
        }
        else {
            console.log('Sorry, your guess is incorrect. The correct number was ' + systemGeneratedNumber);
        }
        const playAgainResponse = await inquirer.prompt({
            type: 'confirm',
            name: 'playAgain',
            message: 'Do you want to play again?',
            default: false
        });
        playAgain = playAgainResponse.playAgain;
    }
}
// Start the guessing game
startGuessingGame();
