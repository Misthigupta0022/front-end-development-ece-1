console.log("hello world");

// JS Runtime Environment
// Node.js is a JavaScript runtime environment that allows
// JavaScript code to run outside a web browser.


// ==================== SYNCHRONOUS ====================

for (let i = 1; i <= 10; i++) {
    console.log(`${i}`);
}


// ==================== ASYNCHRONOUS ====================

setTimeout(() => {
    console.log("Hello World");
}, 1000);


// ==================== SET TIMEOUT ====================

setTimeout(() => {
    console.log("Settimeout");
}, 2000);


// ==================== EXECUTION ORDER ====================

console.log("Synchronous code");

Promise.resolve().then(() => {
    console.log("Microtask queue");
});

setTimeout(() => {
    console.log("Macrotask queue");
}, 2000);


// ==================== AREA FUNCTION ====================

const area = (a, b) => {
    return a * b;
};

console.log("Area:", area(5, 10));


// ==================== PERIMETER FUNCTION ====================

const perimeter = (a, b) => {
    return 2 * (a + b);
};

console.log("Perimeter:", perimeter(5, 10));


// ================== HELLO WORLD USING FUNCTION ====================

function hello() {
    console.log("Hello World");
}

hello();


// ==================== HELLO WORLD USING ARROW FUNCTION ====================

const helloArrow = () => {
    console.log("Hello World");
};

helloArrow();



