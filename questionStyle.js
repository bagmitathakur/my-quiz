class Question{
constructor(){
this.title=createElement('h1');
this.inputA=createInput("name please");
this.button=createButton("check");
this.inputB=createInput("ENTER YOUR ANSWER");
this.question=createElement('h2');
this.option=createElement('h3')
this.option1=createElement('h3');
this.option2=createElement('h3')
this.option3=createElement('h3');


}
hide(){

this.title.hide();
this.inputA.hide();
this.button.hide();
this.inputB.hide();

}
display(){
this.title.html("LOGICAL REASONING")
this.title.position(300,10);

this.question.html("A subset S of the set of integers (00,01,02........99) is said to have a property if it is impossible to find two numbers N1 and N2 such that the unit digit of N1 and tenth place of N2 is same.Find the maximal numbers of elementsin set S with the prperty.",)
this.question.position(155,80);
this.option.html("1:100");
this.option.position(155,100);
this.option1.html("2:39");
this.option1.position(155,100);
this.option2.html("3:25");
this.option2.position(155,130);
this.option3.html("4:50");
this.option3.position(155,160);
  

this.inputA.position(155,230);
this.inputB.position(300,230);
this,button.position(299,300);

this.buttonmousePressed(()=>{

    this.title.hide();
    this.inputB.hide();
    this.inputA.hide()
    contestant.ans=this.inputB.value();
    contestant.name=this.inputA.value();
    contestantCount=contestantCount+1;
    contestant.index=contestantCount;
    contestantCount.updateCount(contestantCount);
    contestant.update();
})

}
}
