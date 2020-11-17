  
let findTheOldest = function(object) {

    return object.reduce(function (oldest, next) {
        let oldestPerson = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let nextPerson = findAge(next.yearOfBirth, next.yearOfDeath);

        return (oldestPerson < nextPerson) ? next : oldest;
    })
}

let findAge = function(birth, death){
    if (!death) {
        death = new Date().getFullYear();
    }
        return death - birth;
}



module.exports = findTheOldest