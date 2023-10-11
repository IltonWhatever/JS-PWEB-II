numero = parseInt(prompt("Digite um numero: "));


for(let i = 0; i <=10; i++){
    document.write(`
        <tr> 
            ${i} x ${numero} = ${i * numero}
        </tr>
        <br>
    `);
}
