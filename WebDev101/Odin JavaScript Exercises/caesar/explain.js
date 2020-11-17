const caesar = function(string, num) {

  num = num % 26; 
  let newString = "";

  for (let i = 0; i < string.length; i++) {
     
     let uniValue = string[i].charCodeAt();

      if (uniValue >= 65 && uniValue <= 90) {
        String.fromCharCode(uniValue);
          if (uniValue + num > 90) {
            num = num -26;
            newString += String.fromCharCode(uniValue + num);
          }else {
            newString += String.fromCharCode(uniValue + num);
          }
      }else if (uniValue >= 97 && uniValue <= 122) {
        String.fromCharCode(uniValue + num);
          if (uniValue + num > 122) {
            num = num -26;
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

  


  /* 
  UTF-16: A-Z = 65-90, UTF-16 a-z = 97-122;

ORIGIONAL


const caesar = function(string, num) {

    num = num % 26; 
    let newString = "";

    for (let i = 0; i < string.length; i++) {
       
       let uniValue = string[i].charCodeAt();

        if (uniValue >= 65 && uniValue <= 90) {
            newString += String.fromCharCode(uniValue + num);
        }else if (uniValue >= 97 && uniValue <= 122) {
            newString += String.fromCharCode(uniValue + num);

        }else {
            newString += String.fromCharCode(uniValue);


        }
    }

return newString;

}


  */

