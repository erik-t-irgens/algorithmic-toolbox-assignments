// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function getPisanoPeriod(m) {
    let a = 0
    let b = 1
    let c = 1
    let limit = 1
    for (let i = 0; i < limit; i++) {
        c = (a + b) % m
        a = b
        b = c
        if (a == 0 && b == 1) return i + 1
        limit = limit + 1
    }
}

function getFibMod(n, m) {
    let fibArr = [0, 1]
    for (let i = 2; i <= n; i++) {
        fibArr.push(0)
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr[n] % getPisanoPeriod(m)
}

module.exports = getFibMod;
