const fs = require('fs');

// Callback based method

// Create a file
fs.writeFile("notes.txt", "ECE-A", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Data successfully written in the file notes.txt");

    // Read the file after writing is complete
    fs.readFile("notes.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(data);
        
        // console.log("Data inside the file:", data);
    });
});
