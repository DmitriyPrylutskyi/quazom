<? 
date_default_timezone_set("Europe/Kiev");

$boss_mail="alexandr.orlowskij@gmail.com";
$admine_mail="mail@quazom.com";
$date=date("d.m.y");
$time=date("H:i");
 
$headers="From: Quazom.com";
 
$phone=htmlspecialchars($_POST["visitor_phone"]); 

$msg="Phone number: $phone"; 

mail($boss_mail, "$date $time Сall back", $msg, $headers);
mail($admine_mail, "$date $time Сall back", $msg, $headers);

exit;
?>