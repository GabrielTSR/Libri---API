/** IMPORTA O PACOTE EXPRESS **/
const express = require('express');

/** INSTANCIA O PACOTE EXPRESS **/
const app = express();

/** IMPORTA A CONTROLLER DE USUÁRIO **/
const usuarioController = require('./controller/UsuarioController');

/** CONFIGURAÇÃO DO EXPRESS PARA MANIPULAÇÃO DO FORMATA JSON **/
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/** CONFIGURA NO EXPRESS A ROTA DE USUÁRIO **/
app.use('/', usuarioController);

/** IMPORTA OS ARQUIVOS DE MODEL **/
//const usuario = require('./model/Usuario');

/** SERVIDOR AUTO-CONTIDO DO EXPRESS 
    RECEBE AS REQUISIÇÕES E DEVOLVE AS RESPOSTAS

    PARAMENTRO DE listen:
    1 - PORTA LÓGICA
    2 - CALLBACK
 * **/
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO NA URL: http://localhost:3000');

});