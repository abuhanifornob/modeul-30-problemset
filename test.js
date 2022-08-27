function min(nums) {
    console.log(nums);
    return Math.min(nums)
}
console.log(min([1, 3, 2]))

const numbers = [10, -1, 1, 3, 2];
console.log(Math.min(...numbers));
const cube = x => x * x * x;
console.log(cube(2))
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);
const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y)
const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => {
    console.log(n % 2);
    return n % 2;
});
console.log(output);
const product = {
    name: 'Laptop',
    model: 'Yoga 3',
    price: 49000,
    dusk: '512SSD'
}

const { price } = product;
console.log(price);