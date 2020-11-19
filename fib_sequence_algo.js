// Slow, recursive, function.

function fib(n) {
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}
// Faster functional algorithm

function fibEff(n) {
    let fibArr = [0, 1]
    for (let i = 2; i < n; i++) {
        fibArr.push(0)
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr[n - 1]
}