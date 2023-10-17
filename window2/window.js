let w = window.innerHeight;
let h = window.innerWidth;
let x = document.getElementById("ex");

x.innerHTML = "Largura: " + w + "<br>" + "Altura: " + h;

let novaJanela;
function abrirJanela(){
    novaJanela = window.open("", "novaJanela", "width=200, height=200");
    novaJanela.document.write("<p>Uma nova janela foi criada</p>");
};
function fecharJanela(){
    novaJanela.close();
};