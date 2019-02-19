//Pantallas principales (DIVs)
const divEntrada = document.getElementById("divEntrada");
const divSaludo = document.getElementById("divSaludo");
const divOpciones = document.getElementById("divOpciones");
const divTrivia = document.getElementById("divTrivia");

const btnInto = document.getElementById("into");
//Crear un evento click en el boton Jugar
btnInto.addEventListener("click",function(){
  //Mostramos la pantalla saludo
  divSaludo.style.display = 'block';
  //Ocultamos la pantalla saludo
  divEntrada.style.display= 'none';
})

//obtener el input que es donde se escribe el nombre
const next = document.getElementById('next');
//obtener el span que es l lugar donde se pinta el nombre
const spanNombre = document.getElementById('spanNombre');
//creamos la variable donde se guarda el nombre del usuario
let userName = "";

//agregamos el eventos click en el boton con id next (siguiente)
next.addEventListener('click',function(){ 
  //Obtenemos el valor del input (nombre del usuario)
  userName = document.getElementById('user').value;
  //Escribe el nombre del usuario dentro del span
  spanNombre.innerHTML = userName;
  
  //cambiamos de pantalla
  divOpciones.style.display = 'block';
  divSaludo.style.display= 'none';
})

const player = document.getElementById("player");
const team = document.getElementById("team");

const q1Player = document.getElementById("q1Player");
const q2Player = document.getElementById("q2Player");
const q3Player = document.getElementById("q3Player");
const q1Team = document.getElementById("q1Team");
const q2Team = document.getElementById("q2Team");
const q3Team = document.getElementById("q3Team");

//obtengo el boton jugadores
const btnJugadores=document.getElementById("btnJugadores");

btnJugadores.addEventListener("click",function(){
  divTrivia.style.display = 'block';
  divOpciones.style.display= 'none';
  
  //mostrar trivia de jugador
  player.style.display = 'block';
  
  //muestro la pregunta 1 de jugador
  q1Player.style.display = 'block';
  
})

const btnEquipos=document.getElementById("btnEquipos");

btnEquipos.addEventListener("click",function(){
  divTrivia.style.display = 'block';
  divOpciones.style.display= 'none';
  
  //muestro el equipo
  team.style.display = 'block';
  
  //muestro la primera pregunta de equipo
  q1Team.style.display = 'block';
})

const btn1Player = document.getElementById("btn1-player");
const btn2Player = document.getElementById("btn2-player");
const btn3Player = document.getElementById("btn3-player");
const btn1Team = document.getElementById("btn1-team");
const btn2Team = document.getElementById("btn2-team");
const btn3Team = document.getElementById("btn3-team");

let puntaje = 0;

//Agregar evento click al boton btn1Player
btn1Player.addEventListener("click",function(){
  //Obtener el elemento input con name"p1-player" y que esté marcado
  //Obtener la respuesta seleccionada
  const opcion = document.querySelector('input[name="p1-player"]:checked')
  
  //if significa si. Es una condición. Si se cumple entra sino, se va al else.
  //if(null) -> falso
  //Si se ha seleccionado una respuesta
  if(opcion)
  {
    //Obtener el valor
    const resultado = opcion.value;
    
    //Mostrar la proxima pregunta y ocultar la actual
    q2Player.style.display = 'block';
    q1Player.style.display = 'none';

    //si el resultado está bien
    //el == o === son comparaciones
    if(resultado == 1) {
      alert("Muy bien! has ganado un punto");
      puntaje++;
    }
    //si el resultado no está bien
    else
      alert("Respuesta incorrecta =(");
  }
  //si no se ha seleccionado un respuesta
  else
    alert("escoja una respuesta")
})

btn2Player.addEventListener("click",function(){
  const opcion = document.querySelector('input[name="p2-player"]:checked')
  
  if(opcion)
  {
    const resultado = opcion.value;
    
    q3Player.style.display = 'block';
    q2Player.style.display = 'none';

    if(resultado == 1) {
      alert("Muy bien! has ganado un punto");
      puntaje++;
    }
    else
      alert("Respuesta incorrecta =(");
  }
  else
    alert("escoja una respuesta")
})

btn3Player.addEventListener("click",function(){
  //obtengo la opción seleccionada
  const opcion = document.querySelector('input[name="p3-player"]:checked')
  
  //verifico si hay selección
  if(opcion) {
    //obtengo el valor de la selección
    const resultado = opcion.value;
    
    //creo una variable para guardar el mensaje a mostrar al final.
    let textoMensaje = "";

    if(resultado == 1) {
      puntaje++;
      textoMensaje = "Muy bien! has ganado un punto. ";
    }
    else
      textoMensaje = "Respuesta incorrecta =(.";

    //agrego a la variable de respuesta correcta o incorrecta el puntaje final
    //confirm -> te muestra un mensaje con 2 botones: aceptar o cancelar
    //aceptar: true o verdadero
    //cancelar: false o falso
    const volverJugar = confirm(textoMensaje + " Tu puntaje es " + puntaje + " ¿Quieres volver a jugar?");

    //oculto las preguntas
    player.style.display = 'none';
    q3Player.style.display = 'none';

    divTrivia.style.display = 'none';

    //el usuario quiere volver a jugar?
    if(volverJugar) {
      //si quiere jugar, le muestro las opciones de trivia (jugadores o equipos)
      divOpciones.style.display = 'block';
    }
    //si no quiere jugar
    else {
      alert("Gracias por jugar con nosotros.");
      //le muestro la pantalla inicial
      divEntrada.style.display = 'block';
    }
    
    //pongo el puntaje en cero porque es un juego nuevo
    puntaje = 0;
  }
  else
    alert("escoja una respuesta")
})

btn1Team.addEventListener("click",function(){
  const opcion = document.querySelector('input[name="p1-team"]:checked');
  
  if(opcion) {
  
    q2Team.style.display = 'block';
    q1Team.style.display = 'none';
    const resultado = opcion.value;

    if(resultado == 1) {
      alert("Muy bien! has ganado un punto");
      puntaje++;
    }
    else
      alert("Respuesta incorrecta =(");
  }
   else
    alert("escoja una respuesta")
})

btn2Team.addEventListener("click",function(){
  const opcion = document.querySelector('input[name="p2-team"]:checked');
  
  if(opcion) {

    q3Team.style.display = 'block';
    q2Team.style.display = 'none';
    const resultado = opcion.value;

    if(resultado == 1) {
      alert("Muy bien! has ganado un punto");
      puntaje++;
    }
    else
      alert("Respuesta incorrecta =(");
  }
   else
    alert("escoja una respuesta")
})

btn3Team.addEventListener("click",function(){
  const opcion = document.querySelector('input[name="p3-team"]:checked');
  
  if(opcion) {
    const resultado = opcion.value;

    let textoMensaje = "";

    if(resultado == 1) {
      puntaje++;
      textoMensaje = "Muy bien! has ganado un punto. ";
    }
    else
      textoMensaje = "Respuesta incorrecta =(.";

    const volverJugar = confirm(textoMensaje + " Tu puntaje es " + puntaje + " ¿Quieres volver a jugar?");

    team.style.display = 'none';
    q3Team.style.display = 'none';

    divTrivia.style.display = 'none';

    if(volverJugar) {
      divOpciones.style.display = 'block';
    }
    else {
      alert("Gracias por jugar con nosotros");
      divEntrada.style.display = 'block';
    }

    puntaje = 0;
  }
  else
    alert("escoja una respuesta")
})