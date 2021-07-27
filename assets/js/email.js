/* Using Email JS and form validation, this script
sends emails to the site owner with a message from
the client. */ 

let formName = document.getElementById('fromName');
let formEmail = document.getElementById('email');
let messsage = document.getElementById('message');
var errorMsgName = document.getElementById('name-error');
var errorMsgEmail = document.getElementById('email-error');
var errorMsgMsg = document.getElementById('msg-error');

// Credit for function structure: W3 Schools 
function validateForm() {
    // variables to store the value of form inputs
    const name = document.querySelector('#fromName').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#message').value;
    // If loop to test if form inputs are empty
    if (name === "") {
        errorMsgName.innerHTML = `Please enter your full name`;
        errorMsgName.style.color = '#FF0000';
    } else if (email === "") {
        errorMsgEmail.innerHTML = `Please enter your full email address`;
        errorMsgEmail.style.color = '#FF0000';
    } else if (msg === "") {
        errorMsgMsg.innerHTML = `Please enter a message`;
        errorMsgMsg.style.color = '#FF0000';
    } else {
        sendEmail();
    }
    return false;
}

// Credit: Code Institue and Email JS
// Bug fix: Use contactForm method to prevent form closing
function sendEmail() {
    // Removes error messages from successfully submitted form
    errorMsgName.remove();
    errorMsgEmail.remove();
    errorMsgMsg.remove();
    // Calls Email JS and sends email
    emailjs.init('user_cQ4AB0KpJse0GG5cv2LdL');
    emailjs.send('service_ih1qkca', 'template_wod5ktu', {
       'from_name': fromName.value,
       'from_email': email.value,
       'message': messsage.value
    }).then(
        function (response) {
           alert('Your message has been sent!')
       },
        function (error) {
           alert('Whoops, your message has not been sent. Are all the fields filled in correctly?')
       },
    );
    return false;  
}
