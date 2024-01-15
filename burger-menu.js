document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    burgerMenu.addEventListener('click', function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Добавим также обработчик событий для скрытия меню при клике вне него
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.burger-menu') && !event.target.closest('.dropdown-menu')) {
            dropdownMenu.style.display = 'none';
        }
    });
});