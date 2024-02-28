/*1- AO CLICK DO BOTÃO Pegar o texto digitado na caixa,
2- converter os elementos do texto (lista ?? de string?)
3-carregar texto convertido na caixa de texto descrip*/


var textoInicial = [];


function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparTexto(tag){
    let limparCampo = document.querySelector(tag);
    limparCampo.value = '';
}

/* function substituirTexto(letraA, letraB){
    if(textoInicial.includes(letraA)){
        textoInicial=textoInicial.replace(letraA,letraB);
    }
    return textoInicial;
} */

function criptografarButton(){

    var textoInicial = document.querySelector('input').value;
    var textoAlterado = '';
    for(var i=0; i<textoInicial.length;i++){
        
        if(textoInicial[i]==='e'){
            textoAlterado+='enter';
        }        
        console.log(textoInicial);
        console.log(textoAlterado);

        if(textoInicial[i]==='a'){
            textoAlterado+='ai';
        }
        else{
            textoAlterado+=textoInicial[i]}
    }
    limparTexto('input');
    return exibiTextoNaTela('#saida__caixa__texto',`${textoAlterado}`);    
}

/* substituirTexto('i', 'imes');
console.log(textoInicial);
substituirTexto('o', 'ober');
console.log(textoInicial);
substituirTexto('u', 'ufat');
console.log(textoInicial);  */

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
