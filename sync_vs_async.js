console.log("====== Synchronous start ======");

for(let i=1; i<=10; i++){
    console.log(`${i}`)
}

console.log("====== Synchronous end ======");

console.log("====== Asynchronous Start ======");

setTimeout(() => {
    console.log("Hello World");
}, 1000);

console.log("====== Asynchronous end ======");