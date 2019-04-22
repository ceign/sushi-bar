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

console.log(screen.width + "x" + screen.height);
