const BASE_URL = "http://localhost:8000";

const getDriver = async(driverId) => {
    let response = await fetch(`${BASE_URL}/drivers/${driverId}/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    let driver = await response.json();
    console.log(driver);
};

getDriver(3)