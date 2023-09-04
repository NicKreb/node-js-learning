// console.log('process.platform');

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('yum 🍣 ')
// })

// eventEmitter.emit('lunch');

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

// // const txt = readFileSync('./hello.txt', 'utf8');
// // console.log(txt);

// console.log('do this ASAP');

// const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }
//----------------------------------------------------------------------
// a module is a js file that exports its code., traditional way to implement is require(). Es modules use import/export

//-----------------------------------------------------------------------
// const { readFile, readFileSync } = require('fs');

// const myModule = require('./my-module');

// console.log(myModule);

// const express = require('express');

// const app = express();
// app.get('/foo/bar', (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {

//         if (err) {
//             response.status(500).send('sorry, out of order')
//         }

//         response.send(html);
//     })
// });

// app.listen(process.env.PORT || 5501, () => console.log('App available on http://localhose:5501'))
//request - users incoming data, response - your outgoing data

//-------------------------------------------

// const { readFile } = require('fs').promises;

// appendFile.get('/', async ( request, response) => {
//     response.send(await readFile('./home.html', 'utf8') );
// });

//Total time spent learning: 2 hrs
