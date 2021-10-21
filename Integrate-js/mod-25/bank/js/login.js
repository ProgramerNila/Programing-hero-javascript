document.getElementById('login-submit').addEventListener('click',function () {
    const emailValue = document.getElementById('user-email');
    const mailvalue = emailValue.value;
    const pass = document.getElementById('user-password');
    const passvalue = pass.value;
    if (mailvalue=='bapp@sontan.com'&&passvalue=='121212') {
        window.location.href='index.html'
    } else {
        document.getElementById('m').style.display='block'
    }
})
