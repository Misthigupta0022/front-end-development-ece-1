const fs = require("fs");

const start = Date.now();

console.log("Program started:", Date.now() - start, "ms");

fs.readFile(__filename, "utf8", (err, data) => {
    console.log(
        "File read completed:",
        Date.now() - start,
        "ms"
    );
});

setImmediate(() => {
    console.log(
        "Set Immediate:",
        Date.now() - start,
        "ms"
    );
});

let count = 0;

const interval = setInterval(() => {
    console.log(
        "Set Interval after 5 ms:",
        Date.now() - start,
        "ms"
    );

    count++;

    if (count === 5) {
        clearInterval(interval);
        console.log("Interval stopped:", Date.now() - start, "ms");
    }
}, 5);

setTimeout(() => {
    console.log(
        "Set Timeout after 10 ms:",
        Date.now() - start,
        "ms"
    );
}, 10);

console.log("18454:", Date.now() - start, "ms");