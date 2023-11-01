const express = require('express');

const routes = express();

routes.post('/register', (req, res) => {
    res.json({ mensagem: "teste" })
});

module.exports = routes