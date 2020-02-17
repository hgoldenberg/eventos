// Ejercicio Mouse tracker
/*En un html nuevo crea una <img> con este atributo src:
src="https://media.giphy.com/media/MtQxKzhytFsmQ/giphy.gif"
Vincula un css al html y dale a la img una clase con position: fixed
Desde el css, seleccióna el body dale un height:
100vh; esto hace que el alto del body sea el 100% de la pantalla.
Usando JavaScript seleccioná el body y agregale un evento "mousemove"
que en su callback (la función que se ejecuta cuando ocurre el evento)
selecciona la imagen y le cambia su propiedad css "top"
por el valor de la propiedad .clientY y left por el valor de la propiedad clientX.
Descrubre como ocultar el cursor con CSS.
Cambia el código para que la imagen te siga sólo si estás apretando el click.*/

var imagen = document.querySelector("img")
imagen.classList.add("imagen")
var cuerpo = document.querySelector("body")
cuerpo.classList.add("body")

  cuerpo.addEventListener("mousemove", function(infoEvento) {
    imagen.style.top=infoEvento.clientY;
    imagen.style.left=infoEvento.clientX;
})

/*
var body = document.querySelector("body")
var bobEsponja = document.querySelector("img")

body.addEventListener("mousemove",function (infoMouse) {
var y = infoMouse.clientY
bobEsponja.style.top = y + "px"
document.querySelector("body").style.cursor = "none"
})*/
