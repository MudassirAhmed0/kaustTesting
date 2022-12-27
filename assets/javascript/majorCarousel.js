// const majorCarousel= new Swiper('.majorCarousel', {
//      loop: true,
//      slidesPerView: "auto", 
//      slidesPerGroup:1,
//      speed: 800,
//     ease:'linear',
//      // If we need pagination
//      pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//      },
   
//      // Navigation arrows
//      navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev',
//      },
   
     
//    });
      
//   //  document.querySelector('.majorCarousel .swiper-button-next').addEventListener('click',()=>{
//   //   let wrapper =document.querySelector('.majorCarousel .swiper-wrapper')
//   //   let transform = getComputedStyle(wrapper).transform
//   //   let splittedTransform = transform.split(',')
//   //   let tarnslateX= parseInt(splittedTransform[4])
    
//   //   splittedTransform[4] =tarnslateX + -435
//   //   console.log( splittedTransform.join())
//   //   wrapper.style.transform = splittedTransform.join()
//   //  })

//   //  document.querySelector('.majorCarousel .swiper-button-prev').addEventListener('click',()=>{
//   //   let wrapper =document.querySelector('.majorCarousel .swiper-wrapper')
//   //   let transform = getComputedStyle(wrapper).transform
//   //   let splittedTransform = transform.split(',')
//   //   let tarnslateX= parseInt(splittedTransform[4])
    
//   //   splittedTransform[4] =tarnslateX + 435
//   //   console.log( splittedTransform.join())
//   //   wrapper.style.transform = splittedTransform.join()
//   //  })

const nextBtn = document.querySelector('.majorCarouselNext')
const prevBtn = document.querySelector('.majorCarouselPrev')
const majorCarouselSlides = document.querySelectorAll('.majorCarouselSlide')
const majorPaginationDots = document.querySelectorAll('.majorPagination span')
let majorCarouselSlideNo = 0
let width =  window.innerWidth >= 1080? 22.65625:43 
let translateX = (window.innerWidth / 100) * width   

const changeMajorActivePaginationClass =()=>{
  let activeClass = window.innerWidth >= 1080?'lg:w-[4.270vw]': 'w-[45px]'
  let nonActiveClass = window.innerWidth >= 1080?'lg:w-[1.354vw]': 'w-[20px]'
  majorPaginationDots.forEach((item,index)=>{
      if(index == majorCarouselSlideNo){
          item.classList.add(activeClass)
          item.classList.remove('opacity-[0.5]')
          item.classList.remove(nonActiveClass)
      }else{
          item.classList.remove(activeClass)
          item.classList.add(nonActiveClass)
          item.classList.add('opacity-[0.5]')

      }
  })
}


const changeMajorSlide = ()=>{
  console.log(majorCarouselSlideNo)
  majorCarouselSlides.forEach((slide,index)=>{
    if(index == majorCarouselSlideNo){
      slide.classList.add('majorCarouselSlideActive')
    }else{
      slide.classList.remove('majorCarouselSlideActive')
    }
    slide.style.transform=`translateX(-${translateX * majorCarouselSlideNo}px)`
  })
}

const handleMajorNext =()=>{
  majorCarouselSlideNo = majorCarouselSlideNo != majorCarouselSlides.length - 1 ? majorCarouselSlideNo + 1: majorCarouselSlideNo
 changeMajorSlide()
 changeMajorActivePaginationClass()
}
const handlePrevNext =()=>{
  majorCarouselSlideNo = majorCarouselSlideNo != 0 ? majorCarouselSlideNo - 1: majorCarouselSlideNo
 changeMajorSlide()
 changeMajorActivePaginationClass()
}

const handleMajorSlideChange =(slideNo)=>{
  majorCarouselSlideNo = slideNo
  changeMajorSlide() 
 changeMajorActivePaginationClass()

}

majorPaginationDots.forEach((dot,index)=>{
  dot.addEventListener('click', ()=> handleMajorSlideChange(index))
})

majorCarouselSlides.forEach((slide,index)=>{
  slide.addEventListener('click', ()=> handleMajorSlideChange(index))

})

nextBtn.addEventListener('click',handleMajorNext)
prevBtn.addEventListener('click',handlePrevNext)