const fs = require('fs'); //fs stands for file system!

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     // console.log(data); //outputs <Buffer 68 65 6c 6c 6f 20 6e 69 6e 6a 61 73 21>, buffers is a pkg of data pushed out.
//     console.log(data.toString()); //converts the buffer data to a String!
// }); 
// //readFile() is asyncronus in its functionality and takes a minute to process, but when it does
// //it then initiates the callback function in the second value accessing any errors(err) and the data(data)
// //of the file!

// console.log('last line'); //this will appear before the readFile() due to how long it takes readFile() to appear.

//------------------------

//writing files

// fs.writeFile('./docs/blog1.txt', 'hello world!', () =>{
// console.log('file was written');
// });
// //what writeFile() does is it changes the writing in the targeted filesystem document from its original
// //value, to the one inputed as the second value in the function!
// //i.e > "hello ninjas" on blog1.txt changed to "hello world"

// fs.writeFile('./docs/blog2.txt', 'hello again!', () =>{
//     console.log('file was written');
//     }); //holy shit this creates a whole new file, IF the file it wants to access does not exist!

//writeFile is also asyncronous and thus takes longer to process as above!


//--------------------------

// directories

// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder created');
// })
//  // ok a couple of awesome stuff happened here so lets recap!
//  // mkdir stands for 'make directory' and does exactly as the title suggests.
//  // it takes the path location as the first value, and name you want to give it. and then takes a callback function
//  // that takes the value of an err. if an err happens it then outputs it in console.log();
//  // otherwise, what it did, is create a whole new folder with the desired name!

// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder created');
// })
// //if the file already exists, the err logged is "error file already exists!"

if (!fs.existsSync('./assets')){ //because the if statement says if './assets' does not exist. it now creates the new file, otherwise it does not run the script below!
     fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}
//now with the addition of the else statement what now happens! is if 'assets' folder DOES EXIST it deletes it.
//else, if it DOES NOT exist it creates a new folder named 'assets', absolutely delightful.

//----------------------------------


//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('file deleted!');
    }) //unlink deletes a file.
}

//if the file system of the one inquired exists, it deletes it!