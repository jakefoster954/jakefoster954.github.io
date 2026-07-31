const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#main-menu');
const menuItems = mobileMenu.querySelectorAll('a');
const header = document.querySelector('.header.container');
const interestCards = document.querySelectorAll('.project-item');
const desktopMedia = window.matchMedia('(min-width: 1200px)');
const horizontalCardsMedia = window.matchMedia('(min-width: 768px)');
const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

const setMenuOpen = (isOpen) => {
    menuButton.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('active', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
};

menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuButton.focus();
    }
});

const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 250);
};

document.addEventListener('scroll', updateHeader, { passive: true });
desktopMedia.addEventListener('change', () => setMenuOpen(false));
updateHeader();

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        setMenuOpen(false);
    });
});

interestCards.forEach((card) => {
    card.addEventListener('focus', () => {
        if (!horizontalCardsMedia.matches) {
            return;
        }

        requestAnimationFrame(() => {
            card.scrollIntoView({
                behavior: reducedMotionMedia.matches ? 'auto' : 'smooth',
                block: 'center'
            });
        });
    });
});