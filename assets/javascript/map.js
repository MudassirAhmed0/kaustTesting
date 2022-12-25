function myMap() {
    var mapProp = {  
         center: { lat: 27.934363695177673, lng: 34.904101026832535 },
        zoom: 9.5,
        mapTypeId: 'satellite' ,
        draggable: false
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
    <button>View on the map</button>
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