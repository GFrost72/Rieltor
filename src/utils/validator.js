document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('phone').addEventListener('input', function(event) {
        let input = event.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
        
        // Обрезаем ввод, чтобы соответствовать максимальной длине номера
        input = input.substring(0, 11);
        
        let formattedInput = input.length > 0 ? '+7' : '';
        if (input.length > 1) formattedInput += '-' + input.substring(1, 4);
        if (input.length >= 5) formattedInput += '-' + input.substring(4, 7);
        if (input.length >= 8) formattedInput += '-' + input.substring(7, 9);
        if (input.length >= 10) formattedInput += '-' + input.substring(9);
        
        // Обновляем значение поля ввода
        event.target.value = formattedInput;
    });

    document.getElementById('name').addEventListener('input', function(event) {
        event.target.value = event.target.value.replace(/\d/g, ''); // Удаляем цифры из имени
    });

    document.getElementById('submitForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Очистить предыдущие сообщения об ошибках
        document.getElementById('name-error').textContent = '';
        document.getElementById('phone-error').textContent = '';

        var formData = new FormData(this);
        var hasError = false;

        // Проверка заполненности поля имени
        if (!formData.get('name')) {
            document.getElementById('name-error').textContent = 'Пожалуйста, введите ваше имя.';
            document.getElementById('name-error').style.display = 'block';
            hasError = true;
        }

        // Валидация формата телефона
        var phone = formData.get('phone').replace(/\D/g, '');
        if (!phone) {
            document.getElementById('phone-error').textContent = 'Пожалуйста, введите ваш телефон.';
            document.getElementById('phone-error').style.display = 'block';
            hasError = true;
        } else if (phone.length !== 11) {
            document.getElementById('phone-error').textContent = 'Номер телефона должен содержать 11 цифр.';
            document.getElementById('phone-error').style.display = 'block';
            hasError = true;
        }

        if (hasError) {
            return; // Прекратить выполнение функции, если есть ошибка
        }

        fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Обработка успешного ответа сервера
        })
        .catch(error => {
            alert('Произошла ошибка при отправке формы: ' + error.message); // Отображение ошибки пользователю
        });
    });
});
