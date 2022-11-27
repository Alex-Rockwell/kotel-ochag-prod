<?php
// header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer\PHPMailer;
use Exception\Exception\Exception;
use SMTP\SMTP\SMTP;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';


// require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->IsHTML(true);

// $mail->SMTPDebug = 3;                              // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vin-ag@inbox.ru';                  // Наш логин
$mail->Password = '5E2d6g989dThxYEuN4py';             // Наш пароль от SMTP ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('vin-ag@inbox.ru', 'Сайт');            // От кого письмо 
$mail->addAddress('vin-ag@inbox.ru');                 // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML


$city = $_POST['city'];
$firm = $_POST['firm'];
$phone = $_POST['phone'];
$usermail = $_POST['usermail'];
$fio2 = $_POST['fio2'];
$title = $_POST['title'];
$theme = $_POST['theme'];
$quantity = $_POST['quantity'];



$mail->Subject = 'Семинары и обучение';
$mail->Body    =
    'Город: ' . $city .
    '<br> Организация: ' . $firm .
    '<br> Контактное лицо: ' . $fio2 .
    '<br> Направление обучения: ' . $theme .
    '<br> Количество человек: ' . $quantity .
    '<br> Должность: ' . $title .
    '<br> Телефон: ' . $phone .
    '<br> Почта: ' . $usermail . '';

if (!$mail->send()) {
    return false;
} else {
    return true;
}
