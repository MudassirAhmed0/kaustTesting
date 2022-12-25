const prevArrow = document.querySelector('.awarenessPrevArrow')
const nextArrow = document.querySelector('.awarenessNextArrow')
const slides = document.querySelectorAll('.awarenessSlide')
const slider = document.querySelector('.awarenessSlider')
const awarenessBrandIcons = document.querySelectorAll('.awarenessBrandIcon')
let paginationDots =document.querySelectorAll('.awarenessPagination span')
let slideNumber = 0




const changeActivePaginationClass =(slideNo)=>{
    paginationDots.forEach((item,index)=>{
        if(index == slideNo){
            item.classList.add('w-[4.270vw]')
            item.classList.remove('opacity-[0.5]')
            item.classList.remove('w-[1.354vw]')
        }else{
            item.classList.remove('w-[4.270vw]')
            item.classList.add('w-[1.354vw]')
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
    awarenessBrandIcons.forEach((item,index)=>{
        if(index == slideNo){
            item.classList.remove('hidden')
            setTimeout(()=>{
                item.classList.add('active')
            },100)
        }else{
            item.classList.add('hidden')
            item.classList.remove('active')

        }
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