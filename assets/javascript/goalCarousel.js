let goalBi =document.getElementById('goalBI')
const goalCarousel= new Swiper('.goalCarousel', {
//  loop: true,
speed: 800,
    ease:'linear',
autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
 slidesPerView: "1", 
 effect: "fade",

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
goalCarousel.on('slideChange',(slider)=>{
 setTimeout(()=>{
  let fraction  = document.querySelector('.goalCarousel .swiper-slide-active').getAttribute('aria-label')
let splitted =fraction.split(' ')
let  fractionSpans = document.getElementById('goals-pagination-fraction').querySelectorAll('span')
fractionSpans[0].innerHTML = splitted[0]
fractionSpans[1].innerHTML = ` ${splitted[1]}  ${splitted[2]}`
let transform = 150 + (parseInt(splitted[0]) * 30) 
goalBi.classList.remove(goalBi.classList[goalBi.classList.length -1])
goalBi.classList.add(`rotate-[${transform}deg]`)
 },50)
})

let fraction  = document.querySelector('.goalCarousel .swiper-slide-active').getAttribute('aria-label')
let splitted =fraction.split(' ')
let  fractionSpans = document.getElementById('goals-pagination-fraction').querySelectorAll('span')
fractionSpans[0].innerHTML = splitted[0]
fractionSpans[1].innerHTML = ` ${splitted[1]}  ${splitted[2]}`


// const gc= document.getElementById('goalContainer')
// let firstVisit = false
// window.addEventListener('scroll',()=>{
//     if(window.scrollY > slides[0].offsetTop + gc.offsetTop - (window.innerHeight/1.6)){
//         if(!firstVisit){
//             firstVisit = true
//             slides[0].classList.add('active')
//             setInterval(()=>{
//                 handleNext()
//             },8000)
//         }
//     }
// })