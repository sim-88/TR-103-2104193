# MERN Stack Training - Day 1

## Topics Discussed

### 1. Framework, Database, Programming Language (Business Logic)
- **Framework**: Provides a structured foundation for building applications. Common MERN frameworks include Express for Node.js.
- **Database**: Stores and retrieves data. MERN stack typically uses MongoDB, a NoSQL database.
- **Programming Language (Business Logic)**: JavaScript is used across the stack (client-side, server-side, and database queries) to implement the business logic.

### 2. V8 of Chrome
- **V8 Engine**: Google’s open-source JavaScript engine, written in C++.
- **Node.js**: Utilizes V8 to execute JavaScript code outside the browser, enabling server-side scripting.

### 3. What is Node, Why Node?
- **Node.js**: A runtime environment that allows the execution of JavaScript on the server side.
- **Why Node.js?**: Non-blocking, asynchronous nature makes it ideal for I/O-heavy applications like real-time chat and data streaming services.

### 4. Important Limitations of Node.js
- **Single-Threaded**: Uses a single thread with event looping; can struggle with CPU-intensive tasks - Image Processing.
- **Dependencies**: Relies heavily on third-party modules, which can introduce security risks.
- **Callback Hell**: Complex nested callbacks can make the code hard to read and maintain.

### 5. Database Differences
- **SQL Databases**: 
  - **Vertical Expansion**: Scale up by increasing the resources of a single server.
  - **Async**: Support for asynchronous operations.
  - **Example**: Bank Transactions - strong ACID properties ensure consistency and reliability.
- **NoSQL Databases**: 
  - **Horizontal Expansion**: Scale out by adding more servers.
  - **Fast Retrieval**: Optimized for simultaneous and quick data access.
  - **Example**: Chat Application - handles large volumes of real-time data efficiently.

### 6. File-based System in NoSQL
- **NoSQL**: Designed for high-speed data retrieval and scalability.
- **Media Storage**: Store images and videos using file storage services instead of directly in the database to optimize performance.

### 7. Sync and Async Concepts of JavaScript
- **Synchronous**: Operations are executed sequentially; each operation waits for the previous one to complete.
- **Asynchronous**: Operations can be executed concurrently, using callbacks, promises, or async/await to handle results without blocking the main thread.

### 8. What is a Server?
- A server is a computer system or software application that provides services to other computer programs (clients) over a network.

### 9. Choosing Suitable and Stable Database
- **Considerations**:
  - **Load Balancing**: Distributing workloads across multiple resources to ensure reliability and performance.
  - **Performance**: Speed and efficiency in handling data.
  - **Memory**: Optimal use of memory resources for data storage and retrieval.

### 10. Polling Concept Implemented in Server
- **Polling**: Regularly checks the server for updates. Commonly used in scenarios like real-time messaging applications.
- **Event Listening**: Servers can listen for specific events and react accordingly, such as new messages or data updates.

### 11. SQL, MongoDB, SQLite Basic Intro
- **SQL**: 
  - **Structured Query Language** used for managing and querying relational databases.
  - Examples include MySQL, PostgreSQL.
- **MongoDB**: 
  - A NoSQL database that uses a flexible, JSON-like document structure.
  - Great for unstructured data and scalability.
- **SQLite**: 
  - A lightweight, file-based SQL database.
  - Ideal for small applications, mobile apps, and development environments.

### 12. Case Study: NoSQL DB Used in IoT
- **Scenario**: Turning a smart switch on/off using a mobile app.
  - **Database**: NoSQL database used for fast and scalable data handling.
  - **Process**: The mobile app interacts with the server, which updates the database to reflect the switch’s status. The server then sends a command to the IoT device to perform the action.

### 13. CDN (Content Delivery Network)
- **CDN**: A network of servers distributed globally to deliver content quickly to users based on their geographic location.
- **Benefits**: 
  - **Reduced Latency**: Faster content delivery.
  - **Load Balancing**: Distributes traffic to prevent server overload.
  - **Improved Performance**: Enhances user experience by reducing load times.

---

That concludes the diary entry for Day 1 of the MERN stack training.
