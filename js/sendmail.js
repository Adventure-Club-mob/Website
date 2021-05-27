function send_mail(){
    var temp = {
        user_name: document.getElementById('userName').value,
        user_mail: document.getElementById('userMail').value,
        msg: document.getElementById('message').value,
    }

    emailjs.send('service_ac-kln', 'template_ac-kln', temp)
    .then(function(res){
        console.log("Success", res.status);
    })
}

