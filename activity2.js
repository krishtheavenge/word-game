function back(){
    window.location="activity_1.html";
}
function score(){
    var score=localStorage.getItem("score");
    document.getElementById("updated_score").innerHTML="<h3>Score: "+score+"</h3>";
}