const API_LINK = 'https://api.adviceslip.com/advice';

async function fetchAdvice() {
    const response = await fetch(API_LINK);
    const data = await response.json();

    document.getElementById('advice-number').innerHTML = 'Advice # ' + data.slip.id;
    document.getElementById('advice-text').innerHTML = '"' + data.slip.advice + '"';
}

fetchAdvice();
