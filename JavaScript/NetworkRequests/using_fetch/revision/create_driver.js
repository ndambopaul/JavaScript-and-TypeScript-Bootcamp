const BASE_URL = 'http://localhost:8000'

// Resource: drivers

const create_driver = async(driver) => {
    let response = await fetch(`${BASE_URL}/drivers/`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json' 
        },
        body: JSON.stringify(driver)
    });
};

const driver = {
    'name': "john",
    "phone_number": "07986763733",
    "email": "john@example.com",
    "town":"nairobi",
    "country": "United States",

}

create_driver(driver)


