const person = {
    "first_name": "John",
    "last_name": "Smith",
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "is_employed": true,
    "profession": "Software Engineer",
    "get_full_name": function(){ 
        return `${this.first_name} ${this.last_name}`
    },
    "get_address": function() { return `${this.city} ${this.state} ${this.country}` },
}

// Silcon Valley
// Nanjing University of Aeronautics and Astronautics
// Adding an atribute to an object
person.gender = "Male";
person["employer"] = "Palo Alto";

// Accessing object properties/attribute 
//1. Using the dot notation
const first_name = person.first_name
//2. Using the square brackets notation
const last_name = person["last_name"]

const full_name = person.get_full_name()
console.log(full_name)

console.log(person)

console.log(person.get_address())

