// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    let fibArr = [0, 1]
    for (let i = 2; i <= n; i++) {
        fibArr.push(0)
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr[n]
}

module.exports = fib;
