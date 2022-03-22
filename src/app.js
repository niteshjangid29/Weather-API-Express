/*const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//  public static path
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

// app.get(route, callback)
// routing
app.get('/', (req, res) => {
    res.send("Hello Worlds");
})

app.get('/about', (req, res) => {
    res.send("Hello World About");
})

app.get('/weather', (req, res) => {
    res.send("Hello World Weather");
})

app.get('*', (req, res) => {
    res.send("404 error page OOPS!");
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})*/



const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//  public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// app.get(route, callback)
// routing
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.render('404error', {
        errorMsg: 'OOPS! Page Not Found'
    });
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})