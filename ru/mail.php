<?
date_default_timezone_set("Europe/Kiev");

$boss_mail="alexandr.orlowskij@gmail.com";
$admine_mail="mail@quazom.com";
$date=date("d.m.y");
$time=date("H:i");

$headers = "From: Quazom.com";
 
$name=htmlspecialchars($_POST["visitor_name"]); 
$email=htmlspecialchars($_POST["visitor_email"]);
$phone=htmlspecialchars($_POST["visitor_phone"]);
$msg=htmlspecialchars($_POST["visitor_message"]); 

$msg=" 
Имя: $name 
E-mail: $email
Номер телефона: $phone
Сообщение: $msg 
";

mail($boss_mail, "$date $time Ответить", $msg, $headers);
mail($admine_mail, "$date $time Ответить", $msg, $headers);

exit;

?>