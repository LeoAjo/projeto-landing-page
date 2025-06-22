var Leonardo = window.document.getElementById("Leonardo"); 
var Samantha = window.document.getElementById("Samantha");
var Bruna = window.document.getElementById("Bruna");
var setaEsquerda = window.document.getElementById("setaEsquerda"); 
var setaDireita = window.document.getElementById("setaDireita");


  function RolarParaEsquerda() {
   
        Leonardo.style.display = "none";
        Samantha.style.display = "block";
        Bruna.style.display = "block";
        setaEsquerda.style.display = "none";
        setaDireita.style.display = "block";
    
}
function RolarParaDireita() {
    Leonardo.style.display = "block";
    Samantha.style.display ="block";
    Bruna.style.display = "none";
    setaEsquerda.style.display = "block";
    setaDireita.style.display = "none"; 
}





