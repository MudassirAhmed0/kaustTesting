// const gap = window.innerWidth >= 1024? window.innerWidth /100 * 3.7  :15

const photoCarousel = new Swiper('.photoCarousel', {
       
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 800,
    ease:'linear',
    // spaceBetween:gap,
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
      