const express = require('express');
const app = express();
const port = 3002;
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('./database');
const session = require("express-session");


const server = app.listen(process.env.PORT || port,()=>console.log("Server listening on port: "+port));

app.set("view engine","pug");
app.set("views","views");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "Potato chips",
    resave: true,
    saveUninitialized: false
}))

//Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const logoutRoute = require('./routes/logoutRoutes');
const postRoute = require('./routes/postRoutes');
const profileRoute = require('./routes/profileRoutes');

//API routes
const postsApiRoute = require("./routes/api/posts");

app.use("/login",loginRoute);
app.use("/register",registerRoute);
app.use("/posts", middleware.requireLogin, postRoute);
app.use("/logout",logoutRoute);
app.use("/api/posts",postsApiRoute);
app.use("/profile", middleware.requireLogin, profileRoute);

app.get("/",middleware.requireLogin, (req,res,next)=>{
    
    var payload = {
        pageTitle:"Home",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    }
    
    res.status(200).render("home",payload);
})