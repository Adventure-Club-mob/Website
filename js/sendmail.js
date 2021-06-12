function send_mail(){
    document.querySelector('.loading').classList.add('display');

    var temp = {
        user_name: document.getElementById('userName').value,
        user_mail: document.getElementById('userMail').value,
        msg: document.getElementById('message').value,
    };

    emailjs.send('service_ac-kln', 'template_ac-kln', temp)
    .then(function(res){
        document.getElementById("userName").value = "";
        document.getElementById("userMail").value = "";
        document.getElementById("message").value = "";
        document.querySelector('.loading').classList.remove('display');
        document.querySelector('.sent-message').classList.add('display');
        console.log("Success", res.status);
    }).catch((error)=> {
        this.querySelector('.loading').classList.remove('display');
        this.querySelector('.error-message').classList.add('display');
    });
}
