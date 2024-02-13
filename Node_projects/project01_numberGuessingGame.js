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
