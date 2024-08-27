window.onload = function(){
    document.querySelector('.newTask').classList.add('hidden');
}


function newTask() {

    document.querySelector('.newTask').classList.remove('hidden');

}

function cancelTask() {

    document.querySelector('.newTask').classList.add('hidden');

}
