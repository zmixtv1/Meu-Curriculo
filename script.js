var a = document.getElementById("numero")
var b = document.getElementById("gmail")
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)
b.addEventListener("mouseenter", entrar1)
b.addEventListener("mouseout", sair1)
function entrar(){
    a.style.color = "Blue"
}
function sair(){
    a.style.color = "rgb(0, 255, 255)"
}
function entrar1(){
    b.style.color = "Blue"
}
function sair1(){
    b.style.color = "rgb(0, 255, 255)"
}
