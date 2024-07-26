// Requisição teste para API

async function Get(){

    let req = await fetch('http://localhost:8000/')
    .then((data) => {
        console.log(data)
    })
    
}