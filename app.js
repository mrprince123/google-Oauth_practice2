require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", function (req, res) {
    res.render("home");
    res.send("Hello World");
});

app.post("/", function (req, res) {
    console.log("Post is working");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.listen(3000, function () {
    console.log("Server is running on the port 3000");
});
