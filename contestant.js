class Contestant{


    constructor(){
        this.index=null;
        this.score=0;
        this.name=null;
    
      }
    
      getCount(){
        var CountRef = database.ref('contestantCount');
    CountRef.on("value",(data)=>{
          ContestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
           contestantCount: count
        });
      }
    
      update(){
    
        var contestantIndex = "Cont" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          ans:this.ans
        });
      }
      static ContestantInfo(){
        var contestantInfoRef=database.ref('Cont');
        contestantInfoRef.on("value",(data)=>{
        allContestant=data.val();
        })
      }
       
        
    
      }
    
    
