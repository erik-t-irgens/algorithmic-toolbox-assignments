// boilerplate code provided by Coursera
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine(line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // When receiving an array, decide which two numbers - when paired - would provide the greatest product of any paired number. 

    let max1 = 0;
    let max2;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max1) {
            max2 = max1
            max1 = arr[i]
        } else if (arr[i] > max2) {
            max2 = arr[i]
        }
    }

    return max1 * max2

}

module.exports = max;