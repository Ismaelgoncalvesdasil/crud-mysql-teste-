const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configuração de conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_db'
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});

// Adicionar novo item
app.post('/api/items', (req, res) => {
  const item = req.body;
  connection.query('INSERT INTO items SET ?', item, (err, result) => {
    if (err) throw err;
    res.send('Item adicionado com sucesso');
  });
});

// Obter todos os itens
app.get('/api/items', (req, res) => {
  connection.query('SELECT * FROM items', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Obter um item específico
app.get('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  connection.query('SELECT * FROM items WHERE id = ?', itemId, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Atualizar item
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  const item = req.body;
  connection.query('UPDATE items SET ? WHERE id = ?', [item, itemId], (err, result) => {
    if (err) throw err;
    res.send('Item atualizado com sucesso');
  });
});

// Excluir item
app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  connection.query('DELETE FROM items WHERE id = ?', itemId, (err, result) => {
    if (err) throw err;
    res.send('Item excluído com sucesso');
  });
});
// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
