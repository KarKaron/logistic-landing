<?php
if(isset($_POST['name'])) {$name = trim($_POST['name']);} else {$name = '';}
if(isset($_POST['email'])) {$email = trim($_POST['email']);} else {$email = '';}
if(isset($_POST['message'])) {$message = trim($_POST['message']);} else {$message = '';}
if(isset($_POST['phone'])) {$phone = trim($_POST['phone']);} else {$phone = '';}
if(isset($_POST['subject'])) {$subject = trim($_POST['subject']);} else {$subject = '';}
if($email === '') {
    exit();
} else {
    if(!preg_match ('/[\.a-z0-9_\-]+[@][a-z0-9_\-]+([.][a-z0-9_\-]+)+[a-z]{1,4}/i', $email))
    /*if(!filter_var($email, FILTER_VALIDATE_EMAIL) === false)*/{
        exit();
    } else {
        if($name === '') {
            $name = 'Заявка';
        }
        if($phone === '') {
            $phone = 'Без телефона';
        }
        if($message === '') {
            $message = 'Без сообщения';
        }
        if($subject === '') {
            $subject = 'Без темы';
        }
        $siteURL = "http://karkotski.ru/portfolio/";
        $siteNAME = "Иван Петров";
        $siteEMAIL = "banderas777@yandex.ru";
        $headers  = 'MIME-Version: 1.0' . "\r\n";	     
        $headers .= "Content-type: text/html; charset=utf8 \r\n";
        $headers .= "From: ".$siteNAME."\r\n";
        $headers .= "Reply-To: ".$email."\r\n";
        ob_start(); // включаем буферизацию
        require 'templatemail.php'; // подключаем шаблон письма
        $text = ob_get_clean(); // выгружаем письмо из буфера
        mail($siteEMAIL, $subject, $text, $headers) or die("Ошибка!");
        exit();
    }
}
?>