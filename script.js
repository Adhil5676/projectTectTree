
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)'; // Solid background
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.5)'; // Transparent background
      }
    });
