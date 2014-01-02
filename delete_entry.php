<?php
require_once("dbconnect.php");
$con=opendatabase();
$userid=$_GET['id'];
$query1="delete from current_games where id1='".$userid."'";
$query2="delete from current_games where id2='".$userid."'";

mysql_query($query1,$con);
mysql_query($query2,$con);
?>