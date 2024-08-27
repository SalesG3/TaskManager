window.onload = function(){

    // Esconde a tela de criar nova tarefa
    document.querySelector('.newTask').classList.add('hidden');

    //
    collectData()

}

async function collectData(){

    let req = await fetch('http://localhost:8000/').catch(data => {console.log(data)})

}


function newTask() {

    document.querySelector('.newTask').classList.remove('hidden');

}

function cancelTask() {

    document.querySelector('.newTask').classList.add('hidden');

}
