
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // to toggle the nav 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // to animate the links 
        navLinks.forEach ((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .8}s`;
            }
        })

        //the burger aniamation 
        burger.classList.toggle('toggle');
    })


}

navSlide();