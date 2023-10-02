// <<Exemplos a serem usados no console do navegador>>


// Teste para mostrar que o ponto e virgula não é necessario para essas operações
alert('Hello')
alert('World')

//  Mostrando assim que a instrução so termina após o parêntese
// o java script consegue inferir onde a função termina
alert(3+
    1
    +2)

//  Nesse exemplo irar retornar um erro pois ele acha que a primeira instrução 
// faz parte da segunda, isso acontece pois a primeira instrução refere-se a uma função
// e na segunda ele acha que é um retorno da função pois iniciamos a instrução com um vetor
// existindo outras situações
alert('Hello')
[1,2].forEach(alert)

//  Adicionando um ponto em virgula disvinculamos as intruções
alert('Hello');
[1,2].forEach(alert)