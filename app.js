var textoInicial;
var textoSaida;

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparTexto(tag){
    let limparCampo = document.querySelector(tag);
    limparCampo.value = '';
}

function criptografarButton(){
    textoInicial = document.querySelector('input').value;
    textoSaida= textoInicial.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
                            .replace(/o/g, "ober").replace(/u/g, "ufat");
    return exibiTextoNaTela('#saida__caixa__texto',`${textoSaida}`);
}

/* function descriptografarButton(){
    textoInicial = document.querySelector('input').value;   
    substituirTexto('enter', 'e');
    console.log(textoInicial);
    substituirTexto('imes','i');
    console.log(textoInicial);
    substituirTexto('ai','a');
    console.log(textoInicial);
    substituirTexto('ober','o');
    console.log(textoInicial);
    substituirTexto('ufat','u');
    console.log(textoInicial); 
    return exibiTextoNaTela('#saida__caixa__texto',`${textoInicial}`); 
} */
