import http from 'http';
import fs from 'fs';

const data = fs.readFileSync("config.json",);
http.createServer((req, res) => {
    if(req.url === "/") {       
    res.end("home page");
}
else if(req.url === "/config.json") {
    res.end(JSON.stringify(data));
}
else {
    res.end("404 page not found");
})