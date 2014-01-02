<?php
require_once("dbconnect.php");
$con=opendatabase();

$userid=$_GET['id'];
$query1="select game_status from current_games where id1='".$userid."' OR id2='".$userid."'";


$result1=mysql_query($query1);


$row1=mysql_fetch_array($result1);


if($row1[0])
echo $row1[0];
mysql_close($con);
?>