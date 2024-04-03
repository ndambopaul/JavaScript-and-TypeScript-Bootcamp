const BASE_URL = 'http://localhost:8000'

const updateDriver = async(id, newData) => {
    let response = await fetch(`${BASE_URL}/drivers/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json', 
        },
        body: JSON.stringify(newData)
    });

    console.log(response.status);
}

var driver = {
    "name":"Elvis",
    "phone_number":"07888888888",
    "email":"elvis@example.com",
    "town":"Langata",
    "country": "Kenya"
}

updateDriver(2, driver);