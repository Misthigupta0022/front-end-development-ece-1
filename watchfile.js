const fs = require('fs');
const watcher = fs.watchFile("intro.txt", (curr, prev) => {
    console.log("Current:", curr.birthtime.toISOString());
    console.log("Previous:", prev.birthtime.toISOString());
});