var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// for in loop
// Extract the index of the elements
var sum = 0
for (const i in numbers) {
    //console.log(i, numbers[i])
    sum += numbers[i]
}
console.log(sum)

// for of loop
var new_sum = 0
for (const value of numbers) {
    //console.log(value)
    new_sum += value
}
console.log(new_sum)

