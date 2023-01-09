import DG from '2gis-maps';
import {validateIp} from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

// const mapArea = document.querySelector('#map')
const map = DG.map('map', {
    'center': [54.98, 82.89],
    'zoom': 13
});
DG.marker([54.98, 82.89]).addTo(map).bindPopup();

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_BTEx96VQechKALwxYuh6dlc3dPyQW&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(setInfo)
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    } 
}

function setInfo(mapData) {

    const {country, region, timezone} = mapData.location.country

    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + ' ' + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.locate
}