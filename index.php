<html>
<head>
<title>Tick Tack Toe</title>
<script type="text/javascript" src="functions.js"></script>
</head>

<body onload="initialize()" id="content" >
<div style="width:100%;margin:0px auto;">
<div id="game_matrix" style="margin:0px auto 3px auto;width:200px;height:185px;border:solid;">
<img src="images/blank.png" alt="" id="box_1" onclick="move(this)"/>
<img src="images/blank.png" alt="" id="box_2" onclick="move(this)"/>
<img src="images/blank.png" alt="" id="box_3" onclick="move(this)"/><br/>
<img src="images/blank.png" alt="" id="box_4" onclick="move(this)"/>
<img src="images/blank.png" alt="" id="box_5" onclick="move(this)"/>
<img src="images/blank.png" alt="" id="box_6" onclick="move(this)"/><br/>
<img src="images/blank.png" alt="" id="box_7" onclick="move(this)"/>
<img src="images/blank.png" alt="" id="box_8" onclick="move(this)"/>
<img src="images/blank.png" alt="" id="box_9" onclick="move(this)"/>
</div>
<div id="msg_box" style="border:1px solid black;text-align:center;margin:0px auto;background-color:#EEE;"><span id="msg" style="font-size:25px;"></span><br/>
</div>
<div style="margin:0px auto;text-align:center;"><button onclick="initialize()">New Game</button></div>
</div>

<audio preload id="sound_click"> 
  <source src="sounds/click.mp3" type="audio/mpeg" />
  <source src="sounds/click.wav" type="audio/ogg" />
</audio> 
<audio preload id="sound_win"> 
  <source src="sounds/you_win.mp3" type="audio/mpeg" />
  <source src="sounds/you_win.wav" type="audio/ogg" />
</audio> 
<audio preload id="sound_lose"> 
  <source src="sounds/game_over.mp3" type="audio/mpeg" />
  <source src="sounds/game_over.wav" type="audio/ogg" />
</audio> 
</body>
</html>