document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (validateEmail(email)) {
        message.textContent = 'Kiitos tilauksestasi!';
        message.style.color = 'white';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}