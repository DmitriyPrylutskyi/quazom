<?
date_default_timezone_set('Europe/Kiev');

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
Ім'я: $name 
E-mail: $email
Номер телефону: $phone
Повідомлення: $msg 
";

mail($boss_mail, "$date $time Відповісти", $msg, $headers);
mail($admine_mail, "$date $time Відповісти", $msg, $headers);

exit;
?>