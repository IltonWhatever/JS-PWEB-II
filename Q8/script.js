const numeroAlvo = Math.floor(Math.random()*10)
let tentativa;
do{
    tentativa = prompt("Digite um numero entre 0 a 10: ")
}while(numeroAlvo != tentativa);

alert("Acertou")