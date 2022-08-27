const numbers = [2, 3, 10];
const average = numbers => {
    let sum = 0;
    for (let number of numbers) {
        sum += Math.pow(number, 2);
    }
    let average = sum / numbers.length
    return average;
}

console.log(average(numbers));