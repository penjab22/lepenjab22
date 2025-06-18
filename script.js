import ScrollReveal from 'scrollreveal';
import tealight from 'tealight';
import { renderMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {

    renderMenu();

    // --- Mobile Navigation ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileNavToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileNavToggle.querySelector('i').classList.add('fa-bars');
                mobileNavToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('.main-nav .nav-links li a');
    const headerHeight = document.querySelector('.main-header').offsetHeight;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 20;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === current) {
                a.classList.add('active');
            }
        });
    });

    // --- Scroll Reveal Animations ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false,
    });

    sr.reveal('.hero-content h1, .hero-content p', { delay: 400, origin: 'top' });
    sr.reveal('.hero-cta', { delay: 600 });
    sr.reveal('.about-text', { origin: 'left' });
    sr.reveal('.about-image', { origin: 'right' });
    sr.reveal('.content-section h2, .content-section .subtitle', { interval: 100 });
    sr.reveal('.menu-category', { interval: 200 });
    sr.reveal('#livraison h2, #livraison p, #livraison .btn', { interval: 150, viewFactor: 0.5 });
    sr.reveal('.reservation-phone', { delay: 200 });
    sr.reveal('.reservation-form input, .reservation-form textarea, .reservation-form button', { interval: 100 });
    sr.reveal('.gallery-grid img', { interval: 100 });
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-map', { origin: 'right' });

    // --- Lightbox for Gallery ---
    tealight('.gallery-grid a');

    // --- Reservation form handler (for demonstration) ---
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre demande de réservation ! Nous vous recontacterons bientôt pour confirmer. (Ceci est une démonstration)');
            reservationForm.reset();
        });
    }

});