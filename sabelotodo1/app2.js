function puntajeHP() {
    var preguntahp11 = document.getElementsByName("hp11");
    var preguntahp22 = document.getElementsByName("hp22");
    var preguntahp33 = document.getElementsByName("hp33");
    console.log(preguntahp11);
    console.log(preguntahp22);
    console.log(preguntahp33);
}
/*var mostrarhp = puntajeHP();
function mostrarPuntajeHP() {
    mostrarhp;
}*/
function hperu () {
let hp11 = document.querySelector ("input[name="hp11"]:checked").value;
let rta11=document.getElementById("true").value;
let hp22 = document.querySelector ("input[name="hp22"]:checked").value;
let rta22=document.getElementById("true").value;
let hp3 = document.querySelector ("input[name="hp33"]:checked").value;
let rta33=document.getElementById("true").value;
let score=0;
if(hp11==rta11){
  score++;
}if(hp22==rta22){
  score++;
}if(hp33==rta33){
  score++;
}
}
function huniversal () {
let hu11 = document.querySelector ("input[name="hu11"]:checked").value;
let rta11=document.getElementById("true").value;
let hu22 = document.querySelector ("input[name="hu22"]:checked").value;
let rta22=document.getElementById("true").value;
let hu33 = document.querySelector ("input[name="hu33"]:checked").value;
let rta33=document.getElementById("true").value;
let score=0;
if(hu11==rta11){
  score++;
}if(hu22==rta22){
  score++;
}if(hu33==rta33){
  score++;
}
}
