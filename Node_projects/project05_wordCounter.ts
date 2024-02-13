import inquirer from "inquirer";

const userSentence: {
    sentence: string;
} = await inquirer.prompt([
    {
        type: 'input',
        name: 'sentence',
        message: "Please enter a sentence"
    }
]);

const words = userSentence.sentence.trim().split(' ');
console.log(`Your sentence have ${words.length} words`);
