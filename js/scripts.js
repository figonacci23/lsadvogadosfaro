/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// Navbar: add a "scrolled" state once the page scrolls past the hero top
const mainNav = document.getElementById('mainNav');
if (mainNav) {
    const updateNavState = () => {
        mainNav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', updateNavState, { passive: true });
    updateNavState();
}
