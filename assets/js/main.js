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


// Scroll Up //
const scroll = document.getElementById("scrollUp");

const scrollUpOnClick = ()=> {
    scrollTo(0,0)
}

scroll.addEventListener('click', scrollUpOnClick)

const scrollUp = ()=> {
    this.scrollY >= 300 ? scroll.classList.add('show_scroll') : scroll.classList.remove('show_scroll')
}

window.addEventListener('scroll', scrollUp)


// ============================================= //


// Write The Date in footer //
document.getElementById("footerDate").innerHTML = new Date().getFullYear();
// ============================================= //
