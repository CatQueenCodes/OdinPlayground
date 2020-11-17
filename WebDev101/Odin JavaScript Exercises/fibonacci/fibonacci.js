
const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let sequence = [1,1];
    let num1 = sequence[0];
    let num2 = sequence[1];
    let next;

    let i = 2;
    while (i < num) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        sequence.push(next);

        i++
    }
return sequence.pop();

}

module.exports = fibonacci