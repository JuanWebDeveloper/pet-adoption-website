/*===========================
<|-Variables     -|>
===========================*/
let btnBars = document.getElementById('btnBars');
let navbar = document.getElementById('navbar');
let fixedNavbar = document.getElementById('navigation');

/*<|-Object With All Navigation-|>*/
const navigation = {
    positionH: document.getElementById('positionH'),
    positionA: document.getElementById('positionA'),
    positionS: document.getElementById('positionS'),
    positionR: document.getElementById('positionR'),
    positionP: document.getElementById('positionP'),
    positionC: document.getElementById('positionC')
}

/*<|-Object With The Position Of The Page Sections-|>*/
const sections = {
    home: document.getElementById('home').getBoundingClientRect(),
    aboutUs: document.getElementById('aboutUs').getBoundingClientRect(),
    services: document.getElementById('services').getBoundingClientRect(),
    requirements: document.getElementById('requirements').getBoundingClientRect(),
    adopt: document.getElementById('adopt').getBoundingClientRect(),
    contact: document.getElementById('contact').getBoundingClientRect()
}

/*=====================================================
<|-Hide And Show Menu                               -|>
=====================================================*/
let lastScrollTop = 0;

window.addEventListener("scroll", function(){
    let scrollUp = window.pageYOffset; 

    if (scrollUp > lastScrollTop){
        fixedNavbar.classList.add('toShow');
    } else {
        fixedNavbar.classList.remove('toShow');
    }

    lastScrollTop = scrollUp;

}, false);

/*=====================================================
<|-Fixed Navbar And Active Effect                   -|>
=====================================================*/
window.onscroll = function() {
    /*<|-Fixed-|>*/
    if (window.scrollY >= 0) {
        fixedNavbar.classList.add('navFixed');
        $('header nav ul li a').addClass('textFixed');
    }else {
        fixedNavbar.classList.remove('navFixed');
        $('header nav ul li a').removeClass('textFixed');
    }

    /*<|-Active Effect-|>*/
    // Home.
    if (window.scrollY >= sections["home"].top) {
        navigation["positionH"].classList.add('active');
    } else {
        navigation["positionH"].classList.remove('active');
    }

    // About Us.
    if (window.scrollY >= sections["aboutUs"].top) {
        navigation["positionH"].classList.remove('active');
        navigation["positionA"].classList.add('active');
    } else {aboutUs
        navigation["positionA"].classList.remove('active');
    }

    // Services
    if (window.scrollY >= sections["services"].top) {
        navigation["positionA"].classList.remove('active');
        navigation["positionS"].classList.add('active');
    } else {
        navigation["positionS"].classList.remove('active');
    }

    // Requirements
    if (window.scrollY >= sections["requirements"].top) {
        navigation["positionS"].classList.remove('active');
        navigation["positionR"].classList.add('active');
    } else {
        navigation["positionR"].classList.remove('active');
    }

    // Adopt
    if (window.scrollY >= sections["adopt"].top) {
        navigation["positionR"].classList.remove('active');
        navigation["positionP"].classList.add('active');
    } else {
        navigation["positionP"].classList.remove('active');
    }

    // Contact
    if (window.scrollY >= sections["contact"].top) {
        navigation["positionP"].classList.remove('active');
        navigation["positionC"].classList.add('active');
    } else {
        navigation["positionC"].classList.remove('active');
    }
};

/*=====================================================
<|-Responsive Navigation Bar                        -|>
=====================================================*/
btnBars.addEventListener('click', function() {
    if (btnBars.checked) {
        navbar.classList.add('navbarResponsive');
    } else {
        navbar.classList.remove('navbarResponsive'); 
    } 
});
