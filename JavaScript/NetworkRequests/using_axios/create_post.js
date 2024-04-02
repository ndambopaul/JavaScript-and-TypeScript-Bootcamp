async function postData() {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

postData();
