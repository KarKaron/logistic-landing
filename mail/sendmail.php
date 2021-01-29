<?php
  if(isset($_POST['name'])) {$name = trim($_POST['name']);} else {$name = '';}
  if(isset($_POST['phone'])) {$phone = trim($_POST['phone']);} else {$phone = '';}
  if(isset($_POST['tonnage'])) {$tonnage = trim($_POST['tonnage']);} else {$tonnage = '';}
  if(isset($_POST['box'])) {$box = trim($_POST['box']);} else {$box = '';}
  if($name === '' and $phone === '') {
    exit();
  } else {
    if($tonnage === '') {
      $tonnage = 'Не указан';
    }
    if($box === '') {
      $box = 'Не указан';
    }
    $subject = 'Новый заказ';
    $siteURL = "https://диспетчерская.su/";
    $siteNAME = "ДИСПЕТЧЕРСКАЯ.SU";
    $siteEMAIL = "it@tkglp.ru"; //hr@tkglp.ru
    $headers  = 'MIME-Version: 1.0' . "\r\n";	     
    $headers .= "Content-type: text/html; charset=utf8 \r\n";
    $headers .= "From: ".$siteNAME."\r\n";
    //$headers .= "Reply-To: ".$email."\r\n";
    ob_start(); // включаем буферизацию
    require 'templatemail.php'; // подключаем шаблон письма
    $text = ob_get_clean(); // выгружаем письмо из буфера
    //
    mail($siteEMAIL, $subject, $text, $headers) or die("Ошибка!");
    exit();
  }
?>