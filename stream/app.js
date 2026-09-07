import fs formm 'fs';

const readeStream = fs.createReadStream('input.txt'); 

readeStream.on('data', (chunk) => {
    console.log("Data received: ());
    console.log("data:" , chunk)
})
readStream.on('end', () => {
    console.log("End");
})
readStream.on('error', (err) => {
    console.log("Error", error.meassage)
})

const writeStream = fs.createWriteStream('output.txt');
console.log("Writing data to output.txt");
writeStream.write("hello\n")