// Función básica para mostrar alerta al enviar formulario
function mostrarAlerta() {
  let nombre = document.getElementById("nombre").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre && mensaje) {
    alert("Gracias " + nombre + ", tu mensaje fue enviado.");
  } else {
    alert("Por favor completa todos los campos.");
  }
}
