var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(sum)