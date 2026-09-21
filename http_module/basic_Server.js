import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Hello World");
    const order = {
        orderId: 250320310,
        des: "Delhi",
        source: "Mumbai",
        userName: "Rohit",
    };
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Order Details</h1>");
    res.write(`<p>Order ID: ${order.orderId}</p>`); 
    res.write(`<p>Description: ${order.des}</p>`);
    res.write(`<p>Source: ${order.source}</p>`);
    res.write(`<p>User Name: ${order.userName}</p>`);
    res.write(`<p>Order ID: ${order.orderId}</p>`);
    res.end("Welcome from server.");

});

server.listen(3001, "127.0.0.1", () => {
    console.log("Server is running on........");
});