// document.getElementById('submitForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var formData = new FormData(this);

//     fetch('sendmail.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert(data); // Показать сообщение от сервера
//         // Очистить форму или закрыть модальное окно
//     })
//     .catch(error => {
//         alert('Произошла ошибка при отправке формы: ' + error.message);
//     });
// });

document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('submitBtn').disabled = true; // Блокируем кнопку

    var formData = new FormData(this);

    fetch('sendmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Показать сообщение от сервера
        document.getElementById('submitBtn').disabled = false; // Разблокируем кнопку
    })
    .catch(error => {
        alert('Произошла ошибка при отправке формы: ' + error.message);
        document.getElementById('submitBtn').disabled = false; // Разблокируем кнопку в случае ошибки
    });
});
