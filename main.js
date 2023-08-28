
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Hello, Node.js!");
    console.log("Hello, jenkins!");


});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});