document.addEventListener('DOMContentLoaded', function () {
    
    // Mobile Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Toggle mobile menu when the hamburger icon is clicked
    hamburger.addEventListener('click', function () {
        mobileMenu.classList.add('open');  // Open the mobile menu
        hamburger.setAttribute('aria-expanded', 'true');
    });

    // Close the mobile menu when the close button inside the menu is clicked
    closeBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('open');  // Close the menu
        hamburger.setAttribute('aria-expanded', 'false');
    });

    // Automatically close the mobile menu when a link is clicked
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');  // Close the menu
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Navbar Background Change on Scroll
    const navbar = document.getElementById('navbar');
    const scrollTrigger = 300;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= scrollTrigger) {
            navbar.classList.add('solid-background');
        } else {
            navbar.classList.remove('solid-background');
        }
    });

});