<? 
$file="./files/Анкета_на_создание_сайта_веб_студия_Quazom.com.doc";
$ctype="application/vnd.openxmlformats-officedocument.wordprocessingml.document";

if (file_exists($file)) {
  header("Content-Type: ".$ctype."; charset=utf-8");
  header("Content-Disposition: attachment; filename=".basename($file));
  ob_clean();
  readfile($file);
  exit;
} else { 
  /*echo "Файл не найден.";*/
  header("Location: ".$_SERVER['HTTP_REFERER']);
  exit;
}
?>