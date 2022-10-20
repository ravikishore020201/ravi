function fib(n, map = {}) {
    if (n in map) return map[n];
    if (n <= 2) return 1;
    map[n] = fib(n - 1, map) + fib(n - 2, map);
    return map[n];
}
console.log(fib(500));