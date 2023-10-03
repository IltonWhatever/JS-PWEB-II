// Exemplo 1 - Y é usado no meio do codigo porém ainda não foi declarado e atribuido
// o JS irar elevar a declaração de todas variaveis isso se chama Hoisting, assim é como se estivesse 
// no topo, isso vale apenas para declaração e não atribuição então é como se tivesse "var y".
var x = 1;
console.log(x + " " + y);
var y = 2;

// Exemplo 2 - E possivel atribuir valores a uma variavel que não existe ainda, contato que você a declare
// durante o codigo.
var num1 = 3;
num2 = 4;
console.log(num1 + " " + num2);
var num2;

// Exemplo 3 - Sendo assim podemos fazer o seguinte codigo:
a = 'Cran';
b = 'Berry';
console.log(a + "" + b);
var a, b;
