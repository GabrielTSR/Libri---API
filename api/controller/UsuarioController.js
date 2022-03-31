const express = require('express');
const usuario = require('../model/Usuario');

/** CRIA A INSTACIA DE ROTAS **/
const router = express.Router();

/** CRIA AS ROTAS: **/
/** ROTA DE INSERÇÃO 
  
 O router É CAPAZ DE RECEBER REQUISIÇÕES DE VERBOS
 HTTP. 
 PARAMETROS:
 1 - UMA STRING REPRESENTANDO A ROTA.
 2 - UM CALLBACK QUE TRATA A REQUISIÇÃO (req) E
 A RESPOSTA (res)
 * **/
router.post('/usuario/inserirUsuario', (req, res)=>{

    console.log(req.body);

    const { nome, sobrenome, email, foto, login, senha } = req.body;

    usuario.create({
        nome,
        sobrenome,
        email,
        foto,
        login,
        senha
    }).then(
        res.status(200).json({'MSG': 'USUÁRIO INSERIDO COM SUCESSO!'})
    );
});

module.exports = router;