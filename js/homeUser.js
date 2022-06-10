
const menuLogo = document.querySelector(".contact-menu-logo");
menuLogo.addEventListener("click", () =>{
    document.querySelector(".body-menu").classList.toggle("open");
    document.querySelector(".contact-menu-logo").classList.toggle("open");
})
//AL HACER CLICK EL BOTON CERRAR SESION
const cerrar = document.querySelector(".menu-cerrar-sesion");
cerrar.addEventListener("click", () =>{
    document.querySelector(".contact-cerrar-sesion").classList.toggle("open");
})
const filterContent = document.querySelector(".img-filter");
filterContent.addEventListener("click", () =>{
    document.querySelector(".filter-content").classList.toggle("open");
    document.querySelector(".img-filter").classList.toggle("open");
})

// ACTIVACION DE DISTRITOS
const D1 = document.querySelector(".D1");
D1.addEventListener("click", () =>{
    document.querySelector(".D1").classList.toggle("open");
})
const D2 = document.querySelector(".D2");
D2.addEventListener("click", () =>{
    document.querySelector(".D2").classList.toggle("open");
})
const D3 = document.querySelector(".D3");
D3.addEventListener("click", () =>{
    document.querySelector(".D3").classList.toggle("open");
})
const D4 = document.querySelector(".D4");
D4.addEventListener("click", () =>{
    document.querySelector(".D4").classList.toggle("open");
})
const D5 = document.querySelector(".D5");
D5.addEventListener("click", () =>{
    document.querySelector(".D5").classList.toggle("open");
})