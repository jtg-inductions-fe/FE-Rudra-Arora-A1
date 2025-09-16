import '../styles/scss/main.scss';

const sidebarStateManagement = () => {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const cross = document.getElementById('cross');
    const navButton = document.getElementById('navButtonMobile');
    const navLinks = document.getElementsByClassName('navbar__link');

    menu.style.display = 'none';

    const setOpen = (open) => {
        if (!menu || !hamburger || !cross || !navButton)
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
            setTimeout(() => (menu.style.display = 'none'), 500);
        });
    });

    hamburger.addEventListener('click', () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
        menu.style.display = 'block';
    });
    cross.addEventListener('click', () => {
        setOpen(false);
        document.body.style.overflow = 'visible';
        setTimeout(() => (menu.style.display = 'none'), 500);
    });
};

sidebarStateManagement();

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
