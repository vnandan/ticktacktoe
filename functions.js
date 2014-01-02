var xmlhttp=false;
var xmlhttp2=false;
var id=0;
var player_number;
var game_status;
var game_over=0;
var handle1;
var handle2;

var img=new Array(2);
img[0]="http://unstablecodes.cu.cc/ttt/images/blank.png";
img[1]="http://unstablecodes.cu.cc/ttt/images/cross.png";
img[2]="http://unstablecodes.cu.cc/ttt/images/zero.png";

for(i=0;i<img.length;i++)
{
var pre=newImage();
pre.src=img[i];
}

function reset()
{
clearInterval(handle1);
clearInterval(handle2);
xmlhttp=false;
xmlhttp2=false;
id=0;
game_over=0;
game_status=-1;

try {
xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
} catch (E) {
xmlhttp = false;
}
}
if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
xmlhttp = new XMLHttpRequest();
}

try {
xmlhttp2 = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try {
xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
} catch (E) {
xmlhttp2 = false;
}
}
if (!xmlhttp2 && typeof XMLHttpRequest != 'undefined') {
xmlhttp2 = new XMLHttpRequest();
}
}
function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return y;
    }
  }
}


function clr()
{
	document.getElementById("box_1").src=img[0];
	document.getElementById("box_2").src=img[0];
	document.getElementById("box_3").src=img[0];
	document.getElementById("box_4").src=img[0];
	document.getElementById("box_5").src=img[0];
	document.getElementById("box_6").src=img[0];
	document.getElementById("box_7").src=img[0];
	document.getElementById("box_8").src=img[0];
	document.getElementById("box_9").src=img[0];
return;
}


function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
return 1;
}

function cookieDelete() {
     var cookieCt = 0;

        var thisCookie = document.cookie.split ("; ");
        cookieCt = thisCookie.length;

        var expireDate = new Date();
        expireDate.setDate(expireDate. getDate()-1);

        for (var i=0; i<cookieCt; i++) {
           var cookieName = thisCookie[i]. split("=")[0];
           document.cookie = cookieName + "=;expires=" + expireDate. toGMTString();
        }
		return;
}


function initialize()
{
reset();
document.getElementById("msg").innerHTML="New Game. Connecting to server...";
clr();
id=(Math.random()*100000)%(Math.random()*999);
if(!document.cookie)
{
setCookie("id",id,"10");
game_over=0;
xmlhttp.open("GET", "new_game.php?id="+id);
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	if(xmlhttp.responseText=='1')
	player_number=1;
	else if(xmlhttp.responseText=='2')
	player_number=2;
	handle1=setInterval("pulse()",5000);
}
}
xmlhttp.send(null);
}
else
{
var cookie_val=getCookie("id");
cookieDelete();
setCookie("id",id,"10");
xmlhttp.open("GET", "delete_entry.php?id="+cookie_val);
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
game_over=0;
xmlhttp.open("GET", "new_game.php?id="+id);
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	if(xmlhttp.responseText=='1')
	player_number=1;
	else if(xmlhttp.responseText=='2')
	player_number=2;
	handle1=setInterval("pulse()",5000);
	
}
}
xmlhttp.send(null);
	}
}
xmlhttp.send(null);
}
handle2=setInterval("update_matrix()",5000);
}
function destroy()
{
	if(id>0)
	{
	xmlhttp.open("GET", "delete_entry.php?id="+id);
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	}
	}
xmlhttp.send(null);
	}
	return;
}
	
	function update_matrix()
{
	xmlhttp2.open("GET", "read_game.php?id="+id);
	xmlhttp2.onreadystatechange = function() {
	if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
	var game=xmlhttp2.responseText;
	if(game.substring(0,1)=="X"){document.getElementById("box_1").src="images/cross.png";}
	else
	if(game.substring(0,1)=="O"){document.getElementById("box_1").src="images/zero.png";}
	if(game.substring(2,3)=="X"){document.getElementById("box_2").src="images/cross.png";}
	else
	if(game.substring(2,3)=="O"){document.getElementById("box_2").src="images/zero.png";}
	if(game.substring(4,5)=="X"){document.getElementById("box_3").src="images/cross.png";}
	else
	if(game.substring(4,5)=="O"){document.getElementById("box_3").src="images/zero.png";}
	if(game.substring(6,7)=="X"){document.getElementById("box_4").src="images/cross.png";}
	else
	if(game.substring(6,7)=="O"){document.getElementById("box_4").src="images/zero.png";}
	if(game.substring(8,9)=="X"){document.getElementById("box_5").src="images/cross.png";}
	else
	if(game.substring(8,9)=="O"){document.getElementById("box_5").src="images/zero.png";}
	if(game.substring(10,11)=="X"){document.getElementById("box_6").src="images/cross.png";}
	else
	if(game.substring(10,11)=="O"){document.getElementById("box_6").src="images/zero.png";}
	if(game.substring(12,13)=="X"){document.getElementById("box_7").src="images/cross.png";}
	else
	if(game.substring(12,13)=="O"){document.getElementById("box_7").src="images/zero.png";}
	if(game.substring(14,15)=="X"){document.getElementById("box_8").src="images/cross.png";}
	else
	if(game.substring(14,15)=="O"){document.getElementById("box_8").src="images/zero.png";}
	if(game.substring(16,17)=="X"){document.getElementById("box_9").src="images/cross.png";}
	else
	if(game.substring(16,17)=="O"){document.getElementById("box_9").src="images/zero.png";}
}
}
xmlhttp2.send(null);
}

function move(element)
{

	if(player_number!=game_status){document.getElementById("msg").innerHTML="Not your turn.";return 0;}

	if(element.src!="http://unstablecodes.cu.cc/ttt/images/blank.png")
	{document.getElementById("msg").innerHTML="Illegal move. Plz try again.";return;}

	
	xmlhttp.open("GET", "move.php?move_place="+element.id+"&id="+id);
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	if(player_number==1)
	element.src="http://unstablecodes.cu.cc/ttt/images/cross.png";
	if(player_number==2)
	element.src="http://unstablecodes.cu.cc/ttt/images/zero.png";
}
}
xmlhttp.send(null);

}

function pulse()
{
xmlhttp.open("GET", "game_status.php?id="+id);
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	game_status=xmlhttp.responseText;
		if(xmlhttp.responseText==5)
		{
		document.getElementById("msg").innerHTML="Game draw. Click on New Game.";
		}
		if(xmlhttp.responseText==-1)
		{
		//switch on the intephase and activate move()
		document.getElementById("msg").innerHTML="Searching for an opponent...";
		}
		else
		if(xmlhttp.responseText==player_number)
		{
		document.getElementById("msg").innerHTML="Your turn.";
		//document.getElementById("box_1").onclick="move(this)";
		}
		else
		if(xmlhttp.responseText!=player_number&&(xmlhttp.responseText==1||xmlhttp.responseText==2))
		{
		document.getElementById("msg").innerHTML="Opponent's turn...";
		//document.getElementById("box_1").onclick="dont_move(this)";
		}
		if((xmlhttp.responseText==3||xmlhttp.responseText==4)&&xmlhttp.responseText-player_number==2)
		{
		document.getElementById("msg").innerHTML="You Win";game_over=1;
		}
		if((xmlhttp.responseText==3||xmlhttp.responseText==4)&&xmlhttp.responseText-player_number!=2)
		{
		document.getElementById("msg").innerHTML="You lose";game_over=1;
		}
if(game_over==1){return;}
}
}
xmlhttp.send(null);
}