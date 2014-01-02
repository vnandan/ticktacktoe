<?php
header('Expires: Wed, 23 Dec 1980 00:30:00 GMT'); // time in the past
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');
require_once("dbconnect.php");
$con=opendatabase();
$place=$_GET['move_place'];
$userid=$_GET['id'];
$place=substr($place,4,1);
$query="select * from current_games where id1='".$userid."' OR id2='".$userid."'";
$result=mysql_query($query,$con);
$row=mysql_fetch_array($result);
if($row[3]==3||$row[3]==4){exit;}
$array= array();
$array = explode(',',$row[4]);
if($row[5]%2==0){$array[$place-1]='X';}
else
{$array[$place-1]='O';}
$temp_array=implode(",",$array);
$query1="update current_games set game='".$temp_array."' where id1='".$userid."'";
$query2="update current_games set game='".$temp_array."' where id2='".$userid."'";
$result=mysql_query($query1,$con);
$result=mysql_query($query2,$con);

$query="update current_games set game_count='".($row[5]+1)."'";
$result=mysql_query($query,$con);

$chara='X';
if(($array[0]==$chara&&$array[1]==$chara&&$array[2]==$chara)||($array[3]==$chara&&$array[4]==$chara&&$array[5]==$chara)||($array[6]==$chara&&$array[7]==$chara&&$array[8]==$chara)||($array[0]==$chara&&$array[3]==$chara&&$array[6]==$chara)||($array[1]==$chara&&$array[4]==$chara&&$array[7]==$chara)||($array[2]==$chara&&$array[5]==$chara&&$array[8]==$chara)||($array[0]==$chara&&$array[4]==$chara&&$array[8]==$chara)||($array[2]==$chara&&$array[4]==$chara&&$array[6]==$chara))
{//game status to win 
$query="update current_games set game_status=3 where id1='".$userid."'";
$result=mysql_query($query,$con);
exit;
}

$chara='O';
if(($array[0]==$chara&&$array[1]==$chara&&$array[2]==$chara)||($array[3]==$chara&&$array[4]==$chara&&$array[5]==$chara)||($array[6]==$chara&&$array[7]==$chara&&$array[8]==$chara)||($array[0]==$chara&&$array[3]==$chara&&$array[6]==$chara)||($array[1]==$chara&&$array[4]==$chara&&$array[7]==$chara)||($array[2]==$chara&&$array[5]==$chara&&$array[8]==$chara)||($array[0]==$chara&&$array[4]==$chara&&$array[8]==$chara)||($array[2]==$chara&&$array[4]==$chara&&$array[6]==$chara))
{//game status to win 

$query="update current_games set game_status='4' where id2='".$userid."'";
$result=mysql_query($query,$con);
exit;
}
if(($row[5]+1)==9)
{
$query="update current_games set game_status='5' where id1='".$userid."'";
$result=mysql_query($query,$con);
$query="update current_games set game_status='5' where id2='".$userid."'";
$result=mysql_query($query,$con);
exit;
}


if($row[5]%2==0)
{
$query="update current_games set game_status='2' where id1='".$userid."'";
$result=mysql_query($query,$con);
}
else
{
$query="update current_games set game_status='1' where id2='".$userid."'";
$result=mysql_query($query,$con);
}
mysql_close($con);
?>

