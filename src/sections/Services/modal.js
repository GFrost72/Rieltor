document.addEventListener('DOMContentLoaded', (event) => {
    // Получение модального окна
    var modal = document.getElementById("myModal");

    // Получение кнопок, которые открывают модальное окно
    var btns = document.querySelectorAll(".article-arrow"); // Предполагая, что все ваши кнопки имеют класс 'article-arrow'

    // Получение элемента <span>, который закрывает модальное окно
    var span = document.getElementsByClassName("close")[0];

    // Перебор всех кнопок и добавление обработчика клика, который открывает модальное окно и устанавливает тип услуги
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            var serviceType = this.getAttribute('data-service-type'); // Предполагаем, что добавлен соответствующий атрибут к кнопкам
            document.getElementById('serviceType').value = serviceType;
            modal.style.display = "block";
        });
    });

    // Когда пользователь кликает на <span> (x), закрыть модальное окно
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Когда пользователь кликает вне модального окна, закрыть его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
