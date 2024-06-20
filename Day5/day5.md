# Day 5: MERN Stack Training Diary

## Topics Discussed:

### 1. Creating a Server Using HTTP in NodeJS

#### Code Snippet:
```javascript
const http = require('http');
const fs = require('fs');

// Create a server object:
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url}:New Req Rec \n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("This is a HomePage");
                break;
            case '/about':
                res.end("I am a student studying in B.Tech CSE 4th year");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => {
    console.log("Server Started on port 8000");
});
```

#### Important Points:
- **HTTP Module**: `http.createServer` is used to create a server.
- **Request Handling**: Handles different URLs (`/`, `/about`) and responds accordingly.
- **Logging**: Logs each request to a `log.txt` file using `fs.appendFile`.
- **Port**: The server listens on port 8000.

#### Practicality:
This example illustrates how to set up a basic HTTP server with Node.js and handle simple routing and logging. It provides a foundation for understanding more complex server-side applications.

### 2. Creating a Server in Express JS

#### Code Snippet:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is an Express App');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

#### Important Points:
- **Express Framework**: Simplifies server creation and routing.
- **Route Handling**: Uses `app.get` to handle GET requests for the root URL.
- **Port**: The server listens on port 3000.

#### Practicality:
Express provides a more streamlined and powerful way to create servers compared to the built-in HTTP module, making it a preferred choice for many developers for building web applications.

### 3. Which Server is Widely Used?

#### Important Points:
- **Express.js** is more widely used than the built-in HTTP server in Node.js due to its simplicity, flexibility, and extensive middleware support.
- **Community Support**: Express has a large community and a wealth of plugins and middleware, which enhances its functionality.
- **Ease of Use**: Express abstracts much of the complexity involved in creating servers, making it easier and quicker to develop robust applications.

### 4. Blocking and Non-Blocking Operations in NodeJS

#### Important Points:
- **Blocking (Synchronous)**: Operations that block the execution of other code until they complete. Examples include reading a file synchronously.
- **Non-Blocking (Asynchronous)**: Operations that do not block the execution of other code. Examples include reading a file asynchronously.
- **Event Loop**: Node.js uses an event-driven architecture and a non-blocking event loop to handle multiple operations concurrently.
- **Thread Pool**: Node.js uses a thread pool for handling expensive operations like file system operations.

#### Practicality:
Understanding the difference between blocking and non-blocking operations is crucial for writing efficient Node.js applications. The event loop allows Node.js to handle many operations concurrently without creating multiple threads.

### 5. `fs` Module: Read, Write, Append, Stat, Copy with Code Examples

#### Code Examples:
```javascript
const fs = require('fs');

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Writing to a file
fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('File has been written');
});

// Appending to a file
fs.appendFile('example.txt', '\nAppending some text.', (err) => {
    if (err) throw err;
    console.log('Text has been appended');
});

// Getting file stats
fs.stat('example.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats);
});

// Copying a file
fs.copyFile('example.txt', 'example_copy.txt', (err) => {
    if (err) throw err;
    console.log('File has been copied');
});
```

#### Important Points:
- **Read**: `fs.readFile` reads the content of a file asynchronously.
- **Write**: `fs.writeFile` writes data to a file, creating it if it doesn't exist.
- **Append**: `fs.appendFile` adds data to the end of a file.
- **Stat**: `fs.stat` retrieves file statistics.
- **Copy**: `fs.copyFile` copies a file to a new location.

#### Practicality:
The `fs` module is essential for interacting with the file system in Node.js applications. These operations are fundamental for tasks like reading configuration files, logging, and data storage.