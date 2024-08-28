// Cria servidor Local utilizando biblioteca Express do Node
// Posteriormente atualizar com biblioteca HTTP para deploy

const express = require('express');
const cors = require('cors')
const app = express();

app.listen(8000, ()=> {
    console.log('Servidor Express Live! http://localhost:8000/')
});

app.use(cors({
    origin: "http://127.0.0.1:5500"
}))

// Cria conexão com Banco de Dados do RailWay

const mysql = require('mysql2/promise');

const DBcon = mysql.createPool('mysql://root:otJKDeDzWueXZjjjxsKNYaEcnyUCcFvE@junction.proxy.rlwy.net:58360/railway')

// Routes :::

app.get('/', async function(req, res){

    let [query] = await DBcon.execute('SELECT * FROM tbl_TaskManager');

    res.send(query);
})

app.post('/', async function(req, res){
    
    let [query] = await DBcon.execute(`INSERT INTO tbl_TaskManager(task_check, task_description, task_vecto)
        VALUES ('0','Teste','2024-12-03')`)
        //TESTING WITH VALUES FIXEDS

    res.send(query);
})