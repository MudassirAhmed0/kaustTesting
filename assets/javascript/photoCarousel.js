const photoCarousel = new Swiper('.photoCarousel', {
       
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });
      