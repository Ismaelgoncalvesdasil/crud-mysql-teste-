const express = require('express');
const router = express.Router();
const connection = require('./database/connection');

router.get('/items', (req, res) => {
  connection.query('SELECT * FROM items', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/items/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM items WHERE id = ?', [id], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

router.post('/items', (req, res) => {
  const { name} = req.body;
  connection.query('INSERT INTO items (name) VALUES (?)', [name],
   (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

router.put('/items/:id', (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  connection.query('UPDATE items SET name = ? WHERE id = ?', [name,id], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

router.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM items WHERE id = ?', [id], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

module.exports = router;
