function onGeoOk(position){
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    console.log(lat,lng);
}
function onGeoError(){
    alert('cant find oyu')
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
