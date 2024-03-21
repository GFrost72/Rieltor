document.addEventListener('DOMContentLoaded', (event) => {
    // Получение модального окна
    var modal = document.getElementById("myModal");

    // Получение кнопок, которые открывают модальное окно
    var btnsArticleArrow = document.querySelectorAll(".article-arrow");
    var btnsHeroButton = document.querySelectorAll(".hero-button"); 

    // Объединение NodeList'ов в один массив
    var allBtns = [...btnsArticleArrow, ...btnsHeroButton];

    // Получение элемента <span>, который закрывает модальное окно
    var span = document.getElementsByClassName("close")[0];

    // Перебор всех кнопок и добавление обработчика клика, который открывает модальное окно и устанавливает тип услуги
    allBtns.forEach(btn => {
		btn.addEventListener('click', function() {
			var serviceType = this.getAttribute('data-service-type');
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

    // Обработчик нажатия клавиши ESC для закрытия модального окна
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" ||event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
