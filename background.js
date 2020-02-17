// Ejercicio Seleccionar Background
//Crea un input en tu html.
//El usuario ingresará un color en el input y cuando clickee enter el background
//tomará el color que haya ingresado
//Si presiona la tecla para borrar, el color debería volver a ser blanco.

var color = []

document.querySelector("input").addEventListener("keydown",function(teclado) {
     var tecla = String.fromCharCode(teclado.keyCode)
     color = color + tecla
     //console.log(color);
 })

document.querySelector("body").addEventListener("click",function () {
     this.style.backgroundColor = color
 })

 document.querySelector("button").addEventListener("click",function() {
     color = []
     document.querySelector("body").style.backgroundColor = "white"
 })
