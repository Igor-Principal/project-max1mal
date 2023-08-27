const links = document.querySelectorAll('.prices-item-link');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
    links.forEach(l => l.classList.remove('current'));
    link.classList.add('current');
    });
    link.addEventListener('focus', () => {
    links.forEach(l => l.classList.remove('current'));
    link.classList.add('current');
    });
});