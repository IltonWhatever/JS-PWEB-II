const num = parseInt(prompt("Digite um numero: "))

let contador = 2;

while(true){
    if(contador === num){
        alert("O Numero é Primo");
        break;
    }else if(num < 2){
        alert("O Numero não é Primo");
        break;
    }else if(num % contador === 0){
        alert("O Numero não é Primo");
        break;
    }else{
        alert("O Numero é Primo");
        break;
    }
    contador ++;
}