const http = require("http");

const routes = {
    GET: (req, res) => {
        res.end("GET request");
    },
    POST: (req, res) => {
        res.end("POST request");
    },
    PUT: (req, res) => {
        res.end("PUT request");
    },
    PATCH: (req, res) => {
        res.end("PATCH request");
    },
    DELETE: (req, res) => {
        res.end("DELETE request");
    }
};

const server = http.createServer((req, res) => {
    const handler = routes[req.method];
    if (handler) {
        handler(req, res);
    } else {
        res.statusCode = 405;
        res.end("Method Not Allowed");
    }
});

server.listen(3000, () => console.log("Server running on 3000"));