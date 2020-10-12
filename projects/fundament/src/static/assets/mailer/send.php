<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$phone = $_POST['phone'];
$name = $_POST['name'];
$title = $_POST['title'];
$email = $_POST['email'];



$tms = " <br> Выберите услугу: - ".$_POST['group'];
$name = " <br> Имя - ".$_POST['name'];
$rtime = "<br> В который раз: -".$_POST['time'];
$email = "<br> Email - ".$_POST['email']; 
$adress = "<br> Адрес -".$_POST['adress'];
$delivery = "<br> Нужнали доставка -".$_POST['delivery'];




$q1 = ( $_POST['group'] ? $tms : ' ');
$q2 = ( $_POST['name'] ?  $name : ' ');
$q3 = ( $_POST['time'] ? $rtime : ' ');
$q4 = ( $_POST['email'] ? $email : ' ');
$q5 = ( $_POST['adress'] ? $adress : ' ');
$q6 = ( $_POST['delivery'] ? $delivery : ' ');



// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
// $mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                      
$mail->Username = 'apollonmailbot@gmail.com'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'apollon321mail123bot'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('pincetbrestbot@gmail.com', 'Форма с сайта'); // Ваш Email
$mail->addAddress('valik_2143@mail.ru'); // Email получателя
// $mail->addAddress('example@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов
  // for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
  //       $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
  //       $filename = $_FILES['userfile']['name'][$ct];
  //       if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
  //           $mail->addAttachment($uploadfile, $filename);
  //       } else {
  //           $msg .= 'Failed to move file to ' . $uploadfile;
  //       }
  //   }   
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = 'Форма с сайта '; // Заголовок письма
 if($_POST['formname'] == 'calc'){
        $mail->Body    = '

            Имя : ' . $_POST['name'].' <br> 
            Телефон: ' . $phone . '';
    }
    else{

       $mail->Body    = 
            $title . ' <br> 
            ' . $q1. 
                $q2 .
                $q3 .
                $q4 .
                $q5 .
                $q6 .
                ' <br> 
            Телефон: ' . $phone .  ' '. $email.'';
            
        
    }

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
