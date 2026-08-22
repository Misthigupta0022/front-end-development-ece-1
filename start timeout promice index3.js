console.log("Start");

setTimeout(() => {
    console.log("Hello World");

    Promise.resolve().then(() => {
        console.log("Promise");
    });

}, 2000);