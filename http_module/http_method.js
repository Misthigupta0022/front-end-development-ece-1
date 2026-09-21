import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

    if (req.url === '/config.json') {

        fs.readFile('./config.json', 'utf8', (err, data) => {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading config file');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });

    } else {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Server');
    }

});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:3000');
});