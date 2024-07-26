// Cria servidor e Inicia

const express = require('express');

const app = express()

app.listen(8000,() => {
    console.log('Servidor Live!')
});

// Cria rota de teste para API

app.get('/',function(req,res){

    res.send({
        sucess:'servidor live!'
    })

});
