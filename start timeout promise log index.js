function log(value) {
    console.log(value);
}

console.log("Start");

setTimeout(() => {
    console.log("Hello World");

    Promise.resolve().then(() => {
        console.log("Promise");
        log("find");
    });

}, 2000);