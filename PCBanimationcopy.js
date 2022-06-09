var RandomReturn = 0;
var lastLenghtOnV = 0; 
var lastLenghtOnH = 0;
var commandLog = [];
function ChooseLenght(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
    
}
function WhichToUse(data){
    if(commandLog.length <= 3){
        return data;
    }
    let LastIndex = commandLog.length;
    if(commandLog[LastIndex -1] == commandLog[LastIndex -2]){
        if(commandLog[LastIndex -1] == 0){
            return 1;
        }if(commandLog[LastIndex -1] == 1){
            return 0;
        }
    } 
    if(commandLog[LastIndex -1] == commandLog[LastIndex -3]){
        if(commandLog[LastIndex -1] == 0){
            return 1;
        }if(commandLog[LastIndex -1] == 1){
            return 0;
        }
    }
    return data;


}
var pathToTake ="m 00 00";
 

 var currentH = 0;
 var currentV = 0;


 var reverseH = 1;
 var reverseV = 1;
var RandomReturnWait = 1;

     for (let index = 0; index < 50; index++) {
         if(RandomReturnWait < 0){
             reverseV = -1;
             console.log("reverse");
             RandomReturnWait = ChooseLenght(3, 26);
     }else  {
        RandomReturnWait -=1;
     }
    if(currentH > 1920 ){
        reverseH = -1;
      } else if ( currentH < 1){
          reverseH = 1;
      }
      if(currentV > 1080 ){
        reverseV = -1;
      } else if ( currentV < 1){
        reverseV = 1;
      }



    let randomPosition = Math.floor(Math.random() * 2);
    let fixRotationPos = WhichToUse(randomPosition);
    let length_ = ChooseLenght(32,550);
    
    
    //switch
      switch (fixRotationPos) {
          case 0:
            commandLog.push(0);
            var data = (reverseH * length_);
              pathToTake +="h " + (data) + " ";
             currentH += data;
              break;
      
          case 1:
            commandLog.push(1);
            var data = (reverseV * length_);
              pathToTake +="v " + (data) + " ";
             currentV += data;
              break;
      }
    }
    // anime({
    //     targets: "#pcbPath",
    //     strokeDashoffset:[anime.setDashoffset, 0],
    //     easing:'easeInOutQuad',
    //     opacity:[0,1],
    //     duration: 5000,
    //     direction: 'alternate',
    //     loop:true
    // })
  console.log(currentH);
      console.log(pathToTake);
     document.getElementById('pcbPath').setAttribute('d' , pathToTake);
