const videoBrandIcons = document.querySelectorAll('.vBI')
let activeVBI = 3
setInterval(()=>{
  activeVBI = activeVBI ===3 ?0 :activeVBI+ 1
  videoBrandIcons.forEach((item,index)=>{
    if(index ==activeVBI){
      item.classList.remove('opacity-0')
    }else{
      item.classList.add('opacity-0')
    }
  })
},800)
