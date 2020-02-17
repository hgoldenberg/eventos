// Ejercicio MAGIC DIV

//Pon una imagen en la página que desaparezca cuando pases el mouse por
//arriba de un div secreto llamado #magic.


document.querySelector("#magic").addEventListener("mousemove",function(evento) {
  document.querySelector("img").classList.toggle("desaparece")
})
