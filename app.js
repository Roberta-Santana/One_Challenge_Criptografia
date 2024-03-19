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
    textoInicial = document.querySelector('.entrada__input').value;
    textoSaida= textoInicial.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
                            .replace(/o/g, "ober").replace(/u/g, "ufat");
    /*limparTexto('input');*/
    return exibiTextoNaTela('.saida__caixa',`${textoSaida}`);
}

function descriptografarButton(){
   var textoFinal = textoSaida;
   var textoDescrip = textoFinal.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
                                .replace(/ober/g, "o").replace(/ufat/g, "u");
/* LIMPAR TEXTO CRIPTOGRAFADO exibiTextoNaTela('input[type="text"]')*/
    return document.querySelector('.entrada__input[type="text"]').value = textoDescrip;
}
