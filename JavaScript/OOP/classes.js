// classes -> a class is a blueprint for creating objects
class User {
    constructor(name, email, phone_number) {

        // attributes
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
    };
    
    // a method 
    login() {
        console.log(`${this.name} has logged in`);
    }
}

// objects -> is an instance of a class
// an object/an instance of a classs
const user = new User("James Doe", "james@example.com", "+254734567888");


console.log(user.name)
console.log(user["email"])
user.login();







// methods -> we use methods to introduce behavior
// properties/attributes/characteristics 

