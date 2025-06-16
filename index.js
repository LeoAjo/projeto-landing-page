var Leonardo = window.document.getElementById("Leonardo"); 
var Bruna = window.document.getElementById("Bruna");
var Samantha = window.document.getElementById("Samantha");
var setaEsquerda = window.document.getElementById("setaEsquerda"); 
var setaDireita = window.document.getElementById("setaDireita");


  function RolarParaEsquerda() {
    if (Leonardo && Bruna && Samantha && setaEsquerda && setaDireita) {
        Leonardo.style.display = "none";
        Bruna.style.display = "block";
        Samantha.style.display = "block";
        setaEsquerda.style.display = "none";
        setaDireita.style.display = "block";
    } else {
        console.error("Erro: Um ou mais elementos não foram encontrados.");
    }
}
function RolarParaDireita() {
    Leonardo.style.display = "none";
    Bruna.style.display = "block";
    Samantha.style.display ="block"
    setaEsquerda.style.display = "block";
    setaDireita.style.display = "none"; 
}





