
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const styleSwitcherToggle = document.querySelector(".contact-logo-menu");
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".contact-logo-menu-contend").classList.toggle("open");
    document.querySelector(".contact-logo-menu").classList.toggle("open");
})