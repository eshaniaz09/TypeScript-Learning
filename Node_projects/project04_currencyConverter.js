import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.27,
        "PKR": 353.99,
        "GBP": 1
    },
    "USD": {
        "PKR": 279.57,
        "GBP": 0.79,
        "USD": 1
    }
};
// taking input from user
const userInputs = await inquirer.prompt([
    {
        type: 'list',
        name: 'from',
        choices: ['PKR', 'GBP', 'USD'],
        message: 'select your currency = '
    },
    {
        type: 'list',
        name: 'to',
        choices: ['PKR', 'GBP', 'USD'],
        message: 'select your currency for conversion = '
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Your amount to be converted: '
    }
]);
// now destructing:
const { from, to, amount } = userInputs;
if (from && to && amount) {
    const result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log('Invalid parameters');
}
