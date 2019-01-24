let inputUsd = document.querySelector('#usd'),
    inputRub = document.querySelector('#rub'),
    inputEur = document.querySelector('#eur'),
    inputCad = document.querySelector('#cad'),
    display = document.querySelector('.display'),
    dateDisplay = document.querySelector('#timestamp'),
    rateRub = document.querySelector('.rateRub'),
    rateEur = document.querySelector('.rateEur'),
    rateCad = document.querySelector('.rateCad'),
    refreshBtn = document.querySelector('.refresh'),
    data, usd, eur, rub, cad;

init();
setRefresh();

function init() {
    getRates();
    setInputUsd();
    setInputRub();
    setInputEur();
    setInputCad();
}

function getRates() {
    let request = new XMLHttpRequest();
    
    request.open('GET', 'https://openexchangerates.org/api/latest.json?app_id=23ac26e56c81446ea3b56f485c0aaa56&symbols=RUB,EUR,CAD'); // live server API
    // request.open('GET', 'js/current.json'); // local server
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState == 4 && request.status == 200) {
            data = JSON.parse(request.response);
            setRates();
            setTimestamp();
        } else if (request.status != 200) {
            showError();
        }
    });
}

function setRates() {
    usd = 1; // by API def
    rub = rateRub.textContent = data.rates.RUB.toFixed(2);
    eur = rateEur.textContent = data.rates.EUR.toFixed(2);
    cad = rateCad.textContent = data.rates.CAD.toFixed(2);
}

function setTimestamp() {
    let timestamp = new Date(data.timestamp*1000); // JS - in ms, UNIX timestamp - s
    let dateToday = new Date(timestamp).toLocaleString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    dateDisplay.textContent = dateToday;    
}

function setInputRub() {
    inputRub.addEventListener('input', () => {
        let input = parseFloat(inputRub.value) / rub;
        
        inputUsd.value = input.toFixed(2);
        inputEur.value = (input * eur).toFixed(2);
        inputCad.value = (input * cad).toFixed(2);
    });
}

function setInputUsd() {
    inputUsd.addEventListener('input', () => {
        let input = parseFloat(inputUsd.value);
        
        inputRub.value = (input * rub).toFixed(2);
        inputEur.value = (input * eur).toFixed(2);
        inputCad.value = (input * cad).toFixed(2);
    });
}

function setInputEur() {
    inputEur.addEventListener('input', () => {
        let input = parseFloat(inputEur.value) / eur;
        
        inputUsd.value = input.toFixed(2);
        inputRub.value = (input * rub).toFixed(2);
        inputCad.value = (input * cad).toFixed(2);
    });
}

function setInputCad() {
    inputCad.addEventListener('input', () => {
        let input = parseFloat(inputCad.value) / cad;
        
        inputUsd.value = input.toFixed(2);
        inputRub.value = (input * rub).toFixed(2);
        inputEur.value = (input * eur).toFixed(2);
    });
}

function setRefresh() {
    refreshBtn.addEventListener('click', () => {
        init();
        let input = parseFloat(inputUsd.value);
        
        inputRub.value = (input * rub).toFixed(2);
        inputEur.value = (input * eur).toFixed(2);
        inputCad.value = (input * cad).toFixed(2);
    });
}

function showError() {
    display.textContent = 'Something went wrong. Please, reload the page or try again later';
    display.style.color = 'var(--accent)';
    display.style.fontWeight = '600';
    display.style.fontSize = '110%';
}

// Copyright Date Script
let dates = document.querySelector('span#date');

if (new Date().getFullYear()>2019) {
    let dateCopyright = new Date().getFullYear();
    dates.textContent = `-${dateCopyright}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');