const prevArrow = document.querySelector('.awarenessPrevArrow')
const nextArrow = document.querySelector('.awarenessNextArrow')
const slides = document.querySelectorAll('.awarenessSlide')
const slider = document.querySelector('.awarenessSlider')
let awarenessBrandIcons 
setTimeout(()=>{
    awarenessBrandIcons=  document.querySelectorAll('.awarenessBrandIcon') ;
},7000)
let aBIC = document.getElementById('aBIC')

let paginationDots =document.querySelectorAll('.awarenessPagination span')
let slideNumber = 0




const changeActivePaginationClass =(slideNo)=>{
     
    let activeClass = window.innerWidth >= 1024?'lg:w-[4.270vw]': 'w-[55px]'
  let nonActiveClass = window.innerWidth >= 1024?'lg:w-[1.354vw]': 'w-[25px]'
  paginationDots.forEach((item,index)=>{
      if(index == slideNo){
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


const hideAllSlidesExcept =(slideNo)=>{
    slides.forEach((item,index)=>{
        if(index == slideNo){
            item.classList.remove('hidden')
            item.classList.add('active')
        }else{
            item.classList.add('hidden')
            setTimeout(()=>{
                item.classList.remove('hidden')
            },500)
            item.classList.remove('active')
 
        }
    })
}

const changeBrandIcon =(slideNo)=>{
  let rotate = window.innerWidth >= 1024?`rotate(${slideNo * 15}deg)`: `rotate(-${slideNo * 15}deg)`
//   let rotate = 0
  if(awarenessBrandIcons.length != 3){
     awarenessBrandIcons = document.querySelectorAll('.awarenessBrandIcon')

    }
    awarenessBrandIcons.forEach((item,index)=>{
        item.querySelector('image').style.transition = '.8s all'
        if(index == slideNo){
          item.classList.add('active')
          item.querySelector('image').style.opacity =1
          
            
        }else{ 
            item.classList.remove('active')
          item.querySelector('image').style.opacity =0
           
            
        }
        item.style.transform = rotate
    })
}

const changeSlide =(slideNo)=>{ 
    changeActivePaginationClass(slideNo)
    hideAllSlidesExcept(slideNo)
    changeBrandIcon(slideNo)
}


const handlePrevious =()=>{
    slideNumber = slideNumber == 0 ? slides.length - 1 : slideNumber - 1
    changeSlide(slideNumber)
    clearInterval(myTimer)
    myTimer = setInterval(handleNext,8000)
}

const handleNext =()=>{
    slideNumber = slideNumber == slides.length - 1 ? 0 : slideNumber + 1
    changeSlide(slideNumber)
    clearInterval(myTimer)
    myTimer = setInterval(handleNext,8000)

}

const handleDot =(slideNo)=>{
    slideNumber = slideNo
    changeSlide(slideNo)
    clearInterval(myTimer)
    myTimer = setInterval(handleNext,8000)
}

paginationDots.forEach((dot,index)=>{
    dot.addEventListener('click', ()=> handleDot(index))
})
prevArrow.addEventListener('click',handlePrevious)
nextArrow.addEventListener('click',handleNext)

let myTimer 
const ac= document.getElementById('awarenessContainer')
let firstVisit = false
window.addEventListener('scroll',()=>{
    if(window.scrollY > slides[0].offsetTop + ac.offsetTop - (window.innerHeight/1.6)){
        if(!firstVisit){
            firstVisit = true
            slider.classList.add('active')
            myTimer = setInterval(handleNext,8000)
        }
    }
})