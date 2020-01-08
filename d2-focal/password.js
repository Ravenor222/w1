const args = process.argv.splice(2);
//
const obfuscate = function(string) {
  let newString = string.toString();
  let obfuscatedString = "";
  for (let i = 0; i < newString.length; i ++) {
    switch (newString[i]) {
    case "a":
      obfuscatedString += "4";
      break;
    case "e":
      obfuscatedString += "3";
      break;
    case "o":
      obfuscatedString += "0";
      break;
    case "l":
      obfuscatedString += "1";
      break;
    default:
      obfuscatedString += newString[i];
      break;
    }
  }
  return obfuscatedString;
};
console.log(obfuscate(args));