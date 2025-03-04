/* form.js
   Validación y manejo del formulario de contacto */
   document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
  
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
  });
  