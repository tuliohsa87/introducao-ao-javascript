var listaTarefas = [];
var form = document.getElementById('formulario');
var texto = document.getElementById('texto');

form.addEventListener('submit', function(e){

    document.getElementById('texto').innerText = '';

    criarElemento();

    // impede o envio do formulario
    e.preventDefault();
});


function criarElemento(){
    // pega o texto da tarefa
    var tarefa = texto.value;

    if(tarefa.length < 3){
        alert("Você deve informa pelo ao menos 2 caracteres")
    } else {
        // insere a tarefa no array
        listaTarefas.push(tarefa);

        // pega o tamanho do array para criar um indice
        var indice = listaTarefas.length;

        var checkbox = document.createElement('input');
        var label = document.createElement('label');
        var br = document.createElement('br');
        
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", indice );

        label.setAttribute('for', indice)
        label.innerHTML = tarefa;

        document.getElementById('lista').appendChild(checkbox);
        document.getElementById('lista').appendChild(label);
        document.getElementById('lista').appendChild(br);

        document.getElementById('texto').value = '';

    }

}
