const nombre = "";
const edad = "";
const correoElectronico = "";

/* Vamos a crear una función para guardar los datos del formulario en un objeto */

/* Paso 1 - Creamos una función */
const formulario = (event) => {
  /* Paso 2 Prevenimos actualización */
  event.preventDefault();

  /* Paso 3 - Declaramos las variables que leeran el valor del input */
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const correoElectronico = document.getElementById("correoElectronico").value;

  /* Paso 4 - Creamos un objeto */
  const persona = {
    nombre: nombre,
    edad: edad,
    correo: correoElectronico,
  };

  /* Paso 5 - Mostramos los datos recuperados */
  document.getElementById("datos").innerHTML = `
  <h2>Datos recibidos</h2>
  <p>Nombre: ${persona.nombre}</p>
  <p>Edad: ${persona.edad}</p>
  <p>Correo: ${persona.correo}</p>
  <h3>Gracias por mandar su información</h3>
  `;

  /* Paso 6 -Limpiamos el formulario */
  document.getElementById("formulario").reset();
};
