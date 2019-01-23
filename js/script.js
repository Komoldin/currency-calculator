let inputUsd = document.querySelector('#usd'),
    inputRub = document.querySelector('#rub'),
    inputEur = document.querySelector('#eur'),
    inputCad = document.querySelector('#cad'),
    display = document.querySelector('.display'),
    dateDisplay = document.querySelector('#timestamp'),
    rateRub = document.querySelector('.rateRub'),
    rateEur = document.querySelector('.rateEur'),
    rateCad = document.querySelector('.rateCad');

init();

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
            const data = JSON.parse(request.response);

            rateRub.textContent = data.rates.RUB.toFixed(2);
            rateEur.textContent = data.rates.EUR.toFixed(2);
            rateCad.textContent = data.rates.CAD.toFixed(2);

            let timestamp = new Date(data.timestamp*1000);
            let date = new Date(timestamp).toLocaleString(undefined, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            dateDisplay.textContent = `${date}`;

            // return data;
        } else if (request.status != 200) {
            showError();
        }
    });
}

function setInputRub() {
    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();
        
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.response);
                let replyUsd = parseFloat(inputRub.value) / data.rub;
                let replyEur = parseFloat(inputRub.value) / data.rub * data.eur;
                let replyCad = parseFloat(inputRub.value) / data.rub * data.cad;
                
                inputUsd.value = replyUsd.toFixed(2);
                inputEur.value = replyEur.toFixed(2);
                inputCad.value = replyCad.toFixed(2);
            } else if (request.status != 200) {
                showError();
            }
        });
    });
}

function setInputUsd() {
    inputUsd.addEventListener('input', () => {
        let request = new XMLHttpRequest();
        
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.response);
                let replyRub = parseFloat(inputUsd.value) * data.rub;
                let replyEur = parseFloat(inputUsd.value) * data.eur;
                let replyCad = parseFloat(inputUsd.value) * data.cad;
                
                inputRub.value = replyRub.toFixed(2);
                inputEur.value = replyEur.toFixed(2);
                inputCad.value = replyCad.toFixed(2);
            } else if (request.status != 200) {
                showError();
            }
        });
    });
}

function setInputEur() {
    inputEur.addEventListener('input', () => {
        let request = new XMLHttpRequest();
        
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.response);
                let replyUsd = parseFloat(inputEur.value) / data.eur;
                let replyRub = parseFloat(inputEur.value) / data.eur * data.rub;
                let replyCad = parseFloat(inputEur.value) / data.eur * data.cad;
                
                inputUsd.value = replyUsd.toFixed(2);
                inputRub.value = replyRub.toFixed(2);
                inputCad.value = replyCad.toFixed(2);
            } else if (request.status != 200) {
                showError();
            }
        });
    });
}

function setInputCad() {
    inputCad.addEventListener('input', () => {
        let request = new XMLHttpRequest();
        
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.response);
                let replyUsd = parseFloat(inputCad.value) / data.cad;
                let replyEur = parseFloat(inputCad.value) / data.cad * data.eur;
                let replyRub = parseFloat(inputCad.value) / data.cad * data.rub;
                
                inputUsd.value = replyUsd.toFixed(2);
                inputRub.value = replyRub.toFixed(2);
                inputEur.value = replyEur.toFixed(2);
            } else if (request.status != 200) {
                showError();
            }
        });
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
    let date = new Date().getFullYear();
    dates.textContent = `-${date}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');