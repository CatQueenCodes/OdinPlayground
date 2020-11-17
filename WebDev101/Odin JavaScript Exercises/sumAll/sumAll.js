
const sumAll = function(min, max) {
  if (isNaN(min) || isNaN(max)) return "ERROR";
  if (min || max < 0) return "ERROR";
  if(min>max) {
     let newMin = min;
     min = max;
     max = newMin;
  }
  
  
    let finalSum = 0;
  
    for (let i = min; i <= max; i++ ) {
      finalSum += i;
    }
    return finalSum;
  }

module.exports = sumAll;
