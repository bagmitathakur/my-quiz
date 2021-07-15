var canvas;
var database;
var quiz;
var contestant;
var allContestants,contestantCount;
var ans;
var state=0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz= new Quiz();
  quiz.getState();
  quiz.start();



}


function draw(){
  background("pink");
  if(contestantCount===4){
    quiz.update(1);

  }
  if(state===1){
    clear()
    quiz.play();
  }


  
}
