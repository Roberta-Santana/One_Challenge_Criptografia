/*1- AO CLICK DO BOTÃO Pegar o texto digitado na caixa,
2- converter os elementos do texto (lista ?? de string?)
3-carregar texto convertido na caixa de texto descrip*/

var textoInicial = [];
var texto = '';
var i = 0;
var textoAlterado = 0;

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCxEntrada(){
    let limparCampo = document.querySelector('input');
    limparCampo.value = '';
}

function substituirTexto(texto, letraA, letraB){
    if(texto.includes(letraA)){
        texto=texto.replace(new RegExp(letraA,'g'),letraB);
    }
    return texto;
}

function criptografarButton(){
    textoInicial = document.querySelector('input').value;
    for(i=0;i<textoInicial.lenght;i++){
        textoInicial = substituirTexto(textoInicial,'e','enter');
        console.log(textoInicial);
        textoInicial+= substituirTexto(textoInicial,'a','ai');
        console.log(textoInicial);
    }

    /*limparCxEntrada();*/
    return exibiTextoNaTela('#saida__caixa__texto',`${textoInicial}`);    
}

/*
function criptografarButton(){
    textoInicial = document.querySelector('input').value;
        substituirTexto('e', 'enter');
        console.log(textoInicial);
        substituirTexto('i', 'imes');
        console.log(textoInicial);
        substituirTexto('o', 'ober');
        console.log(textoInicial);
        substituirTexto('u', 'ufat');
        console.log(textoInicial); 
        substituirTexto('a','ai');
        console.log(textoInicial);
    limparCxEntrada();
    return exibiTextoNaTela('#saida__caixa__texto',`${textoInicial}`);    
}

function descriptografarButton(){
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
}*/
