// Black Jack

let deck   = [];
let suits  = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack",
"Ten", "Nine", "Eight", "Seven", "Six",
"Five", "Four", "Three", "Two"];

for (let suitsIdx=0; suitsIdx < suits.length; suitsIdx++){

    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
    
    deck.push(values[valueIdx] + " of " + suits[suitsIdx]);
    
}
}

console.log(deck);

