document.addEventListener("DOMContentLoaded", function () {
  // Menu Mobile
  const navMobile = document.querySelector(".nav-mobile");
  const navMenu = document.querySelector(".nav-menu");

  if (navMobile) {
    navMobile.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navMobile.querySelector("i").classList.toggle("fa-bars");
      navMobile.querySelector("i").classList.toggle("fa-times");
    });
  }

  // Rolagem suave para os links internos
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Fecha o menu mobile quando clica em um link
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          navMobile.querySelector("i").classList.add("fa-bars");
          navMobile.querySelector("i").classList.remove("fa-times");
        }

        window.scrollTo({
          top: targetElement.offsetTop - 70, // Ajuste para o header fixo
          behavior: "smooth",
        });
      }
    });
  });

  // Formulário de agendamento
  const appointmentForm = document.getElementById("appointment-form");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Coleta os dados do formulário
      const formData = new FormData(this);
      const formObject = {};

      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Aqui você pode adicionar código para enviar os dados para um servidor
      // Por enquanto, apenas mostra uma mensagem de sucesso
      alert(
        "Agendamento recebido com sucesso! Entraremos em contato em breve."
      );
      this.reset();
    });
  }

  // Carrossel de Depoimentos
  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevButton = document.querySelector(".testimonial-prev");
  const nextButton = document.querySelector(".testimonial-next");
  const dots = document.querySelectorAll(".testimonial-dot");
  const totalCards = testimonialCards.length;
  let currentIndex = 0;

  // Verifica se o carrossel existe na página
  if (testimonialTrack && testimonialCards.length > 0) {
    // Configura o tamanho inicial do track e cards
    testimonialTrack.style.width = `${totalCards * 100}%`;

    testimonialCards.forEach((card, index) => {
      card.style.width = `calc(${100 / totalCards}% - 20px)`;
      // Ocultar os cards que não são o primeiro inicialmente
      if (index !== 0) {
        card.style.opacity = "0";
      }
    });

    // Função para mostrar um depoimento específico
    function showTestimonial(index) {
      if (index < 0) index = totalCards - 1;
      if (index >= totalCards) index = 0;

      // Oculta todos os cards e depois mostra apenas o atual
      testimonialCards.forEach((card, i) => {
        if (i === index) {
          card.style.opacity = "1";
        } else {
          card.style.opacity = "0";
        }
      });

      currentIndex = index;
      const offset = -(100 / totalCards) * currentIndex;
      testimonialTrack.style.transform = `translateX(${offset}%)`;

      // Atualiza os dots
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    // Inicializa o carrossel
    showTestimonial(0);

    // Event listeners para os botões de navegação
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        showTestimonial(currentIndex - 1);
      });

      nextButton.addEventListener("click", () => {
        showTestimonial(currentIndex + 1);
      });
    }

    // Event listeners para os dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index);
      });
    });

    // Auto-play do carrossel
    let autoPlayInterval;

    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        showTestimonial(currentIndex + 1);
      }, 5000); // Troca a cada 5 segundos
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    // Inicia o auto-play
    startAutoPlay();

    // Pausa o auto-play quando o mouse estiver sobre o carrossel
    const testimonialCarousel = document.querySelector(".testimonial-carousel");
    if (testimonialCarousel) {
      testimonialCarousel.addEventListener("mouseenter", stopAutoPlay);
      testimonialCarousel.addEventListener("mouseleave", startAutoPlay);
    }

    // Suporte para gestos de toque (swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialTrack.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
      },
      { passive: true }
    );

    testimonialTrack.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
      },
      { passive: true }
    );

    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe para a esquerda (próximo)
        showTestimonial(currentIndex + 1);
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe para a direita (anterior)
        showTestimonial(currentIndex - 1);
      }
    }
  }

  // Animação de entrada ao rolar
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        // Para não animar novamente quando já estiver visível
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elementos para animar
  const animateElements = document.querySelectorAll(
    ".service-card, .additional-service, .contact-form, .testimonial-card"
  );

  animateElements.forEach((element) => {
    element.classList.add("fade-in");
    observer.observe(element);
  });

  // Adicionar estilo para animação no CSS
  const style = document.createElement("style");
  style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
  document.head.appendChild(style);

  // Validação básica do formulário
  const inputs = document.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    input.addEventListener("invalid", function () {
      this.classList.add("error");
    });

    input.addEventListener("input", function () {
      if (this.validity.valid) {
        this.classList.remove("error");
      }
    });
  });

  // Adicionar estilo para campos com erro
  const errorStyle = document.createElement("style");
  errorStyle.textContent = `
        .error {
            border-color: #ff3860 !important;
            animation: shake 0.5s linear;
        }
        
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
    `;
  document.head.appendChild(errorStyle);

  // Botão WhatsApp flutuante com animação
  const whatsappFloat = document.querySelector(".whatsapp-float");

  if (whatsappFloat) {
    // Animação de pulso para chamar atenção
    const pulseStyle = document.createElement("style");
    pulseStyle.textContent = `
            .pulse {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
    document.head.appendChild(pulseStyle);

    // Adiciona animação após 3 segundos
    setTimeout(() => {
      whatsappFloat.classList.add("pulse");
    }, 3000);
  }

  // Header com mudança de estilo ao rolar
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Adiciona estilo para header após rolagem
    const headerStyle = document.createElement("style");
    headerStyle.textContent = `
            .header.scrolled {
                background-color: rgba(255, 255, 255, 0.9);
                box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            }
        `;
    document.head.appendChild(headerStyle);
  }
});
