const caesar = function(string, num) {

    num = num % 26; 
    let newString = "";
  
    for (let i = 0; i < string.length; i++) {
       
       let uniValue = string[i].charCodeAt();
  
        if (uniValue >= 65 && uniValue <= 90) {
          
            if (uniValue + num > 90) {
              num = num - 26;
              newString += String.fromCharCode(uniValue + num);
            } else if (uniValue + num < 65) {
                num = num + 26;
                newString += String.fromCharCode(uniValue + num);
            } else {
              newString += String.fromCharCode(uniValue + num);
            }
        }else if (uniValue >= 97 && uniValue <= 122) {
          
            if (uniValue + num > 122) {
              num = num - 26;
              newString += String.fromCharCode(uniValue + num);
            }else if (uniValue + num < 97) {
                num = num + 26;
                newString += String.fromCharCode(uniValue + num);
            }else {
              newString += String.fromCharCode(uniValue + num);
            }
        }else {
            newString += String.fromCharCode(uniValue);
        }
    }
    return newString;
  }
  




module.exports = caesar
