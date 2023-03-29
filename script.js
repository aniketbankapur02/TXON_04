
const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the "active" class from all navigation links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add the "active" class to the clicked navigation link
        link.classList.add('active');
    });
});


const contactForm = document.querySelector('form');


contactForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent the form from submitting

   
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');

   
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        message: messageField.value
    }));


    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Your message has been sent!';
    successMessage.style.color = 'green';
    contactForm.appendChild(successMessage);
});
