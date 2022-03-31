/** IMPORTA O MÓDULO DO SEQUELIZE **/
const sequelize = require('sequelize');

/** IMPORTA O ARQUIVO DE CONEXÃO **/
const connection = require('../database/database');

/** 
 CRIA A REPRESENTAÇÃO DA TABELA DE USUÁRIOS
 SEUS CAMPOS, TIPOS E REGRAS.
 PARAMETROS:
 1 - NOME DA TABELA
 2 - ESTRUTURA DOS CAMPOS (NOME DO CAMPO, TIPO E
                           REGRAS). - JSON
 * **/
const Usuario = connection.define('tbl_usuario', {
    cod_usuario: {
        type: sequelize.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize.STRING(500),
        allowNull: false,
    },
    sobrenome: {
        type: sequelize.STRING(500),
        allowNull: false,
    },
    email: {
        type: sequelize.STRING(500),
        allowNull: false,
    },
    foto: {
        type: sequelize.STRING(500),
        allowNull: false,
    },
    login: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    senha: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
});

// Usuario.sync({ force: true });

module.exports = Usuario;