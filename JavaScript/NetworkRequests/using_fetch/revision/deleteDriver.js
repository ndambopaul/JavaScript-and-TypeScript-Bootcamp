const BASE_URL = 'http://localhost:8000'

const deleteDriver = async (driverId) => {
    const driver = await fetch(`${BASE_URL}/drivers/${driverId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }

    });
    console.log(driver.status)
}
deleteDriver(3)
