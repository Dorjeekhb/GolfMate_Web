/* main.js
   Lógica general del sitio: preloader, menú hamburguesa */
   document.addEventListener("DOMContentLoaded", () => {
    // Ocultar preloader
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1000);
  
    // Menú hamburguesa
    const burger = document.getElementById("burger");
    const navbar = document.getElementById("navbar");
  
    burger.addEventListener("click", () => {
      navbar.classList.toggle("activo");
    });
  
    // Cerrar menú al hacer clic en un enlace (móvil)
    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          navbar.classList.remove("activo");
        }
      });
    });
  });