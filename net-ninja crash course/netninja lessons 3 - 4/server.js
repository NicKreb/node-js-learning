const http = require('http');
const fs= require('fs');
const _=require('lodash');

// //this const server serves as a function to create the server for the browser
// //utilizing the createServer() method that exists within node.js

// //it then uses the arguments for a request(req) and response(res).
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);


//     //the Header helps decide what content is being used. And this is easier if we attach: 'Content-Type'
//     //value, plus the type of content. In this case 'text/plain' so that it appears as something akin to a text file.
//     //set header content type
//     res.setHeader('Content-Type', 'text/plain');

//     //next we use the .write() method within node which,
//     //writes the content sent to browser
//     res.write('hello, ninjas');

//     //and .end(), which ends the responds and sends it all to browser
//     res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000')
// });



// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     //changing this to text/html now changes the output to utilize html syntax in it's response
//     res.setHeader('Content-Type', 'text/html');

//     res.write('<head><link rel="stylesheet" href="#"></head>') //doing this, replaces the head element that is automatically created in the html write function.
//     //so instead of the above txt version, this requires elements like below
//     res.write('<p>hello, ninjas</p>');
//     //and doing something like this how you would introduce a second line of code.
//     res.write('<p>hello again, ninjas</p>');

//     res.end();
// });


//------------- returning html pages ---------------

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     res.setHeader('Content-Type', 'text/html');

//     //send an html file
//     //as done in the prev lesson, us fs in a const and then call it with the
//     //.readFile() method, with the path as the first argument, then a callback function with error and data as arguments
//     //and if error, pump to console, then end response. else send the data and end the response to the browser!
//     fs.readFile('./views/index.html', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//            // res.write(data);
//             res.end(data); //if you are using one file, this is a much simpler method for producing the same result as using the .write() method.
//             //using the write() method is really only useful, if this uses MULTIPLE files/responses.
//         }
//     })

// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000')
// });

//--------- basic routing -------------

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     res.setHeader('Content-Type', 'text/html');

//     //so in order to make sure that if someone changes the url to 'localhose.3000' it produces the index.html file
//     //and if it is /about it produces the about.html file. etc..
//     //to do this it's easier to create a variable that accesses the file of the documents
//     let path = './views/'; //like so

//     //then we create a switch function where, depending on what follows the url address, it pumps out the appropriate documents!
//     switch(req.url) {
//         case '/':
//             path += 'index.html';
//             break;
//         case '/about':
//             path += 'about.html';
//             break;
//         default:
//             path += '404.html';
//             break;
//     }

//     fs.readFile(path, (err, data) => { //we then delete the previous path in the first argument, and input the path value as the first argument instead!
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.end(data);        }
//     })

// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000')
// });

//------ status codes and redirects --------

//200 - OK | 301 - Resource moved | 404 - Not Found | 500 - Internal server error
//ranges from 100(info response) - 200(success codes) - 300(codes for redirects) - 400(user or client error codes) - 500(server error codes)

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     res.setHeader('Content-Type', 'text/html');

//     let path = './views/';

//     switch(req.url) {
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/about-me': //here is the redirect. We start with the new case for if the url '/about-me' is added/typed/clicked
//             res.statusCode = 301; //then we send the status code informing the server that this page has been moved.
//             res.setHeader('Location', '/about');//we then change the Header for that to a Location set to the /about page.
//             res.end(); //and lastly we end the response to the browser.
//             break; //this is an effective way to redirect people from the old url to the updated one!
//         default:
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {

//             res.end(data);        }
//     })

// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000')
// });

const server = http.createServer((req, res) => {
    
    //lodash
    const num = _.random(0, 20); //this function uses the random method that exists withinthe lodash library with the two arguments of the starting number and ending number
    console.log(num); //so now everytime the page is loaded, it will output a random number between 0 and 20 in the console!

    //this function called greet(), uses the function method in lodash called .once() and makes it so that, no matter how many times we run the greet() function
    //it only outputs it in the console ONCE. astounding!
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet();

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-blah':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {

            res.end(data);        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

//creating a package.json file is important, for keeping track of directories for the project
//and an easy way to do this, now that we have installed nodemon, is to just put in 'npm init' 
//which will now create a package.json file and package-lock.json file! super fucking neat.

//using the npm install lodash command, will also now create a lodash dependency within the package.json file!

//IF you are sent a project package/zip, or send one to friends/coworkers. Usually it won't in clude the node_modules file!
//this is because this file is absolutely fucking massive.
//the way to work around this, is when you install it just type in 'npm install' on the terminal, and it will look at the 'dependencies' w/in the package.json file
//and install the relevant packages needed to run everything!