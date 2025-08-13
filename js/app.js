document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      emailjs.sendForm('SERVICE_ID_DE_EJEMPLO', 'TEMPLATE_ID_DE_EJEMPLO', this)
        .then(() => {
          alert('¡Mensaje enviado con éxito! ✅');
          this.reset();
        }, (error) => {
          alert('Ocurrió un error. ❌ Por favor, intentá más tarde.');
          console.error(error);
        });
    });

    const scrollBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });