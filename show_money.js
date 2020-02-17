// Ejercicio Show me the money

/* Crea un HTML nuevo y ponle tres botones, uno que diga "Show me the Money", otro que diga "Show me Miami"
y otro que diga "Show me Maiameee", seguidos por una imagen de plata, una de miami, y una, por supuesto,
de RICKY FORT!
Crea una clase CSS .oculto que tenga display:none; y asignalo a las imágenes.
Agrega event listeners en los botones para que cuando hagas click, se haga un toggle en la clase hidden
de su imagen respectiva y se muestre o se oculte.
Agrega event listeners en las imágenes para que cuando el usuario clickee en ellas se oculten.
Para esto usa el keyword this.*/

var botones = document.querySelectorAll("button")
var imagenes = document.querySelectorAll("img")
var str
var imgMoney = document.querySelector("#target_1")
var imgMiami = document.querySelector("#target_2")
var imgFort = document.querySelector("#target_3")


botones.forEach (function(btn){

  btn.addEventListener("click",function(){
    str=this.id

  if (str==="money"){
    imgMoney.classList.toggle("oculto");
  } else if (str==="miami"){
    imgMiami.classList.toggle("oculto");
  } else {
    imgFort.classList.toggle("oculto");
  }

})
})

for (i=0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function(){
    this.classList.add("oculto")
  })
}
