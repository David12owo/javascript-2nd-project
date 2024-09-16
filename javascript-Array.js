// find maximum and minimum in the array
let numbers = [5, 7, 2, 9, 1];

let max = Math.max(...numbers);
console.log(max);

let min = Math.min(...numbers);
console.log(min);

// sum of array
// still making use of the let numbers = [5, 7, 2, 9, 1]
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// filter array
let filteredNumbers = numbers.filter((num) => num > 3);
console.log(filteredNumbers);
