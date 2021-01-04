let latLong;

let mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiampoaWdneiIsImEiOiJja2pqMGdlbnYxd2U0MnRwZHlleTJ6Ym44In0.fZGF00ABND8HuqBvoBsAxQ' // public token
}).addTo(mymap);

let marker = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

const user1 = {
    username: "kingcoleslaw42",
    country: "America",
    Lat: 51.5,
    Long: -0.09,
    bio: "Colter is a bonafide badass, he codes and goes to flatiron, and has hella skillz at 99, jk he a newb meaning he has a life"
}

const markerText = `
    <h1>${user1.username}</h1>
    <b>country: ${user1.country}</b>
    <b>bio:</b> <p>${user1.bio}</b>
    `
marker.bindPopup(markerText).openPopup();



let popup = L.popup();


function onMapClick(e) {
    latLong = e.latlng
    const lat = latLong["lat"]
    const lng = latLong["lng"]
    document.querySelector('#lat').innerText = lat
    document.querySelector('#long').innerText = lng
}

mymap.on('click', onMapClick);


let inputs = document.querySelectorAll('input')
