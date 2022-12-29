$('.majorSlick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToScroll: 0.5,
    variableWidth:true,
    rtl: window.location.href.includes('/ar/') ?true:false,
   
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
           
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
//   $('.slickServices').on('afterChange',()=>{
//     let btnNext =document.querySelector('.slick-next')
//     let btnPrev =document.querySelector('.slick-prev')
//     let conditionCase = 'next'
//     let condition = conditionCase =='next'? btnNext.classList.contains('slick-disabled') :btnNext.classList.contains('slick-disabled')
//     if(condition){
//       if(conditionCase =='next') {
//         button.classList.add('prevNow')
//       conditionCase =  "prev"
//     }else{
//         button.classList.remove('prevNow')
//       conditionCase =  "next"
//       }
//     }
     
//   })
  
//   let span = document.createElement('span')
//   span.id ='nextArrow'
//   document.querySelector('.slickServices').appendChild(span)
  
//   let button = document.getElementById('nextArrow')
  
//   var nextSlide = function nextSlide(slider) {
//     $(slider).slick('slickNext');
//     document.querySelector('.slick-next').classList.contains('slick-disabled') && button.classList.add('prevNow') 
  
//   };
//   var prevSlide = function prevSlide(slider) {
//     $(slider).slick('slickPrev');
//     document.querySelector('.slick-prev').classList.contains('slick-disabled') && button.classList.remove('prevNow') 
  
//   };
  
//   button.addEventListener('click', function () {
   
  
//     return button.classList.contains('prevNow') ? prevSlide('.slickServices') : nextSlide('.slickServices');
//   });