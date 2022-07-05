// modulo express
const express = require('express');
// objeto app com as funcionalidades do express
const app = express();
const path = require('path')
let port = 3000;

// routes pages
let routes_module_pages = require('./routes_pages.js')
app.use('/', routes_module_pages);

// array
var linguagens = ['Java', 'C', 'JavaScript'];

// método get
app.get('/linguagens/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    return res.json([linguagens[id]])
});

// método post e json resposta
app.post('/linguagens', (req, res) => {
    res.status(200).json({usuario: "rafael", id: 12});
});

// expressão regular
app.get('/usuarios/:userID([0-9]{6})', function(req, res) {
    res.send('Usuário ID: ' + req.params.userID);
});


app.get('*', (req, res) => {
    // resposta método send
    res.send("<h3> Link inválido: 404 </h3>");
});

app.listen(port, () => console.log(`Escutando na porta ${port}`));
