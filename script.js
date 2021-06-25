var a = document.getElementById("numero")
var b = document.getElementById("gmail")
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)
b.addEventListener("mouseenter", entrar1)
b.addEventListener("mouseout", sair1)
function entrar(){
    a.style.color = "RED"
}
function sair(){
    a.style.color = "blue"
}
function entrar1(){
    b.style.color = "RED"
}
function sair1(){
    b.style.color = "blue"
}