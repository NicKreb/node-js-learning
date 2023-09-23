const express = require('express');
const morgan = require('morgan');

//in order to use nodemon with this. You need to use the command 'npx nodemon app.js'

//express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://<KrebBlogger69>:<Osias_ess7>@nickrebcluster.a1xqyxk.mongodb.net/?retryWrites=true&w=majority';

//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// })

app.get('/', (req, res) => {  
//    res.send('<p>Home Page</p>');
//res.sendFile('./views/index.html', { root: __dirname }); //using root: __dirname allows the path string to function as a relative path and easy access for express!
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];
    res.render('index', {title: 'Home', blogs }); //the second arg is how you can import dynamic code in to the ejs file without typing it all out in the file
})

app.get('/about', (req, res) => {  
//   res.send('<p>About Page</p>');
//res.sendFile('./views/about.html', { root: __dirname });
res.render('about', {title: 'About' });
})

//redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create new blog' });
})

// 404 page
app.use((req, res) => {
//    res.status(404).sendFile('./views/404.html', {root: __dirname});
res.status(404).render('404', {title: '404' });
})