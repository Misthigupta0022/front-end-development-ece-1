function sizeChecker(fileName) { 
    const limit = 2*1024*1024; // 2MB in bytes
    const stats = fs.statSync(fileName);
    if (stats.size > limit) {
        console.log(`File size exceeds the limit of 2MB. Current size: ${stats.size} bytes`);
    }
    else {
        console.log("File has been successfully uploaded.");
    }
}
sizeChecker("notes.txt");