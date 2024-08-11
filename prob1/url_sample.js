// url_sample.js

// Load the 'url' module
const url = require('url');

// Define a sample URL to parse
const sampleUrl = 'https://example.com:8080/path/name?query=test#hash';

// Parse the URL into an object
const parsedUrl = new url.URL(sampleUrl);
console.log('Original Parsed URL:', parsedUrl);

// Access and log individual parts of the URL
console.log('Protocol:', parsedUrl.protocol);
console.log('Hostname:', parsedUrl.hostname);
console.log('Port:', parsedUrl.port);
console.log('Pathname:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.searchParams);
console.log('Hash:', parsedUrl.hash);

// Modify the URL by changing some components
parsedUrl.protocol = 'http';
parsedUrl.port = '3000';
parsedUrl.pathname = '/newpath';
parsedUrl.searchParams.append('newparam', 'value');

// Log the modified URL components
console.log('Modified Protocol:', parsedUrl.protocol);
console.log('Modified Port:', parsedUrl.port);
console.log('Modified Pathname:', parsedUrl.pathname);
console.log('Modified Query Parameters:', parsedUrl.searchParams);

// Format the URL object back into a string and log it
console.log('Modified URL:', parsedUrl.href);
