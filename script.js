// For multiple texts in intro
const typed = new Typed('.multiple-text', {
    strings: ['2024 MTech Graduate from IIIT ALLAHABAD', 'Software Developement Enthusiast', 'Web Developement Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Scrolling Introduction
ScrollReveal().reveal('.header-text', {origin:'top'});
ScrollReveal().reveal('.header-text h1', {origin:'left'});
ScrollReveal().reveal('.header-text h3', {origin:'right'});

ScrollReveal().reveal('sub-title', {origin:'top'});
