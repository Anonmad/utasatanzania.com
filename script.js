        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.getElementById('main-nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = "var(--primary)";
                header.style.padding = "0.5rem 0";
            } else {
                header.style.background = "var(--primary)";
                header.style.padding = "1rem 0";
            }
        });

const slides = document.querySelectorAll('.slide');
  let current = 0;

  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(nextSlide, 4000);