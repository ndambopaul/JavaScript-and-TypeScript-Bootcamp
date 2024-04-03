//const BASE_URL = 'http://localhost:8000'

const create_driver = async(driver) => {
    let response = axios.post(`${BASE_URL}/drivers/`, {
        name: driver.name,
        phone_number: driver.phone_number,
        email: driver.email,
        town: driver.town,
        country: driver.country
    });

    console.log(response.data, response.status, response.statusText);
}

const driver = {
    "name": "New Driver Updated",
    "phone_number": "07234567812",
    "email": "driver@gmail.com",
    "town": "Nairobi",
    "country": "Kenya",
}

create_driver(driver);