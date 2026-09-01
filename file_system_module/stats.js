const fs = require("fs")
fs.stat("notes.txt", (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }   
    console.log("Information about [notes.txt]", stats)
    console.log("size of the file [notes.txt]", stats.size, "Bytes")
    console.log("creation time of the file  [notes.txt]", stats.birthtime.toISOString)
})