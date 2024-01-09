// Add blur in header //
const blurHeader = ()=> {
    let header = document.getElementById("header");
    
    window.scrollY > 50 ? header.classList.add("blur_header") : header.classList.remove("blur_header")
}
window.addEventListener('scroll', blurHeader);
window.scrollY > 50 ? header.classList.add("blur_header") : header.classList.remove("blur_header")
// ============================================= //



// Open And Close NavBar //
const navBar = document.getElementById("navMenu"),
    openNavBar = document.getElementById("openNav"),
    closeNavBar = document.getElementById("closeNav");

openNavBar.addEventListener('click', ()=> {
    navBar.classList.add("show_menu")
})

const linkAction = ()=> {
    navBar.classList.remove("show_menu")
}

closeNavBar.addEventListener('click', ()=> {
    linkAction()
})

// close navBar in click on any navLink //
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach(e => {e.addEventListener('click',  linkAction)})

// ============================================= //

