class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here

    if(allContestants !== undefined){
      fill("blue");
      teztSize(20);
      Text("NOTE: The contestant(s) who answered correctly are in Green!",130,230);
    }

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "1";
      if(correctAns == allContestants[plr].answer){
        fill("green");
      }
      else{
        fill("red");
      }
      
    }

  }

}
