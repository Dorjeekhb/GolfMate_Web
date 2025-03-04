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
  
    function animateBall() {
      posX += speed;
      if (posX > window.innerWidth) {
        posX = -40; // Reinicia la posición cuando sale de la pantalla
      }
      golfBall.style.left = posX + "px";
      requestAnimationFrame(animateBall);
    }
    if (golfBall) {
      animateBall();
    }
  });
  