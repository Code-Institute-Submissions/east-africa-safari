function sendMail(contactForm) {
    emailjs.send("gmail", "josephine", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "my-feedback": contactForm.feedbacksummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}