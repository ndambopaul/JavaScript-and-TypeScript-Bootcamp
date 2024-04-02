const cars = ["Tesla", "Mustang", "BMW"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const people = [
    {
        "name": "John",
        "age": 23
    },
    {
        "name": "James",
        "age": 30
    }
]

// Adding an item to an array 
cars.push("Hyundai SUV"); // Adds the element to the end of the array
cars.unshift("Toyota"); // Adds the element to the start of the array

// Remove an item from an array
cars.pop(); // Removes the last item from the array
cars.shift(); // Removes the first item from the array


cars[0] // getting the first item from the array

const odd_numbers = numbers.filter(number => number % 2 !== 0); //
console.log(odd_numbers)

const even_numbers = numbers.filter(number => number % 2 === 0);
console.log(even_numbers)

const older_than_thirty = people.filter(person => person.age > 30)
console.log(older_than_thirty)

const multiplied_by_ten = numbers.map(number => number * 10)
console.log(multiplied_by_ten)

const numbers_squares = numbers.map(number => number * number)
console.log(numbers_squares)

const cars_and_price = cars.map(car => ({"Car Name": car, "Price": 100000}))
console.log(cars_and_price)

const people_country = people.map(person => ({"Name": person.name, "Age": person.age, "Country": "Kenya"}))
console.log(people_country)