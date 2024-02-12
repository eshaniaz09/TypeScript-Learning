"use strict";
// / Assuming 'suits' is defined somewhere in your code
const suits = ["hearts", "diamonds", "clubs", "spades"];
function pickCard(x) {
    if (typeof x === "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        console.log("pickedCard", pickedCard);
        return pickedCard;
    }
    else if (typeof x === "number") {
        var pickedSuit = Math.floor(x / 13);
        console.log("pickedSuit", pickedSuit);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
