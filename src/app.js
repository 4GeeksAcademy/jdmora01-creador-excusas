import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien = ['El perro', 'my abuela', 'el cartero', 'mi vecino', 'mi hermano', 'mi hermana', 'mi amigo'];
let accion = ['se cayo', 'corrio', 'choco', 'peleo' ,'se cayo', 'me grito', 'me llamo'];
let que = ['mi t.v', 'el carro', 'la casa', 'el perro', 'la computadora', 'el gato', 'el libro'];
let cuando = ['en la tarde', 'antes de dormir', 'despues de comer', 'urante mi siesta', 'jugaba futbol', 'estaba en la escuela', 'cuando estaba en la casa']


function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let excuse = randomElement(quien) + " " + randomElement(accion) + " " + randomElement(que) + " " + randomElement(cuando);
  console.log(excuse);
  document.getElementById("excuse").innerText = excuse 


};