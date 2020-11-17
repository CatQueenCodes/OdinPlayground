

const sumAll = function(min,max) {
    if ((min || max) < 0) return 'ERROR';
    if((min || max) !== 'number') return 'ERROR';
    if (min > max) {
        let tempMin = min;
        min = max;
        max = tempMin;
    }

    let finalSum = 0;

    for(let i=min; i<=max; i++) {
       
      finalSum += i;
    }
return finalSum;
}

sumAll(10, [90, 1])




const sumAll = function(first, sec) {

    let finalSum = '';
  
    for (let i = first; i = sec; i++ ) {
      finalSum += i;
    }
    return finalSum;
  }
