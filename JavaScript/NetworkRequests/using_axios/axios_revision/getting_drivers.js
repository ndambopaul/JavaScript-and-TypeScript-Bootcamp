const BASE_URL = 'http://localhost:8000'


const getDrivers = async() => {
    try {
        let response = await axios.get(`${BASE_URL}/drivers`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ''
            }
        });
        console.log(response);
    }catch (error) {
        console.error(error);
    }

}

getDrivers()