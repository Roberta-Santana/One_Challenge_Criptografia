/*1- AO CLICK DO BOTÃO Pegar o texto digitado na caixa,
2- converter os elementos do texto (lista ?? de string?)
3-carregar texto convertido na caixa de texto descrip*/

let textoInicial;

function criptografarButton(){
    textoInicial = document.querySelector('input').value;

}

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibiTextoNaTela('h2','Nenhuma mensagem encontrada');
    exibiTextoNaTela('p',`${texto_criptografado}`);
}