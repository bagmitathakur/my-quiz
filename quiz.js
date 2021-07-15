class Quiz{
constructor(){}
getState(){
var stateRef=database.ref('state');
stateRef.on("value",function(data){


state=data.val();
})


}

update(state){  
database.ref('/').update({
state:state
})}

async start(){
if(state===0){
    contestant===new Contestant();
    var contestantCountRef=await database.ref('contestantCount').once("value");
    contestantCount=contestantCountRef.val();
    if(contestantCountRef.exists()){
    contestantCount=contestantCountRef.val();
    contestant.getCount();

    }
    question=new Question();
    question.display();
}

}
play(){
quiz.hide();
background(79);
textSize(35);
text('Score',370,100);
contestant.ContestantInfo();
if(allContestants!=undefined){
    var displayAns=200;
    text("CORRECT ANSWER IS HIGHLIGHTED IN GREEN",150,260);
    for(var plr in allContestants){
        var correct="3";
        if(correct===allContestants[plr].ans){
            fill ("green");

        }
        else 
        fill("red");
        displayAns=displayAns+20;
        text(allContestants[plr].name+":"+allContestants[plr].ans);
    }
}

}


}


