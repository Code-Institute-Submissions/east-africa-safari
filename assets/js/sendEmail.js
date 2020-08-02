function sendMail(contactform) {
    emailjs.send("gmail", "josephine", {
        "from_name": contactform.name.value,
        "from_email": contactform.emailaddress.value,
        "my-feedback": contactform.feedbacksummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}