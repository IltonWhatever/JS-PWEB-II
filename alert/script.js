// Armazenando na memoria o elemento pelo ID 
let boxbox = document.getElementById('boxbox');

// Passando uma função como parametro para o metodo addEvetListener 
boxbox.addEventListener('click', function(){
    alert("Bom dia Chefe")
});
boxbox.addEventListener('mouseout', function(){
    alert("Flw moral")
});
