'use strict' //forca o javascript ser mais criterioso, para falhar compilacao

//busca bibliotecas da pasta node_modules
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');


const app = express(); //Cria aplicacao
const port = 3000; //Define porta da aplicacao
app.set('port', port);

const server = http.createServer(app); //Cria server
const router = express.Router(); // criar um router

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node store api",
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port);
console.log('Api rodando na porta ' + port);
