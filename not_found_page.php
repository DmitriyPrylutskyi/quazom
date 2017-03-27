<?
$url = $_SERVER["REQUEST_URI"];
$curLang = preg_match("/(\w+)/i", $url, $matches);
$matches = strtolower($matches[1]);
if ( $matches!== "ru" && $matches !== "ua") { 
	header("Location: /404.html");	
}
else {
	header("Location: /".$matches."/404.html");
}
exit;
?>