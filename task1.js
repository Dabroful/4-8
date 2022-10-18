'use strict'

const randomNumbers = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(Math.round(0 - 0.5 + Math.random()* (100 - 0 + 1)))
    }
    return arr;
}

console.log(randomNumbers(10));