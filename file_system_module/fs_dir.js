const fs = require('fs');

fs.mkdir("./mydir", (err) => {
    if (err) {
        console.log(err);
        return;
    }   
});
console.log("Directory created successfully");