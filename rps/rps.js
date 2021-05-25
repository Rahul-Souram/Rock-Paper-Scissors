function rpsGame(urchoice){
  console.log(urchoice);
  var humanchoice, botchoice;
  humanchoice = urchoice.id;

  botchoice = numChoice(ranInt());
  console.log(botchoice);

  results = decwinner(humanchoice, botchoice);
  console.log(results);

  message = finalMessage(results);
  console.log(message);

  rpsfront(urchoice.id, botchoice, message);
}
function ranInt(){
  return Math.floor(Math.random()*3);
}
function numChoice(num) {
   return["rock","paper", "scissors"][num];
}
function decwinner(urchoice, compchoice){
 var rpsdb = {
    "rock" :{"scissors":1, "rock":0.5, "paper":0},
    "paper" :{"rock":1, "paper":0.5, "scissors":0},
    "scissors" :{"paper":1, "scissors":0.5, "rock":0}
  };
  var urscore = rpsdb[urchoice][compchoice];
  var compscore = rpsdb[compchoice][rpsdb];

  return [urscore, compscore];
}

//finalMessage
  function finalMessage([urscore, compscore]) {
    if (urscore === 0) {
      return {"message": "YOU LOST!", "color":"red"};
    }else if(urscore === 0.5){
      return {"message": "YOU TIED!","color":"blue"};
    }else {
      return {"message": "YOU WON!","color":"green"}
    }
  }

//front part function
 function rpsfront(humanimg, botimg, finalMessage){
   var Imgdb = {
     "rock": document.getElementById("rock").src,
     "paper": document.getElementById("paper").src,
     "scissors": document.getElementById("scissors").src
   }
   //removing pics
     document.getElementById("rock").remove();
     document.getElementById("paper").remove();
     document.getElementById("scissors").remove();
   //createElement
      var humanDiv = document.createElement("div");
      var botDiv = document.createElement("div");
      var messageDiv = document.createElement("div");
//design result
   humanDiv.innerHTML = "<img src='" + Imgdb[humanimg] + "' height=200px width=200px; style='box-shadow: 0px 10px 30px green;'>"
   messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] +";font-size:80px padding:30px'>" + finalMessage['message']+ "</h1>"
   botDiv.innerHTML = "<img src='" + Imgdb[botimg] + " 'height=200px width=200px style='box-shadow: 0px 10px 30px red;'>"

    document.getElementById("Gamediv").appendChild(humanDiv);
    document.getElementById("Gamediv").appendChild(messageDiv);
    document.getElementById("Gamediv").appendChild(botDiv);
 }
