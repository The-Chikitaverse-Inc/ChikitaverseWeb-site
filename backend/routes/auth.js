//! Depedencias
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

//! Importante
const app = express()
const PORT = 1995
const users = require('../user')
const db = require('../database/db')

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        title: 'Chikitaverse',
        url: 'https://chikitaverse.com/',
        company: 'The Chikitaverse Inc.'
    })
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await db('users').where({ username }).first();
  if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

  const senhaCorreta = await bcrypt.compare(password, user.password);
  if (!senhaCorreta) return res.status(401).json({ error: 'Senha incorreta' });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRETJWT, {
    expiresIn: '1h'
  });

  res.json({ token });
});


  app.post('/cadastro', async (req, res) => {
    const { username, password } = req.body;
  
    const existente = await db('users').where({ username }).first();
    if (existente) return res.status(400).json({ error: 'Usuário já existe' });
  
    const hash = await bcrypt.hash(password, 10);
    const [id] = await db('users').insert({ username, password: hash });
  
    res.status(201).json({ msg: 'Usuário criado', id });
  });
  


  //* Middleware de autenticação
  function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.SECRETJWT, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
  

app.delete('/excluir', autenticarToken, async (req, res) => {
  const { id } = req.user;

  try {
    const deletado = await db('users').where({ id }).del();

    if (deletado) {
      res.json({ msg: 'Usuário excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
});


app.listen(PORT, () => {
    console.log(`A API esta em http://localhost:${PORT}/`)
})