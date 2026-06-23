var typed = new Typed('.typing', {
    strings: [
        'Python Full Stack Developer',
        'Frontend Developer',
        'React.js Developer',
        'Web Developer'
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});

// AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Navbar Background Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if(window.scrollY > 50){
        header.style.background = 'rgba(5,8,22,0.8)';
    }
    else{
        header.style.background = 'transparent';
    }
});