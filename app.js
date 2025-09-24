// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  nombre = document.getElementById("agregarAmigo")
  if (nombre == "") {
    alert("Por favor, inserte un nombre.");
    return;}
  amigos.push(nombre);
  nombre.value = "";
