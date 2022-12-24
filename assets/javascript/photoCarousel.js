const photoCarousel = new Swiper('.photoCarousel', {
       
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 800,
    ease:'linear',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
     },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });
      