let args = process.argv.splice(2);
let max = 6;
//
function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
    
  }
//
const diceRoller = function(amountOfDice) {
    let diceString = parseInt(args);
    let output = "";
    for(let i = 0; i < diceString; i++) {
        let value = getRandomInt(max);
        output += value;
        if( i < diceString-1) {
            output += ", ";
        }
    }
    return `Rolled ${diceString} dice: ${output}`;    
}

console.log(diceRoller(args));