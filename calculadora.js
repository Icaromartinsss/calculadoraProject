
function digitar(caractere) {
    
    let visor = document.getElementById("visor");

   
    if (isNaN(caractere) && visor.value == "0") {
       
        return; 
    }

    
    if (visor.value == "0") {
       
        visor.value = caractere;
    } else {
       
        visor.value = visor.value + caractere;
    }
}


function limpar() {
    
    document.getElementById("visor").value = "0";
}

// Função que processa toda a expressão matemática (botão =)
function calcular() {
    
    let visor = document.getElementById("visor");
    
   
    let resultado = eval(visor.value);
   
      
    visor.value = resultado;
}

function apagar() {
    
    let visor = document.getElementById("visor");

    visor.value = visor.value.slice(0, -1);

    if (visor.value === "") {
        visor.value = "0";
    }
}

function porcentagem() {
    let visor = document.getElementById("visor");

    if (visor.value !== "" && !isNaN(visor.value)) {
        let resultado = parseFloat(visor.value) / 100;
        visor.value = resultado.toFixed(6).replace(/\.?0+$/, "");
    }
}

function raizQuadrada() {
    let visor = document.getElementById("visor");
    let numero = parseFloat(visor.value);

    if (!isNaN(numero) && numero >= 0) {
        visor.value = Math.sqrt(numero).toFixed(6).replace(/\.?0+$/, "");
    } else {
        visor.value = "Erro";
    }
}
function inserirPi() {
    let visor = document.getElementById("visor");
    visor.value += Math.PI.toFixed(6);
}

function validarEntrada() {
    let visor = document.getElementById("visor");

    // Permite apenas números e operadores
    visor.value = visor.value.replace(/[^0-9+\-*/.]/g, "");
}

function adicionarPonto() {
    let visor = document.getElementById("visor");

    
    let partes = visor.value.split(/[+\-*/]/);
    let ultimoNumero = partes[partes.length - 1];

    
    if (!ultimoNumero.includes(".")) {
        visor.value += ".";
    }
}
