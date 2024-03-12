<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));

    // Проверяем номер телефона
    if (!preg_match("/^\+7\-\d{3}\-\d{3}\-\d{2}\-\d{2}$/", $phone)) {
        die("Неверный формат номера телефона.");
    }

    $email_to = "g.o.moroz72@gmail.com";
    $subject = "Новая заявка с веб-сайта";
    
    // Строим текст сообщения
    $email_content = "Имя: $name\n";
    $email_content .= "Телефон: $phone\n";

    // Заголовки для отправки HTML-письма
    $email_from = "cv51088@www.morozagent.ru"; // Исправлено: определите ваш реальный email
    $headers = "From: $name <$email_from>\r\n"; // Исправлено: используйте $email_from
    $headers .= "Reply-To: $name <$email_from>\r\n"; // Исправлено: используйте $email_from
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $headers .= "MIME-Version: 1.0\r\n";

    // Отправляем письмо, используя -f параметр для указания адреса отправителя
    if (mail($email_to, $subject, $email_content, $headers, "-f$email_from")) { // Исправлено: добавлен -f параметр
        echo "Спасибо! Ваша заявка отправлена.";
    } else {
        echo "К сожалению, произошла ошибка при отправке заявки.";
    }
} else {
    // Не POST запрос, выводим ошибку
    echo "Ошибочный запрос.";
}
?>
