// axios_sample.js

// we Load the axios package
const axios = require('axios'); 

// we Define a URL to fetch data from
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// we Make a GET request to the URL using axios
axios.get(url)
    .then(response => {
        // Log the status code of the response
        console.log('Status Code:', response.status);

        // Log the data received in the response
        console.log('Response Data:', response.data);
    })
    .catch(error => {
        // Log any error that occurs during the request
        console.log('Error occurred:', error.message);
    });
