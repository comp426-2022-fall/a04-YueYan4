//import minimist from 'minimist'

const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

var sides = 6
var dice = 2
var rolls = 1

if (args.sides) {
  sides = args.sides
}
if (args.dice) {
  dice = args.dice
}
if (args.rolls) {
  rolls = args.rolls
}

//let results = []
//var total = 0
//for(let i = 0; i < rolls; i++){
  //total  += Math.floor(Math.random() * dice * sides) + 1
 // results[i] = total
//}

//var data = {sides:sides, dice:dice, rolls:rolls, results:results}
//console.log(JSON.stringify(data))
function roll(numSides, numDice, numRolls) {
  var results = []
  for (let i = 0; i < numRolls; i++){
    let randNum = Math.floor(Math.random() * numSides * numDice) + 1
    results[i] = randNum
  }
  var jsonResults = {sides: numSides, dice: numDice, rolls: numRolls, results: results};
  return jsonResults 
}
exports.roll = roll;  
