const fs = require('fs');

fs.writeFile("notes.txt", "ECE-A", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Data successfully written in notes.txt");

    fs.readFile("notes.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Data inside file:", data);
    });
});