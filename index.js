function sendMessage() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  console.log(params);
  emailjs
    .send("service_3roca9l", "template_ozgg3zn", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}
