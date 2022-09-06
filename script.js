const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener ("click", () =>{
    
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach( n => n. 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    })
)

const form = document.getElementById('form');
const Email = document.getElementById('email');
const Error_msg = document.getElementById('error');


function invalidEmail(e){

    if ( Email.value !== Email.value.toLowerCase()){
        Error_msg.innerHTML = 'Please Enter your Email in lowerCase. Ex: hello@example.com';
        Error_msg.style.display = 'block';
        e.preventDefault();
    }else {
        Error_msg.style.display = 'none';
    }
}


form.addEventListener('click', invalidEmail)

