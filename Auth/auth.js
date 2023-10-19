const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const connection = require('./db');

const saltRounds = 10;


router.post('/register', async (req, res) => {
  const { name, password } = req.body;
  const insertQuery = 'INSERT INTO users (name, password) VALUES (?, ?)';
  connection.query(insertQuery, [name, password], (err, results) => {
    if (err) {
      console.error(err);
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(400).json({ message: 'name already exists' });
      } else {
        res.status(500).json({ message: 'An error occurred' });
      }
    } else {
      res.json({ message: 'Registration successful' });
    }
  });
});

router.post('/login', async (req, res) => {
  const {name, password } = req.body;
  console.log(name,password)
  const query = 'SELECT * FROM users WHERE name = ? AND password = ?';

  connection.query(query,[name,password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ message: 'An error occurred' });
    } else {
      console.log('Query results:', results);
      if (results.length > 0) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  });

});

router.post('/delete', async (req, res) => {
  const { name, password } = req.body;
  const query = 'DELETE FROM users WHERE name = ? AND password = ?';

  connection.query(query, [name, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ message: 'An error occurred while deleting the user' });
    } else {
      console.log('Query results:', results);
      if (results.affectedRows > 0) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(401).json({ message: 'Invalid credentials or user not found' });
      }
    }
  });
});


router.post('/resetpassword', async (req, res) => {
  const { name, password } = req.body;
  const query = 'UPDATE users SET password = ? WHERE name = ?';

  connection.query(query, [password, name], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ message: 'An error occurred while resetting the password' });
    } else {
      console.log('Query results:', results);
      if (results.affectedRows > 0) {
        res.json({ message: 'Password reset successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials or user not found' });
      }
    }
  });
});


module.exports = router;
 