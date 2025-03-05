/* animations.js
   Animaciones de scroll usando IntersectionObserver y animación de la bola de golf */
   document.addEventListener("DOMContentLoaded", () => {
    // Scroll reveal para elementos con la clase "reveal"
    const revealElements = document.querySelectorAll(".reveal");
    const options = { threshold: 0.2 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    revealElements.forEach(elem => {
      observer.observe(elem);
    });
  
    // Animación de la bola de golf
    const golfBall = document.getElementById("golfBall");
    let posX = 0;
    const speed = 2; // píxeles por frame
    let stop = true;

    window.onscroll = function() {
      // Calculamos la posición actual del scroll y la altura total de la página
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
    
      // Si la posición del scroll más la altura de la ventana es igual o mayor a la altura total del documento
      if (scrollPosition + windowHeight >= 2556) {
        stop = false;
        posX = -40;
      }
      else {
        posX = -100;
        stop = true;
      }
      requestAnimationFrame(animateBall);
    };
    
    function animateBall() {
      posX += speed;
      if (posX > window.innerWidth) {
        posX = -40; // Reinicia la posición cuando sale de la pantalla
      }
      golfBall.style.left = posX + "px";
      if(!stop)requestAnimationFrame(animateBall);
    }
    if (golfBall) {
      stop = true;
      posX = -100;
      animateBall();
    }
  });
  