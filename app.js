/*1- AO CLICK DO BOTÃO Pegar o texto digitado na caixa,
2- converter os elementos do texto (lista ?? de string?)
3-carregar texto convertido na caixa de texto descrip*/

let textoInicial;

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibiTextoNaTela("h2",'Nenhuma mensagem encontrada');
exibiTextoNaTela("h6",'Digite um texto que você deseja criptografar ou descriptografar.');

function limparCxEntrada(){
    let textoInicial = document.querySelector('input');
    textoInicial.value = '';
}
function criptografarButton(){
    textoInicial = document.querySelector('input').value;

    limparCxEntrada();
    
    return exibiTextoNaTela('#saida__caixa__texto',`${textoInicial}`);
    
}