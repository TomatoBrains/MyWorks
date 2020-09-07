<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$phone = $_POST['phone'];
$name = $_POST['name'];
$title = $_POST['title'];


$email = $_POST['email'];



$soc = " <br> Кем Вы являетесь в компании - ".$_POST['rang'];
$why = " <br> Чем Вы занимаетесь? - ".$_POST['rang2'];
$tms = " <br> Вам необходимо: - ".$_POST['group'];
$types = " <br> В каком мессенджере удобно общаться? - ".$_POST['modal-s1'];
$name = " <br> Имя - ".$_POST['name'];
$usl = " <br> Чем Вы занимаетесь - ".$_POST['mess'];



$q1 =  ( $_POST['rang'] ? $soc : ' ' );
$q2 = ( $_POST['rang2'] ? $why : ' ');
$q3 = ( $_POST['group'] ? $tms : ' ');
$q4 = ( $_POST['modal-s1'] ? $types : ' ');
$q5 = ( $_POST['name'] ?  $name : ' ');
$q6 = ( $_POST['mess'] ?  $usl : ' ');


// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
// $mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                      
$mail->Username = 'formsajt987@gmail.com'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = '473-Ghd-%sasd121'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('formsajt987@gmail.com', 'Форма с сайта'); // Ваш Email
$mail->addAddress('diman.b95@mail.ru'); // Email получателя
$mail->addAddress('pr877@mail.ru'); // Email получателя
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
            Расчёт стоимости: <br>
            Длина: ' . $dl . ' <br> 
            Ширина: ' . $sh . ' <br> 
            Высота: ' . $vst . ' <br> 
            Выберите материал кровли: ' . $calc . ' <br> 
            Выберите тип крыши Вашего навеса: ' . $calc2 .' <br> 
            РАСЧЕТНАЯ СТОИМОСТЬ ' . $money .' <br> 
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
                $q6 .
                $q5
            . ' <br> 
            Телефон: ' . $phone .  ' '. $email.'';
            
        
    }

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>