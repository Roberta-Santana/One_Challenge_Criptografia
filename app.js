var textoInicial;
var textoSaida;

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparTexto(tag){
    let limparCampo = document.querySelector(tag);
    return limparCampo.value = '';
}

function criptografarButton(){
    textoInicial = document.querySelector('input').value;
    textoSaida= textoInicial.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
                            .replace(/o/g, "ober").replace(/u/g, "ufat");
    limparTexto('input');
    return exibiTextoNaTela('#saida__caixa__texto',`${textoSaida}`);
}

function descriptografarButton(){
    var textoFinal = document.querySelectorAll('#saida__caixa__texto');
    var textoDescrip= textoFinal.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
                            .replace(/ober/g, "o").replace(/ufat/g, "u");

    return exibiTextoNaTela('#crip__texto',`${textoDescrip}`);
}
