const sayHello = () => {
    console.log('Hello World!');
}

function sayHello_1() {
    console.log('Hello World!');
}

sayHello();
sayHello_1();

const greetPerson = (person_name) => {
    let greeting = 'Hello ' + person_name
    //let greeting_msg = `Hello ${person_name}`;
    console.log(greeting);
}

greetPerson("John Doe");

const get_full_name = (first_name, last_name) => {
    let full_name = `${first_name} ${last_name}`
    return full_name
}

const full_name = get_full_name("James", "Smith")
console.log(`The full name is: ${full_name}`)

const calculate_taxed_salary =(salary, tax=10)=> {
    let taxed_salary = salary - (salary * (tax/100))
    return taxed_salary
}

const taxed_salary = calculate_taxed_salary(salary=300000, tax=23)
console.log(`Taxed salary: ${taxed_salary}`)