const button = document.getElementById('menu-btn');
const navbar = document.getElementById('menu');

button.addEventListener('click', () => {
    button.classList.toggle('open');
    navbar.classList.toggle('flex');
    navbar.classList.toggle('hidden');

})