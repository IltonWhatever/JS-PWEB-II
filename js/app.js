const divImagemPrincipal = document.querySelector('#imagem-principal');
const imagemPrincipal = divImagemPrincipal.querySelector('#imgFull');
const textoAlternativo =divImagemPrincipal.querySelector('.texto-alternativo')
const btnProximo = divImagemPrincipal.querySelector('.proximo');
const btnAterior = divImagemPrincipal.querySelector('.anterior');
const todasImagens = document.querySelectorAll('#imagens img');

let idImagemAtiva = 0;

const proximaImagem = function(){
    idImagemAtiva++
    console.log(idImagemAtiva)
    if(idImagemAtiva >= todasImagens.length) idImagemAtiva = 0
    selecionarImagem()
}

const voltarImagem = function(){
    idImagemAtiva--
    if(idImagemAtiva < 0) idImagemAtiva = todasImagens.length - 1
    selecionarImagem()
}

const selecionarImagem = function(){
    imagemPrincipal.src = todasImagens[idImagemAtiva].src
    todasImagens.forEach(function(imagem){
        imagem.classList = "";
    })
    todasImagens[idImagemAtiva].classList.add("")
}

btnProximo.addEventListener('click', proximaImagem)
btnAterior.addEventListener('click', voltarImagem)

todasImagens.forEach( function(imagem, numeroImage){
    imagem.addEventListener("click", function(){
        imagemPrincipal.src = todasImagens[idImagemAtiva]
    })
})