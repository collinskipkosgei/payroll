function fibonacciSequence(limit) {
    const fibSequence = [];
    let a = 0, b = 1;
    while (a <= limit) {
        fibSequence.push(a);
        [a, b] = [b, a + b];
    }
    return fibSequence;
}

console.log(fibonacciSequence(100));
