const leapYears = function(year) {

    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 == 0) {
            return true;
        }else if (year % 100 !== 0 || year % 400 !== 0) {
            return false;
        }

    }else {
        return true;
    }

}

leapYears(1900);

//works?

if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }else if (year % 4 == 0 && year % 100 !== 0 && year % 400 !== 0){
        return true;
    }else {
        return false;
    }
    






// works on all but 2 & 6

const leapYears = function(year) {

    if (year % 4 == 0) {
        return true;
    }else if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }else {
        return false;
    }
}

leapYears(1900);






WORKS



const leapYears = function(year) {

    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }else if (year % 4 == 0 && year % 100 !== 0 && year % 400 !== 0){
        return true;
    }else {
        return false;
    }

}

leapYears(700);

module.exports = leapYears




/* shorter and works

var leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
  }

  */

