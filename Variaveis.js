//   Variaveis novas no JS são utilizadas usando LET por mais que existam outras.

let messagem;
messagem = 'Oil!';

alert(messagem); // Mostra a variável

//  Criando variaveis:
// Linha Unica. Não recomendada
let u = 'John', a = '25', m = 'Hello';

// Uma Variavel por linha. Forma Ideal
let user = 'John'
let age = 25;
let message = 'Hello';

//  VAR vs LET

// Exemplo para variavel dentro de funções
if (true){
    var test = true; // A variável test existirá fora do IF
}
alert(test);  // True

if (true){
    let test = true; // A variável test só existe dentro do bloco IF
}
alert(test); // ReferenceError: test is not defined

// Exemplo de criação
let test;
let test; // SyntaxError: 'user' has already been declared

var test = "Peter";
var test = "John"; // Reecria a variavel com o outro valor

alert(test); // John
