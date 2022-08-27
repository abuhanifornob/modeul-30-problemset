const numbers1 = [1000, 30, 40, 50];
const numbers2 = [100, 300, 100];
const maximumNumber = (numbers1, numbers2) => {
    const combineNumbers = [...numbers1, ...numbers2];
    return Math.max(...combineNumbers)
}
console.log(maximumNumber(numbers1, numbers2))