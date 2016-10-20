<?php

$recepient = "CoKoJl1k@mail.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$dr = trim($_POST["dr"]);
$text = trim($_POST["text"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nДень рождения: $dr \nО себе: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>