const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");

// Load environment variables
dotenv.config({ path: './.env' });

if (!process.env.DATABASE_HOST || !process.env.DATABASE_USER || !process.env.DATABASE_PASS || !process.env.DATABASE) {
    console.error("Missing required environment variables. Please check your .env file.");
    process.exit(1);
}

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log("MySQL connected...");
    }
});
//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// Serving the static files
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Setting the view engine to hbs
app.set('view engine', 'hbs');

// Define the routes
app.use('/', require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

// App listening handling
app.listen(8000, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log("Server is listening on port 8000");
    }
});
