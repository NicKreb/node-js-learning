const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt'); //telling node where to read the data

// //readStream is an event listener, reading a 'data' event! 
// readStream.on('data', (chunk) => {
//     console.log('------NEW CHUNK------');
//     console.log(chunk);
// })

// //this will output the data chunks and after every chunk of data [which is already a value for node] it outputs ---- new chunk----
// //and the buffer data of that chunk!

// const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
// //by adding { encoding: 'utf8' } we allow node to configure the code in to a string automatically!
// const writeStream = fs.createWriteStream('./docs/blog4.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//     console.log('------NEW CHUNK------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n'); //writes NEW CHUNK after each chunk in to the uncreated document
//     writeStream.write(chunk); //writes a whole new file with the chunk of data from readStream!
// });

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
//by adding { encoding: 'utf8' } we allow node to configure the code in to a string automatically!
const writeStream = fs.createWriteStream('./docs/blog4.txt', { encoding: 'utf8' });

readStream.pipe(writeStream); //does the exact same thing as encoded above! but with much shorter text!