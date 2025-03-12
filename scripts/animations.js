/* animations.js
   Animaciones de scroll usando IntersectionObserver,
   animación de la bola de golf y funcionalidad FAQ */
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
    let posX = -100;
    const speed = 200; // Pixeles por segundo
    let stop = true;
    let lastTime = performance.now();
  
    window.onscroll = function() {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        if (stop) {
          stop = false;
          posX = -40;
          lastTime = performance.now();
          requestAnimationFrame(animateBall);
        }
      } else {
        stop = true;
        posX = -100;
        if (golfBall) {
          golfBall.style.left = posX + "px";
        }
      }
    };
  
    function animateBall(currentTime) {
      if (stop) return;
      
      const deltaTime = (currentTime - lastTime) / 1000; // Tiempo en segundos
      lastTime = currentTime;
      
      posX += speed * deltaTime;
      
      if (posX > window.innerWidth) {
        posX = -40;
      }
      
      golfBall.style.left = posX + "px";
      requestAnimationFrame(animateBall);
    }
  
    if (golfBall) {
      golfBall.style.left = "-100px";
    }
  
    // Comportamiento para FAQ (expandir/colapsar)
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const faqItem = btn.parentElement;
        const answer = faqItem.querySelector(".faq-answer");
  
        // Mostrar / Ocultar respuesta
        if (btn.getAttribute("aria-expanded") === "true") {
          btn.setAttribute("aria-expanded", "false");
          answer.style.maxHeight = 0;
        } else {
          btn.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
  