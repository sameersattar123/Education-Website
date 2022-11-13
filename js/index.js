const burger = document.querySelector(".burger")
const navbarr = document.querySelector(".navbar")
const right_navbar = document.querySelector(".right_navbar")
const navbarlist  = document.querySelector(".navbar-list ")


burger.addEventListener("click" , ()=>{
    right_navbar.classList.toggle("v-class-res")
    navbarlist.classList.toggle("v-class-res")
    navbarr.classList.toggle("h-nav-res")
})