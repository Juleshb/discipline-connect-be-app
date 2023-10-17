const express = require('express');
const router = express.Router();
const db = require('../db');  


router.use(express.json());

router.get('/', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'Server error' });
      } else {
        res.json(results);
      }
    });
  });


router.post('/', (req, res) => {
  const { username, email, password, role } = req.body;
  const query = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
  db.query(query, [username, email, password, role], (err, results) => {
    if (err) {
      console.error('Error inserting a new user:', err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json({ message: 'User added successfully', userId: results.insertId });
    }
  });
});


router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email, password, role } = req.body;
  const query = 'UPDATE users SET username = ?, email = ?, password = ?, role = ? WHERE id = ?';
  db.query(query, [username, email, password, role, userId], (err, results) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json({ message: 'User updated successfully' });
    }
  });
});


router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json({ message: 'User deleted successfully' });
    }
  });
});

module.exports = router;
