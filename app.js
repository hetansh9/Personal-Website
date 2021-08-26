const contactForm  = document.querySelector('.contact-form');

let ename = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    // console.log('submit clicked ');
    let formData  = {
        name: ename.value,
        email: email.value,
        message: message.value
    }

    // console.log(formData);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'applicaiton/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            ename.value = '';
            email.value = '';
            message.value = '';
        }else {
            alert('Unable to send email');
        }
    }

     xhr.send(JSON.stringify(formData));
    
})