//Swiper Hero
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//Fancybox
$('[data-fancybox="galeria"]').fancybox({
  transitionEffect: "circular",
  transitionDuration: 900,
  buttons: ["slideShow", "fullScreen", "thumbs", "close"],
  lang: "es",
  i18n: {
    en: {
      CLOSE: "Close",
      NEXT: "Next",
      PREV: "Previous",
      ERROR:
        "The requested content cannot be loaded. <br/> Please try again later.",
      PLAY_START: "Start slideshow",
      PLAY_STOP: "Pause slideshow",
      FULL_SCREEN: "Full screen",
      THUMBS: "Thumbnails",
      DOWNLOAD: "Download",
      SHARE: "Share",
      ZOOM: "Zoom"
    },
    es: {
      CLOSE: "Cerrar",
      NEXT: "Siguiente",
      PREV: "Anterior",
      ERROR: "Ha ocurrido un error inesperado <br/> :(",
      PLAY_START: "Reproducir",
      PLAY_STOP: "Parar",
      FULL_SCREEN: "Pantalla Completa",
      THUMBS: "Vorschaubilder",
      DOWNLOAD: "Descargar",
      SHARE: "Compartir",
      ZOOM: "Zoom"
    }
  }
});

//Scrollreveal

//INDEX
ScrollReveal().reveal(".bienvenido .main-text h3", {
  delay: 500,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: false
});

ScrollReveal().reveal(".bienvenido .main-text h2", {
  delay: 700,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: false
});

ScrollReveal().reveal(".bienvenido .main-text .btn-nosotros button", {
  delay: 700,
  duration: 2000,
  reset: false
});

ScrollReveal().reveal(".info-menu .info-box h3", {
  delay: 500,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: false
});

ScrollReveal().reveal(".info-menu .info-box h2", {
  delay: 700,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: false
});

ScrollReveal().reveal(".info-menu .info-box .btn-nosotros a", {
  delay: 700,
  duration: 2000,
  reset: false
});

ScrollReveal().reveal(".galeria .main-text h3", {
  delay: 500,
  duration: 2000,
  reset: false
});

ScrollReveal().reveal(".galeria .main-text h2", {
  delay: 700,
  duration: 2000,
  reset: false
});

//CARTA
ScrollReveal().reveal(".bg-hero .main-info h3", {
  delay: 500,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: false
});

ScrollReveal().reveal(".bg-hero .main-info h1", {
  delay: 700,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: false
});

ScrollReveal().reveal(".main-carta h4", {
  delay: 300,
  duration: 1500,
  origin: "center",
  reset: false
});

ScrollReveal().reveal(" .lineas span:first-child", {
  delay: 300,
  duration: 2000,
  origin: "left",
  distance: "100%",
  reset: false
});

ScrollReveal().reveal(" .lineas span:last-child", {
  delay: 400,
  duration: 2000,
  origin: "right",
  distance: "100%",
  reset: false
});

//Scroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if(this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      var seconds = 1200;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, seconds, function(){
        window.location.hash = hash;
      });
    }
  });
});