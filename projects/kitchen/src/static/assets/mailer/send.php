<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$phone = $_POST['phone'];
$name = $_POST['name'];
$title = $_POST['title'];
$email = $_POST['email'];

$langSt = $_POST['select'];
$zapis = implode(", ", $langSt);

$qw1 = $_POST['qw1'];
$qw2 = $_POST['qw2'];
$qw3 = $_POST['qw3'];
$qw4 = $_POST['qw4'];
$qw5 = $_POST['qw5'];




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
$mail->setFrom('apollonmailbot@gmail.com', 'Форма с сайта'); // Ваш Email
$mail->addAddress('valik_2143@mail.ru'); // Email получателя
// $mail->addAddress('example@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов
for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
	$uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
	$filename = $_FILES['userfile']['name'][$ct];
	if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
		$mail->addAttachment($uploadfile, $filename);
	} else {
		$msg .= 'Failed to move file to ' . $uploadfile;
	}
}    
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = 'Форма с сайта '; // Заголовок письма
if($_POST['formname'] == 'test'){
	$mail->Body    = '
		Пользователь прошёл тест: <br>
		Какая именно кухня вам нужна? ' . $qw1 . ' <br> 
		У вас уже есть проект кухни? ' . $qw2.' <br> 
		В каком стиле кухню вы хотите? ' . $qw3 . ' <br> 
		Какой подарок вы хотите? ' . $qw4 . ' <br> 
		Имя: ' . $name . ' <br> 
		Телефон: ' . $phone .' ';
}
else{
	$mail->Body    = 
		 $title . ' <br>
		 Имя: ' . $name . ' <br> 
		 Телефон: ' . $phone . ' ';	 
 }

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
