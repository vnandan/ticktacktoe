<?php
header('Expires: Wed, 23 Dec 1980 00:30:00 GMT'); // time in the past
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');

require_once ("dbconnect.php");
$con=opendatabase();

$userid=$_GET['id'];
$query="select * from current_games where id2=''";
$result=mysql_query($query);
$row=mysql_fetch_row($result);
	if($row[0])
	{
	$query="update current_games set id2='".$userid."' where id2=''";
	$result=mysql_query($query);
	$query="update current_games set game_status='1' where id2='".$userid."'";
	$result=mysql_query($query);
	echo "2";		//returning the player number
	}
	else
	{
	$query="insert into `current_games` (`game_id`, `id1`, `id2`) VALUES ('','".$userid."','')";
	$result=mysql_query($query);
	echo "1";				//returning the player number
	}
	mysql_close($con);
?>