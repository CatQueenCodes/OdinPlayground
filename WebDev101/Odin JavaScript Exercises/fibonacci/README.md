# Exercise XX - fibonacci

Create a function that returns a specific member of the fibonacci sequence:

> a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```












const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    let sequence = [1, 1];
    let num1 = sequence[0];
    let num2 = sequence[1]
    let next;
    
    let i = 2; // numbers in sequence to start
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
