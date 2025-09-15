import '../styles/scss/main.scss';

const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const navButton = document.getElementById('navButton');

menu.style.display = 'none';

const setOpen = (open) => {
    if (!menu || !hamburger || !cross || !navButton)
        throw new Error('HTML content not loaded');
    navButton.classList.toggle('active');
    menu.classList.toggle('active');
    hamburger.toggleAttribute('hidden', open);
    cross.toggleAttribute('hidden', !open);
};

hamburger.addEventListener('click', () => {
    setOpen(true);
    menu.style.display = 'block';
});
cross.addEventListener('click', () => {
    setOpen(false);
    setTimeout(() => (menu.style.display = 'none'), 500);
});

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

for (let i = 0; i < 4; i++) {
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
