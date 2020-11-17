
const repeatString = function(word, times) {

  let string = '';

  if (times < 0) return 'ERROR';

  for (let i = 0; i < times; i++ ) {
    string += word 
  }
return string; 
}

module.exports = repeatString