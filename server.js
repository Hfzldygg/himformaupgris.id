const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Setup database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'himforma_db'
});

// Connect to database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM Users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    });
});

// Aspirasi endpoint
app.post('/aspirasi', (req, res) => {
    const { user_id, nama, npm, aspirasi } = req.body;
    const query = 'INSERT INTO Aspirasi (user_id, nama, npm, aspirasi) VALUES (?, ?, ?, ?)';
    db.query(query, [user_id, nama, npm, aspirasi], (err, result) => {
        if (err) throw err;
        res.json({ success: true, message: 'Aspirasi submitted successfully' });
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});