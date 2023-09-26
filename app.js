// app.js
const express = require('express');
const app = express();
const mysql = require('mysql2');

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '',  
  database: 'dc' 
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.listen(5000, () => console.log('Server started on port 3306'));
