const express = require('express');
const https = require('https');
const app = express(https);
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const crypto = require('crypto');
const favicon = require('serve-favicon');
const path = require('path');
const fs = require('fs')

// DB Config
const db = require('./config/keys').MongoURI;


// Connect to MongoDB
// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));


// Favicon
// app.use(favicon(path.join(__dirname, 'public', 'logo.png')))

// Middleware
app.use(bodyParser.json());

// Static
app.use(express.static('public'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Express Session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 180 * 60 * 1000 }
}));

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.session = req.session;
    res.locals.user = req.user || null

    next();
});




// Routes

app.use('/', require('./routes/index'));
// app.use('/user', require('./routes/user'));


// 404 Page
app.use(async function (req, res) {
    res.status(400);
    res.render('404', { title: '404: File Not Found' });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on ${PORT}`))