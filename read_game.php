<?php
header('Expires: Wed, 23 Dec 1980 00:30:00 GMT'); // time in the past
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');
require_once("dbconnect.php");
$con=opendatabase();
$userid=$_GET['id'];

$query1="Select game from current_games where id1='".$userid."'";
$query2="Select game from current_games where id2='".$userid."'";

$result1=mysql_query($query1,$con);
$result2=mysql_query($query2,$con);

$row1=mysql_fetch_row($result1);
$row2=mysql_fetch_row($result2);

if($row1[0])
echo $row1[0];
else
echo $row2[0];
mysql_close($con);
?>