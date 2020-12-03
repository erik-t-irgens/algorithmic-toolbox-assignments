// Greedy version of fizzbuzz
function fizzBuzzGreedy(n) {
    let answer = []
    for (let i = 1; i <= n; i++) { // O(n)
        if (i % 5 === 0) {
            if (i % 3 === 0) {
                answer.push("FizzBuzz")
            } else {
                answer.push("Buzz")
            }
        } else if (i % 3 === 0) {
            answer.push("Fizz")
        } else {
            answer.push(i)
        }
    }

    return answer
}


// Concatenated/More efficient?

function concatFizzBuzz(n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        answer.push((i % 15 === 0) ? "FizzBuzz" :
            (i % 5 === 0) ? "Buzz" :
                (i % 3 === 0) ? "Fizz" :
                    i)
    }
}

// Version with cycles
function fizzBuzzCycles(n) {

}