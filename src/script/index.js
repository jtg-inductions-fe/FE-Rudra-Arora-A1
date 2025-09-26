import '@splidejs/splide/css';

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('loader--hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

window.addEventListener('scroll', () => {
    const heroSection = document.getElementById('hero');
    const navBar = document.getElementById('navbar');
    if (
        window.scrollY >
        heroSection.offsetTop + heroSection.offsetHeight - 800
    ) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

const sidebarStateManagement = () => {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const cross = document.getElementById('cross');
    const navButton = document.getElementById('navButtonMobile');
    const navLinks = document.getElementsByClassName('navbar__link');
    const content = document.getElementById('mainSection');
    const footer = document.getElementById('footer');

    const setOpen = (open) => {
        if (!menu || !hamburger || !cross || !navButton || !content || !footer)
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
        footer.inert = true;
        document.body.style.overflow = 'hidden';
    });
    cross.addEventListener('click', () => {
        setOpen(false);
        content.inert = false;
        footer.inert = false;
        document.body.style.overflow = 'visible';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setOpen(false);
            content.inert = false;
            footer.inert = false;
            document.body.style.overflow = 'visible';
        }
    });
};

sidebarStateManagement();

function reorderNavbarForTabOrder() {
    const navbar = document.querySelector('.navbar');
    const logo = navbar.querySelector('.navbar__mainLogo');
    const menuIcons = navbar.querySelector('.navbar__menuIcons');
    const pagination = document.getElementById('splidePagination');
    const arrows = document.getElementById('splideArrows');
    const splide = document.getElementById('splide');
    const partnerLogo = document.getElementsByClassName(
        'hero-section__partner-logo',
    );
    if (!navbar || !logo || !menuIcons)
        throw new Error('HTML content not loaded');

    if (window.innerWidth < 1023) {
        if (logo.nextSibling !== menuIcons) {
            navbar.insertBefore(logo, menuIcons);
            splide.insertBefore(pagination, arrows);
        }
    } else {
        if (menuIcons.nextSibling !== logo) {
            navbar.insertBefore(menuIcons, logo);
            splide.insertBefore(arrows, pagination);
        }
    }

    if (window.innerWidth >= 1440) {
        Array.from(partnerLogo).forEach((element) => {
            element.tabIndex = -1;
        });
    } else {
        Array.from(partnerLogo).forEach((element) => {
            element.tabIndex = 0;
        });
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
        let h4 = document.createElement('h4');
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

const createAccordion = (menuEl, openBtn, closeBtn, nextList) => {
    if (!menuEl || !openBtn || !closeBtn) {
        throw new Error('Accordion elements not found');
    }
    menuEl.inert = true;

    openBtn.addEventListener('click', () => {
        openBtn.toggleAttribute('hidden');
        closeBtn.toggleAttribute('hidden');
        setTimeout(() => menuEl.classList.toggle('active'), 150);
        if (nextList) nextList.classList.toggle('active');
        menuEl.inert = false;
    });

    closeBtn.addEventListener('click', () => {
        openBtn.toggleAttribute('hidden');
        closeBtn.toggleAttribute('hidden');
        menuEl.classList.toggle('active');
        if (nextList) {
            setTimeout(() => nextList.classList.toggle('active'), 100);
        }
        menuEl.inert = true;
    });
};

const emailValidation = () => {
    const emailInput = document.getElementById('email');
    const submit = document.getElementById('submit');
    const inputGroup = document.getElementById('newsletter-input-group');
    const form = document.getElementById('form');

    if (!emailInput || !submit || !inputGroup) {
        throw new Error('HTML content not loaded');
    }

    const message = document.createElement('p');
    submit.addEventListener('click', () => {
        if (!emailInput.value) {
            if (!inputGroup.contains(message)) {
                emailInput.classList.add('input-error');
                message.innerText = 'Please enter a valid E-mail';
                message.className = 'email-error-msg';
                inputGroup.appendChild(message);
                if (window.innerWidth < 1024) {
                    form.style.gap = 0;
                }
            }
        } else {
            emailInput.value = '';
            alert('E-mail Submitted');
            emailInput.classList.remove('input-error');
            inputGroup.removeChild(message);
            if (window.innerWidth < 1024) {
                form.style.gap = '33px';
            }
        }
    });
};

emailValidation();

const footerSectionAccordion = () => {
    const companyMenu = document.getElementById('company-menu');
    const contactMenu = document.getElementById('contact-menu');
    const meetMenu = document.getElementById('meet-menu');

    const companyOpenMenu = document.getElementById('company-open-menu');
    const contactOpenMenu = document.getElementById('contact-open-menu');
    const meetOpenMenu = document.getElementById('meet-open-menu');

    const companyCloseMenu = document.getElementById('company-close-menu');
    const contactCloseMenu = document.getElementById('contact-close-menu');
    const meetCloseMenu = document.getElementById('meet-close-menu');

    const contactList = document.getElementById('contact-list');
    const meetList = document.getElementById('meet-list');

    companyMenu.inert = true;
    contactMenu.inert = true;
    meetMenu.inert = true;

    if (
        !companyMenu ||
        !contactMenu ||
        !meetMenu ||
        !companyOpenMenu ||
        !contactOpenMenu ||
        !meetOpenMenu ||
        !companyCloseMenu ||
        !contactCloseMenu ||
        !meetCloseMenu ||
        !contactList ||
        !meetList
    )
        throw new Error('HTML content not loaded');

    createAccordion(
        companyMenu,
        companyOpenMenu,
        companyCloseMenu,
        contactList,
    );
    createAccordion(contactMenu, contactOpenMenu, contactCloseMenu, meetList);
    createAccordion(meetMenu, meetOpenMenu, meetCloseMenu, null);
};

footerSectionAccordion();
