document.getElementById('message-button').addEventListener('click', sendEmail);

// Credit: Code Institue and Email JS
// Bug fix: Use contactForm method to prevent form closing
function sendEmail(contactForm) {
    emailjs.init('user_cQ4AB0KpJse0GG5cv2LdL');
    emailjs.send('service_ih1qkca', 'template_wod5ktu', {
       'from_name': contactForm.fromname.value,
       'from_email': contactForm.email.value,
       'message': contactForm.message.value
    }).then(
        function (response) {
           alert('Your message has been sent!')
           console.log(response.status);
       },
        function (error) {
           alert('Whoops, your message has not been sent. Are all the fields filled in correctly?')
           console.log(error);
       },
    );
    return false;  
}
