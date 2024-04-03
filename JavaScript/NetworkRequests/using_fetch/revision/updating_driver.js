const BASE_URL = 'http://localhost:8000'

const update_driver = async (driverId, driver) => {
    let request = await fetch(`${BASE_URL}/drivers/${driverId}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(driver)
    });
        console.log(request.status);
}

var driver = {
    "email" : "smith@example.com",
    "phone_number" : "0738294729", 

}
update_driver(2, driver);


