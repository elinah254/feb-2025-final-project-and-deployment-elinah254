document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    let formMessage = document.getElementById('formMessage');
    
    // Validate Name
    let name = document.getElementById('name').value;
    if (name === '') {
        valid = false;
        formMessage.textContent = 'Please enter your name.';
        formMessage.style.color = 'red';
    }

    // Validate Email
    let email = document.getElementById('email').value;
    if (email === '') {
        valid = false;
        formMessage.textContent = 'Please enter a valid email.';
        formMessage.style.color = 'red';
    }

    // Validate Message
    let message = document.getElementById('message').value;
    if (message === '') {
        valid = false;
        formMessage.textContent = 'Please enter a message.';
        formMessage.style.color = 'red';
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
    }
});
