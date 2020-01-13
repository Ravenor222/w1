
//
const args = process.argv.splice(2);
const givenNumber = parseInt(args);
//

const countPopBottles = function (givenNumber) {
let popBottles = Math.floor(givenNumber / 2);
let bottleObject = {
    "total bottles" : popBottles,
  }
    if(popBottles > 2) {
        popBottles += Math.floor(popBottles/2);
        if(!(bottleObject["remaining bottles"] in bottleObject)) {
            bottleObject["remaining bottles"] =  givenNumber % 2;
            
        } 
    } 
    if(popBottles > 4 ) {
        popBottles += Math.floor(popBottles/4);
        if(!(bottleObject["remaining caps"] in bottleObject)) {
            bottleObject["remaining caps"] = givenNumber % 4;
            bottleObject["total earned"] = {};
            bottleObject["total earned"]["bottles"] = Math.floor(popBottles/2);
            bottleObject["total earned"]["caps"] = Math.floor(popBottles/4);
        }
    }
    return bottleObject;
}
console.log(countPopBottles(givenNumber));