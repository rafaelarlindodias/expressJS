let express = require('express');
// classe express.Router
let router = express.Router();

const path = require('path')

router.use(express.static(path.join(__dirname+'/sistema')));

// método get, rota home
// router.get('/', (req, res) => {
//     // resposta método send
//     res.sendFile(path.join(__dirname + '/sistema/index.html'));
// });
//
// router.get('/', (req, res) => {
//     // resposta método send
//     res.send("<h3>Você informou o parâmetro " + req.params.p + "</h3>");
// });

// router.get('/user/:u/nome/:n', (req, res) => {
//     // resposta método send
//     res.send("<h3>Você acessou o usuário " + req.params.u + " de nome " + req.params.n + "</h3>");
// });

module.exports = router;
