const majorCarousel= new Swiper('.majorCarousel', {
     loop: true,
     slidesPerView: "auto", 
     slidesPerGroup:1,
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
      
  //  document.querySelector('.majorCarousel .swiper-button-next').addEventListener('click',()=>{
  //   let wrapper =document.querySelector('.majorCarousel .swiper-wrapper')
  //   let transform = getComputedStyle(wrapper).transform
  //   let splittedTransform = transform.split(',')
  //   let tarnslateX= parseInt(splittedTransform[4])
    
  //   splittedTransform[4] =tarnslateX + -435
  //   console.log( splittedTransform.join())
  //   wrapper.style.transform = splittedTransform.join()
  //  })

  //  document.querySelector('.majorCarousel .swiper-button-prev').addEventListener('click',()=>{
  //   let wrapper =document.querySelector('.majorCarousel .swiper-wrapper')
  //   let transform = getComputedStyle(wrapper).transform
  //   let splittedTransform = transform.split(',')
  //   let tarnslateX= parseInt(splittedTransform[4])
    
  //   splittedTransform[4] =tarnslateX + 435
  //   console.log( splittedTransform.join())
  //   wrapper.style.transform = splittedTransform.join()
  //  })