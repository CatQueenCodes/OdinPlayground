const palindromes = function(string) {

    let simpleString = string
         .toLowerCase()
         .replace(/[^A-Za-z]/g, "")
         .split("")
         .join("");
 
     let reverseString = simpleString
         .split("")
         .reverse()
         .join("");
 
    return (simpleString == reverseString) ? true : false;
 }

module.exports = palindromes
