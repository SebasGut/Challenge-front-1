import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4MsMnwyJ8TN-OPOpWusW9nQdahCE3AWg",
    authDomain: "prub-d6eca.firebaseapp.com",
    databaseURL: "https://prub-d6eca-default-rtdb.firebaseio.com",
    projectId: "prub-d6eca",
    storageBucket: "prub-d6eca.appspot.com",
    messagingSenderId: "769917956022",
    appId: "1:769917956022:web:c064e44e708db676b29b17"
};

const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos de Firebase
var database = getDatabase();

document
  .getElementById("contacto_boton")
  .addEventListener("click", guardarInformacion);

function guardarInformacion() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;

  push(ref(database, "Respuestas"), {
    nombre: nombre,
    email: email,
    asunto: asunto,
    mensaje: mensaje,
  });

  // Opcional: Puedes mostrar un mensaje de éxito o limpiar el formulario
  alert("Información guardada correctamente");
  document.getElementById("contacto__formulario").reset();
}
