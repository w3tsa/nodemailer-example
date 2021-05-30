const submitBtn = document.querySelector('.button-primary')
const emailInput = document.querySelector('#exampleEmailInput')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(emailInput.value) {
        sendEmail()
        alert('thanks')
    } else {
        alert('please subscribe')
    }
})


sendEmail = async () => {
    const API_URL = 'http://localhost:5000/subscribe';
    const email = emailInput.value;
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            email
        })
    });
    const data = await response.json();
}
