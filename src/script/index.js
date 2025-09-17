import '../styles/scss/main.scss';
import '@splidejs/splide/css';

const sidebarStateManagement = () => {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const cross = document.getElementById('cross');
    const navButton = document.getElementById('navButtonMobile');
    const navLinks = document.getElementsByClassName('navbar__link');
    const content = document.querySelector('.main-section');

    const setOpen = (open) => {
        if (
            !menu ||
            !hamburger ||
            !cross ||
            !navButton ||
            !content ||
            !navLinks
        )
            throw new Error('HTML content not loaded');
        navButton.classList.toggle('active');
        menu.classList.toggle('active');
        hamburger.toggleAttribute('hidden', open);
        cross.toggleAttribute('hidden', !open);
    };

    Array.from(navLinks).forEach((element) => {
        element.addEventListener('click', () => {
            setOpen(false);
            document.body.style.overflow = 'visible';
        });
    });

    hamburger.addEventListener('click', () => {
        setOpen(true);
        content.inert = true;
        document.body.style.overflow = 'hidden';
    });
    cross.addEventListener('click', () => {
        setOpen(false);
        content.inert = false;
        document.body.style.overflow = 'visible';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setOpen(false);
            content.inert = false;
            document.body.style.overflow = 'visible';
        }
    });
};

sidebarStateManagement();

function reorderNavbarForTabOrder() {
    const navbar = document.querySelector('.navbar');
    const logo = navbar.querySelector('.navbar__mainLogo');
    const menuIcons = navbar.querySelector('.navbar__menuIcons');
    if (!navbar || !logo || !menuIcons)
        throw new Error('HTML content not loaded');

    if (window.innerWidth < 1023) {
        if (logo.nextSibling !== menuIcons) {
            navbar.insertBefore(logo, menuIcons);
        }
    } else {
        if (menuIcons.nextSibling !== logo) {
            navbar.insertBefore(menuIcons, logo);
        }
    }
}

window.addEventListener('DOMContentLoaded', reorderNavbarForTabOrder);
window.addEventListener('resize', reorderNavbarForTabOrder);

const travelPointCardGenerator = () => {
    const cardContainer = document.getElementById(
        'travel-point-section-cards-container',
    );
    if (!cardContainer) {
        throw new Error('Card Container not loaded');
    }
    cardContainer.classList.add('travel-point-section__cards-container');

    const cardArray = [
        { heading: '500+', detail: 'Holiday Package' },
        { heading: '100', detail: 'Luxury Hotel' },
        { heading: '7', detail: 'Premium Airlines' },
        { heading: '2k+', detail: 'Happy Customer' },
    ];

    for (let i = 0; i < cardArray.length; i++) {
        let div = document.createElement('div');
        let h4 = document.createElement('h3');
        let p = document.createElement('p');

        h4.innerHTML = cardArray[i].heading;
        p.innerHTML = cardArray[i].detail;

        div.appendChild(h4);
        div.appendChild(p);

        div.classList.add('travel-point-section__card');
        div.tabIndex = 0;

        cardContainer.appendChild(div);
    }
};

travelPointCardGenerator();

import Splide from '@splidejs/splide';

new Splide('.splide', {
    type: 'loop',
}).mount();
