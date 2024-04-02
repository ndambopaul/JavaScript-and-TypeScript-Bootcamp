var numbers = [1, 2, 3 , 4, 5, 6, 7, 8]

var sum = 0;
var i = 0;

while (i < numbers.length) {
    sum += numbers[i]
    //sum = sum + numbers[i]
    i += 1 // Base case
}

console.log(sum)

var new_sum = 0
var loop_count = 0

do {
    new_sum += numbers[loop_count]
    loop_count += 1
} while (loop_count < numbers.length)

console.log(new_sum)