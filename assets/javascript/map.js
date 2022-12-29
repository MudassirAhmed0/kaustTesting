function myMap() {
    var mapProp = {  
         center: { lat:27.920091, lng: 34.903958 },  
        //  center: ( ),  
        zoom: 9.5,
        mapTypeId: 'satellite' ,
        draggable: true
    };

 
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

   
    const zoomInBtn = document.getElementById('gm-zoom-in')
google.maps.event.addDomListener(zoomInBtn, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });
    
    const zoomOutBtn = document.getElementById('gm-zoom-out')

    google.maps.event.addDomListener(zoomOutBtn, 'click', function() {
        map.setZoom(map.getZoom() - 1);
    });

    const contentString =
    `<div id="content" class='font-[nunito]'> 
      <img id='closeWindow' src='./assets/images/svgs/close.svg'/>

    <div id="siteNotice"> 
    </div>
    <h5 id="firstHeading" class="firstHeading ">Shushah Island</h5> 
    <div id="bodyContent"> 
    <div >
    <img class='w-full' src='./assets/images/map/ats-window.jpg'/>
    </div>
    <a href='https://www.google.com/maps/place/27%C2%B056'03.7%22N+34%C2%B054'14.8%22E/@27.9343637,34.9019123,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x623ecb33d80dfadb!8m2!3d27.9343637!4d34.904101' target='_blank'>View on the map</a>
    </div>
    </div>`;
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Shushah Island",
  });
  let image = {
    url:'./assets/images/map/pin.png',
    scaledSize: new google.maps.Size(50, 50)
  }
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(27.934363695177673,34.904101026832535) ,
        map: map,
        title: "Shushah Island",
        icon: image,
    });
    let firstVisit = true
    const handleMapHover =() => {
        if(firstVisit){
            map.setZoom(10);
            firstVisit =false
        }

    }
    map.addListener("mouseover", handleMapHover);
    // map.addListener("mouseout", () => {
    //     map.setZoom(9.5);
    // });

    marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  infowindow.open({
    anchor: marker,
    map,
  });
}
   

 let srollBelow = document.getElementById('scrollBelow')

 const scrollDown =()=>{
    window.scrollTo(0,window.innerHeight)
 }
 srollBelow.addEventListener('click',(scrollDown))