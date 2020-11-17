const removeFromArray = function(...args) {

    const array = args[0];

    const newArray = [];

    array.forEach((item) => {
     if (!args.includes(item)) {
        newArray.push(item);
     }
    });
 return newArray;
}

module.exports = removeFromArray


//aray is 1st item in arguement
//everything after array is a new itme
// forEach would run each item in the array as a seperate array


//removeFromArray([1, 2, 3, 4], 7, "tacos") item1=[1,2,3,4], item2=7,item3="tacos"