/* form.js
   Validación y manejo de los formularios de contacto y reservas */
   document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const reservasForm = document.getElementById("reservasForm");
  
    // Formulario de Contacto
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
  
        if (nombre === "" || email === "") {
          alert("Por favor, completa todos los campos requeridos.");
          return;
        }
  
        alert(`¡Gracias, ${nombre}! Pronto te contactaremos en ${email}.`);
        contactForm.reset();
      });
    }
  
    // Formulario de Reservas
    if (reservasForm) {
      reservasForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const nombreReserva = document.getElementById("nombreReserva").value.trim();
        const emailReserva = document.getElementById("emailReserva").value.trim();
        const cantidad = document.getElementById("cantidad").value.trim();
  
        if (nombreReserva === "" || emailReserva === "" || cantidad === "") {
          alert("Por favor, completa todos los campos requeridos.");
          return;
        }
  
        alert(`¡Gracias, ${nombreReserva}! Has reservado ${cantidad} GolfMate(s). Te escribiremos a ${emailReserva} con más información.`);
        reservasForm.reset();
      });
    }
  });
  