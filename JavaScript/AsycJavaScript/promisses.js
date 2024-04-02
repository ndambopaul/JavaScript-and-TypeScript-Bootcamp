function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request ${location}`);

        if (location === "Google") {
            resolve("Google says hi");
        } else {
            reject("We can only talk to Google");
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra information: ${response}`);
    })
}

makeRequest("Google").then(response => {
    console.log("Response received");
    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => {
    console.log(err);
});