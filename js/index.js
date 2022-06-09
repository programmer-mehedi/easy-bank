
document.getElementById('login-submit').addEventListener('click' ,function(){
    //email check 
       const userEmail = document.getElementById('user-email').value;
    //get password
       const userPassword = document.getElementById('user-password').value;
    //email-password check
    if(userEmail =='mahadi@gmail.com' && userPassword == 'mahadi'){
        window.location.href = 'banking.html'
    }
});