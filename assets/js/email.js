// function initEmailJS() {
//     emailjs.init("user_cQ4AB0KpJse0GG5cv2LdL");
// };
// initEmailJS();

// function validateMessage() {
//     let name = document.getElementById("fromname");
//     let email = document.getElementById("email");
//     let message = document.getElementById("message");
//     let submitButton = document.getElementById("submit-button")

//     submitButton.addEventListener("click", (e) => {
//         e.preventDefault;
//         if (name.value == "" || email.value == "" || message.value == "") {
//             error();
//         } else {
//             sendEmail(name.value, email.value, message.value);
//             success();
//         }
//     });
// }
// validateMessage();

// function sendEmail(name, email, message) {
//     emailjs.send("gmail", "template_wod5ktu", {
//         to_name: "Card Memory Game Team",
//         from_name: name,
//         from_email: email,
//         message: message,
//     });
// }

// function error() {
//     console.log("Fix this later")
// }

// function success() {
//     console.log("Email sent")
// }

/**
 * [sendEmail to send email using EmailJS
 * Credit: Code Institute material "Sending Emails Using EmailJS"]
 * The API that is used is described here: https://www.emailjs.com/
 * @param contactForm [The contact form object]
 */
 function sendEmail(contactForm) {
    emailjs.init("user_cQ4AB0KpJse0GG5cv2LdL");
    emailjs.send("gmail", "template_wod5ktu", {
        "from_name": contactForm.fromname.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    }).then(
        function (response) {
            // Success sending email
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

