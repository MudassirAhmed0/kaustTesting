const partnersCarousel = new Swiper('.partnersCarousel', {
  
    loop: true,
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
     