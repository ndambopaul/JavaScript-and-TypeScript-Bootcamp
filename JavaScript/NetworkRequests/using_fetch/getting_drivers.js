const BASE_URL = 'http://localhost:8000'


const getDrivers = async() => {

    let response = await fetch(`${BASE_URL}/drivers/`, {
        method: 'GET',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    let data = await response.json();

    console.log(data)

};

getDrivers();