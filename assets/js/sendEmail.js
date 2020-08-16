

 function sendMail(contactForm) {
    emailjs
        .send("gmail", "josephine", {
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
            my_feedback: contactForm.message.value,
        })
        .then((response) => {
            console.log("SUCCESS", response);
        })
        .catch((error) => {
            console.log("FAILED", error);
        });
}
