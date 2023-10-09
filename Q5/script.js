function soma(n1 ,n2){
    return n1+n2;
}

let n1 = parseFloat(prompt("Digite o primeiro numero: "))
let n2 = parseFloat(prompt("Digite o segundo numero: "))

resultado = soma(n1,n2)

alert(`A soma dos numeros é: ${resultado}`)