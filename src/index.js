// Importar as dependências necessárias

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
require('dotenv').config({debug: true}); // Carregar variáveis de ambiente a partir de um arquivo .env
const uri = process.env.CONNECTION_STRING; // Obter a string de conexão do ambiente
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const cors = require("cors");

// Configurar conexão com o MongoDB
mongoose.set("strictQuery", true); // Configurar consultas estritas
mongoose.connect(uri) // Conectar-se ao MongoDB usando a string de conexão
    .then(() => {
        console.log('Connected to MongoDB'); // Exibir mensagem de sucesso
    })
    .catch(() => {
        console.error(`Error connecting to MongoDB`); // Exibir mensagem de erro em caso de falha na conexão
    });

// Configurar middleware CORS para permitir solicitações de diferentes origens
app.use(cors());

// Configurar middleware para análise de JSON no corpo das solicitações
app.use(express.json());

// Configurar middleware para análise de dados codificados no corpo das solicitações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar as rotas da aplicação
app.use(routes);


// Iniciar o servidor e ouvir a porta especificada
app.listen(PORT, () => {
    console.log(`app listen port: ${PORT}`); // Exibir mensagem indicando que o servidor está ouvindo na porta especificada
});
