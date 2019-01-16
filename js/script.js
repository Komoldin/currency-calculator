let inputRub = document.querySelector('#RUB'),
    inputUsd = document.querySelector('#USD'),
    display = document.querySelector('.display'),
    dateDisplay = document.querySelector('#date'),
    rateRub = document.querySelector('.rateRub');

init();

function init() {
    getRate();
    setInput();
}

function getRate() {
    let request = new XMLHttpRequest();
    
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            rateRub.textContent = data.usd;
            dateDisplay.textContent = `${data.dateMM}.${data.dateDD}.${data.dateYYYY}`;
        }
    });
}

function setInput() {
    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();
        
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                
                inputUsd.value = Number.parseFloat(inputRub.value / data.usd).toFixed(2);
            } else {
                inputUsd.value = 'Something went wrong';
            }
        });
    });
}

function showError() {
    display.textContent = 'Something went wrong. Please, reload the page or try again later';
    display.style.color = 'var(--accent)';
    display.style.fontWeight = '600';
    display.style.fontSize = '110%';
    // display.style.textTransform = 'uppercase';
}