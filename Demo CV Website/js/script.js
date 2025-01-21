$(document).ready(function(){
    $(window).scroll(function(){    
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2.5,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Viết một đoạn mã lệnh hoặc function để truy cập dữ liệu từ localStorage, lấy thông tin vừa mới push vào.
let lstAccount = JSON.parse(localStorage.getItem('lstAccount'));
console.log('data', lstAccount);

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
document.getElementById("click").onclick = function() { 
  
    document.getElementById("id01").style.display = "none"; 

} 

var modal1 = document.getElementById('id02');   
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

let elm_signup = document.getElementById('signupbtn');
let elm_signupform = document.getElementById('form-signup');

// let arr_username = [];
// let arr_password = [];

let elm_emailsignup = document.getElementById('email');
let elm_pswsignup = document.getElementById('psw');
let elm_psws1signup = document.getElementById('psw1');

elm_signupform.addEventListener('submit', function(event){
    event.preventDefault();
    // let emailsignup = elm_emailsignup.value;
    // let pswsignup = elm_pswsignup.value;
    // let psw1signup = elm_psws1signup.value;

    let newAccount = {
        email: elm_emailsignup.value,
        pswsignup: elm_pswsignup.value,
        psw1signup: elm_psws1signup.value
    }

    if ((newAccount.pswsignup) == (newAccount.psw1signup) ){
        // arr_username.push(emailsignup);
        // arr_password.push(pswsignup);
        alert('Sign up successfully');
        lstAccount.push(newAccount);
        localStorage.setItem('lstAccount', JSON.stringify(lstAccount));
        document.getElementById("id01").style.display = "none"; 
    }
    else{
        document.getElementById("confirm-signup").innerHTML="Two passwords are not the same. Please try again!"
    }
});

let elm_login = document.getElementById('login1');
let elm_form = document.getElementById('form-login');

let elm_username = document.getElementById('username');
let elm_password = document.getElementById('pswlogin');

elm_form.addEventListener('submit', function(event){
    event.preventDefault();

    let username = elm_username.value;
    let flag = 0; 
    let length = lstAccount.length;

    for(let i = 0; i < length; i++){
        
        if(username === lstAccount[i].email){
            flag = 1;

            if(elm_password.value ===  lstAccount[i].pswsignup){
                flag = 2;
                modal1.click();
            updateUsername(username);
            }
            break;
        }
    }

    if(flag === 0){
        document.getElementById("confirm").innerHTML="You don't have an account, please sign up!"
    }else if(flag === 1){
        document.getElementById("confirm").innerHTML="Wrong password"
    }else{
        modal1.click();
        updateUsername(username);
    }
})
