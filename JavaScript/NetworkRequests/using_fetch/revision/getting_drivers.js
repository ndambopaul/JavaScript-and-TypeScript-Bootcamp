const BASE_URL = 'http://localhost:8000'

//  Resource /drivers

const get_drivers = async() => {
    let response = await fetch(`${BASE_URL}/drivers`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        let drivers = await response.json();
        console.log(drivers)
    }
}

get_drivers()