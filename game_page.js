player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML= player1_name+":";
document.getElementById("player2_name").innerHTML= player2_name+":";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("player_question").innerHTML="question turn- "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn- "+player2_name;
function send(){
    var get_word=document.getElementById("word").value;
    var word=get_word.toLowerCase();
    console.log("word",word);
    var one=word.charAt(1);
    console.log(one);
    var length_divide_two=Math.floor(word.length/2);
    var two=word.charAt(length_divide_two);
    console.log(two);
    var length_minus_one=word.length-1;
    var three=word.charAt(length_minus_one);
    console.log(three);
    var length_minus_three=word.length-3;
    var four=word.charAt(length_minus_three);
    console.log(four);
   remove_1=word.replace(one,"_");
   remove_2=remove_1.replace(two,"_");
   remove_3=remove_2.replace(three,"_");
   remove_4=remove_3.replace(four,"_");
   console.log(remove_4);
   
   var question_word="<h4 id='word_display'>Q. "+remove_4+"</h4>";
   var input_box="<br><br>A: <input type='text' id='input_check_box' placeholder='answer'>";
   var check_button="<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
   var row=question_word+input_box+check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value="";
}
var question_turn="player2";
var answer_turn="player1";
function check(){
   var get_answer=document.getElementById("input_check_box").value;
   var answer=get_answer.toLowerCase();
   console.log(answer);
   if(word==answer){
    if(answer_turn=="player1"){
       update_player1_score=update_player1_score+1;
       console.log(update_player1_score);
        document.getElementById("player1_score").innerHTML=update_player1_score;
    }
    else{  
       update_player2_score=update_player2_score+1;
       console.log(update_player2_score);
      document.getElementById("player2_score").innerHTML=update_player2_score;
   }
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question turn: " + player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question_turn: " + player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer turn: " + player2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer_turn: " + player1_name;
}
document.getElementById("output").innerHTML="";
}