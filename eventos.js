/*document.querySelector("button").addEventListener("click", function(){
  console.log("Alguien hizo click en el boton!")
})

var boton = document.querySelector("button")
var parrafo = document.querySelector("p")
boton.addEventListener("click", function(){
    parrafo.textContent = "Alguien hizo click!"
})

var boton = document.querySelector("button")
var parrafo = document.querySelector("p")
//Esta vez definimos la función fuera del evento y la llamamos cambiarTexto
var cambiarTexto = function(){
    parrafo.textContent = "Alguien hizo click!"
}
// En el callback pasamos directamente el nombre de la función cambiarTexto
boton.addEventListener("click", cambiarTexto)*/

// Ejercicio BEEPER
/*Crea un HTML que tenga un botón (podés usar un tag button) que diga "BEEP".
Crea un archivo .js y vinculalo a tu html usando un tag script,
ahí vas a escribir tu código JavaScript.*/

/*Seleccioná el botón (document.querySelector…) y agregale un event listener para que:
cada vez que un usuario haga click en el botón se ejecute una función (callback)
que seleccione el body y le agregue un párrafo <p> al final que diga 'BEEP'.
Acá vas a tener que poner .insertAdjacentHTML("beforeend", "LO QUE QUIERAS AGREGAR")
, porque innerHTML no funciona bien con eventos.*/

//Crea un archivo .css, vincúlalo a tu html y crea una clase que se llame .color .
//Dentro ponele un background color del color que quieras.
/*Vuelve a la función callback del evento y agrégale una línea que haga un
.classList.toggle("color") sobre el body, cambiándole el color con cada click.*/
/*Ahora define la función del callback afuera del evento, guardándola en una variable
que se llame seEjecutaEnEvento. reemplaza la función callback por la variable
seEjecutaEnEvento (que contiene la misma función)
y asegurate de que el programa funcione igual.*/

var cuerpo = document.querySelector("body")
var boton = document.querySelector("button")
var seEjecutaEnEvento = function(callback){
    cuerpo.insertAdjacentHTML("beforeend", "BEEP")
    cuerpo.classList.toggle("color")
}
  boton.addEventListener("click",seEjecutaEnEvento)

//THIS
/*<ul class="profesores">
    <li>Santi</li>
    <li>Toni</li>
    <li>Guille</li>
</ul>
// Selecciona todos los li adentro de un elemento clase profesores
// y los guarda dentro de la variable lis
var lis = document.querySelectorAll(".profesores > li")
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color="red"
    })
}

var target = document.querySelector("#target")*/


//Ejercicio Resaltador
/*Crea un documento HTML con al menos cinco párrafos (podés usar lorem ipsum para generarlos rápido)
Seleccionalos a todos y guardalos en una variable.
Usando un for loop, recorrelos a todos y agregales un event listener que haga que cuando los clickeás,
le ponga o le saque (toggle) una clase "resaltado", que le ponga un background color amarillo y
el color de la letra a rojo. Deberías usar el keyword this dentro de la función callback
para indicar que lo que tiene que cambiar es el párrafo que está siendo clickeado.*/

var parrafos = document.querySelectorAll("p")
for (i=0; i<parrafos.length; i++) {
  parrafos[i].addEventListener("click",function(){
    this.classList.toggle("resaltado")
  })
}

// Elementos de un evento
/* // tip: document.body es una forma más rápida de seleccionar el body sin querySelector
document.body.addEventListener("click", function(infoEvento) {
    console.log(infoEvento)
}) */

/* // ojo que si tienes pocos elementos HTML el body puede no ocupar todo el alto de la pantalla
document.body.addEventListener("click", function(infoEvento) {
    console.log("El mouse está en X: " + infoEvento.clientX + " Y: " + infoEvento.clientY)
})*/

/* // Copiá este código, pegalo en la consola y mueve el mouse
document.body.addEventListener("mousemove", function(infoEvento) {
  console.log("El mouse está en X: " + infoEvento.clientX + " Y: " + infoEvento.clientY)
})*/

/* document.body.addEventListener("mousemove", function(infoEvento) {
    console.log("El mouse está en X: " + infoEvento.clientX + " Y: " + infoEvento.clientY)
    console.log("Está siendo clickeado:" + !!infoEvento.which)
})*/

/* <input type="text"><label id="code"></label><label id="string"></label>
document.querySelector("input").addEventListener('keydown', function (e) {
    document.querySelector('#code').textContent=e.keyCode
    document.querySelector('#string').textContent=String.fromCharCode(e.keyCode)
})*/
