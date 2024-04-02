const sayHi = (person_name) => {
    console.log(`Hi ${person_name}`);
}

async function runCode() {
    const greeting = await sayHi("James Doe");
    console.log("Hello World!");
}

runCode();