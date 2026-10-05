// Animación al hacer scroll
document.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll(".proyecto-card, .servicio-card");
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
});

// Validación visual del formulario
function mostrarAlerta() {
  let nombre = document.getElementById("nombre");
  let mensaje = document.getElementById("mensaje");

  if (nombre.value && mensaje.value) {
    Swal.fire("¡Gracias!", "Tu mensaje fue enviado.", "success");
  } else {
    Swal.fire("Error", "Por favor completa todos los campos.", "error");
  }
}



document.getElementById("form-contacto").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Gracias ' + nombre + ', pronto me pondré en contacto contigo.',
      confirmButtonColor: '#0ef1ccf1'
    });
    this.reset();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Campos incompletos',
      text: 'Por favor llena todos los campos antes de enviar.',
      confirmButtonColor: '#f39c12'
    });
  }
});
