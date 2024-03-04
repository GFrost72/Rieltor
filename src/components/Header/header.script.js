document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Переключение видимости меню
    function toggleMenu() {
        burgerMenu.classList.toggle('active');
        dropdownMenu.style.display = burgerMenu.classList.contains('active') ? 'block' : 'none';
    }

    // Обработчик клика на бургер-меню
    burgerMenu.addEventListener('click', (event) => {
        // Проверка, чтобы клик по крестику не активировал бургер-меню
        if (!event.target.matches('.burger-close')) {
            toggleMenu();
        }
    });

    // Обработчик клика на крестик
    document.querySelector('.burger-close').addEventListener('click', toggleMenu);
});
