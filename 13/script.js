let med = 0;
for(let i =0; i<5; i++){
    med += parseFloat(prompt(`Digite o ${i+1}°`));
}
med = med/5;
alert(`A media das notas é: ${med}`)