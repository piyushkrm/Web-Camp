const express = require("express");
const path = require("path");
const app = express();
port = 80;

//For serving static files
app.use('/static', express.static('static'))

//set the template engine
app.set('view engine', 'pug')

//set the view directory
app.set('views',  path.join(__dirname, 'views'))

//our pug demo endpoint
app.get("/demo", (req, res)=> {
    res.status(500).render('demo', { title: 'Hey pihu',  message: 'Hello there and thanks for telling me how to use pug!'})
})

//[/staic-->this is url and 'static---> this is folder]

app.get("/", (req, res)=>{
    res.send("This is my first express app")
});

//sending status code--->
app.get("/", (req, res)=>{
    resststus(200).send("This is my first express app")
});

app.get("/about", (req, res)=>{
    res.send("This is my first about page")
});

app.post("/about", (req, res)=>{
    res.send("This is my first about page")
});

app.post("/about", (req, res)=>{
    res.status(404).send("This page is not found")
});

app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});