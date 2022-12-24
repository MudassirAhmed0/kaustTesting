const closer = document.getElementById('videoCloser')
const videoPopup = document.getElementById('videoPopup')
const play = document.getElementById('play')


const closePopup =()=>{
     
    videoPopup.classList.remove('active')
}
const openPopup =()=>{
     
    videoPopup.classList.add('active')
}

closer.addEventListener('click',closePopup)
play.addEventListener('click',openPopup)

window.addEventListener('click',(e)=>{
    e.target.id=='videoOverlay' && closePopup()
})