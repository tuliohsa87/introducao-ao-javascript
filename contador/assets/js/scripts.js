// Contador
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}

// Contador Um
var currentNumberWrapperUm = document.getElementById("currentNumberUm");
var currentNumberUm = 0;

document.getElementById("adicionarUm").addEventListener("click", function(){
    currentNumberUm = currentNumberUm + 1;
    currentNumberWrapperUm.innerHTML = currentNumberUm
});

document.getElementById("subtrairUm").addEventListener("click", function(){
    currentNumberUm = currentNumberUm - 1;
    currentNumberWrapperUm.innerHTML = currentNumberUm
});

// Contador Dois
var currentNumberWrapperDois = document.getElementById("currentNumberDois");
var currentNumberDois = 0;

function habilitarBotao(botao){
    var button = document.getElementById(botao);
    button.disabled = false;
    button.style.backgroundColor = 'rgb(' + 241 + ',' + 214 + ','+ 214 +')';
    button.style.border = '2px solid lightcoral';
}

function desabilitarBotao(botao){
    var button = document.getElementById(botao);
    button.disabled = true;
    button.style.backgroundColor = 'Wheat';
    button.style.border = 'NavajoWhite';
}

document.getElementById("adicionarDois").addEventListener("click", function(){
    var count  = parseInt(document.getElementById("currentNumberDois").innerHTML);

    if(count  == 10) {
        desabilitarBotao('adicionarDois');
    } else {
        habilitarBotao('subtrairDois');
        currentNumberDois = currentNumberDois + 1;
        currentNumberWrapperDois.innerHTML = currentNumberDois;
    }
});

document.getElementById("subtrairDois").addEventListener("click", function(){
    var count  = parseInt(document.getElementById("currentNumberDois").innerHTML);

    if(count  <= 0) {
        desabilitarBotao('subtrairDois');
    } else {
        habilitarBotao('adicionarDois');
        currentNumberDois = currentNumberDois - 1;
        currentNumberWrapperDois.innerHTML = currentNumberDois;
    }
    
});

// Contador Três
var currentNumberWrapperTres = document.getElementById("currentNumberTres");
var currentNumberTres = 0;

document.getElementById("adicionarTres").addEventListener("click", function(){
    var count  = parseInt(document.getElementById("currentNumberTres").innerHTML);
    var number =  document.getElementById('currentNumberTres');

    if(count >= 0){
        number.style.color = 'black';
    } else {
        number.style.color = 'red';
    }
    currentNumberTres = currentNumberTres + 1;
    currentNumberWrapperTres.innerHTML = currentNumberTres;
    
});

document.getElementById("subtrairTres").addEventListener("click", function(){
    var count  = parseInt(document.getElementById("currentNumberTres").innerHTML);
    var number =  document.getElementById('currentNumberTres');

    if(count <= 0){
        number.style.color = 'red';
    } else {
        number.style.color = 'black';
    }
    currentNumberTres = currentNumberTres - 1;
    currentNumberWrapperTres.innerHTML = currentNumberTres;
    
    
});