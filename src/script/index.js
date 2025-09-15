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
