// events_sample.js

// Load the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a custom event called 'greet'
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Define another custom event called 'farewell'
myEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}!`);
});

// Emit the 'greet' event and pass a name as an argument
myEmitter.emit('greet', 'Alice');

// Emit the 'farewell' event and pass a name as an argument
myEmitter.emit('farewell', 'Bob');

// Emit the 'greet' event again with a different name
myEmitter.emit('greet', 'Charlie');

// Emit the 'farewell' event again with a different name
myEmitter.emit('farewell', 'Diana');
