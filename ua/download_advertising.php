<? 
$file='./files/Бриф_на_налаштування_контекстної_реклами_сайту_веб_студія_Quazom_com.doc';
$ctype="application/vnd.openxmlformats-officedocument.wordprocessingml.document";
$backurl="/index.html";

if (file_exists($file)) {
  header('Content-Type: '.$ctype.'; charset=utf-8');
  header("Content-Disposition: attachment; filename=".basename($file));
  ob_clean();
  readfile($file);
  exit;
} else {
  /*echo "Файл не найден.";*/
  header('Location:'.$backurl);
  exit;
}
?>