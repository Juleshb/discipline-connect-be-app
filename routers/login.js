const express = require('express');
const router = express.Router();
const db = require('../db'); 


router.post('/', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Server error' });
    } else {
      if (results.length === 1) {
        
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Authentication failed' });
      }
    }
  });
});

module.exports = router;
