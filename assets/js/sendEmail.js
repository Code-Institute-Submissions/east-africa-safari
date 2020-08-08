//  function sendMail(contactForm) {
//      emailjs.send("gmail", "josephine", {
//          "from_name": contactForm.name.value,
//          "from_email": contactForm.emailaddress.value,
//          "my_feedback": contactForm.message.value
//      })
//      then(
//          function(response) {
//              console.log("SUCCESS", response);
//          },
//          function(error) {
//              console.log("FAILED", error);
//          });
//  }

 function sendMail(contactForm) {

 emailjs.send("gmail", "josephine", {
 "from_name": contactForm.name.value,
 "from_email": contactForm.emailaddress.value,
 "my_feedback": contactForm.message.value
 })
 .then((response) => {
 console.log("SUCCESS", response);
 }).catch((error) => {
 console.log("FAILED", error);
 });
 }
