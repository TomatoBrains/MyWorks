<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$phone = $_POST['phone'];
$email = $_POST['email'];
$name = $_POST['name'];
$title = $_POST['title'];




$soc = $_POST['soc'];
$qw1 = $_POST['qw1'];
$qw2 = $_POST['qw2'];
$qw3 = $_POST['qw3'];
$qw4 = $_POST['qw4'];
$qw5 = $_POST['qw5'];
$qw6 = $_POST['qw6'];
$qw7 = $_POST['qw7'];


$company = " <br> Компания (сфера деятельности) - ".$_POST['company'];
$mess = " <br> Сообщение - ".$_POST['mess'];
$tms = " <br> время - ".$_POST['tms'];
$types = " <br> Объект - ".$_POST['obj'];
$names = " <br> Имя - ".$_POST['name'];
$usl = " <br> Услуга - ".$_POST['usl'];



$q1 =  ( $_POST['company'] ? $company : ' ' );
$q2 = ( $_POST['mess'] ? $mess : ' ');
$q3 = ( $_POST['tms'] ? $tms : ' ');
$q4 = ( $_POST['obj'] ? $types : ' ');
$q5 = ( $_POST['name'] ?  $names : ' ');
$q6 = ( $_POST['usl'] ?  $usl : ' ');


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
//$mail->addAddress('kirill.droznik@gmail.com'); // Email получателя
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
// 1. Срок действия?:  ' . $qw1 . ' <br> 
$mail->Subject = 'Форма с сайта  '; // Заголовок письма
 if($_POST['formname'] == 'test'){
        $mail->Body    = '
            Пользователь прошёл тест: <br>
            
            1. Сумма гарантии? ' . $qw2 . ' <br> 
            2. Гарантия нужна в рамках ' . $qw3 . ' <br> 
            3. Для чего необходима банковская гарантия? ' . $qw4 . ' <br> 
            4. Имеются ли задолженности? ' . $qw5 . ' <br> 
            5. Когда необходима гарантия? ' . $qw6 . ' <br> 
            6. Как Вам удобно будет созвониться? ' . $qw7 . ' <br> 
            Имя: ' . $name .' <br> 
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