// anime({
//     targets:'#UpperLogo',
//     translateY: function() {
//         return anime.random(0, 50);
//       },
//     duration: 5000,
//     delay:0, 

//     easing: 'easeInOutQuad',
//      loop: true
// });

// function randomValues() {
//     anime({
//         targets:'#UpperLogo',
//         translateY: function() {
//             return anime.random(0, 50);
//           },
//         duration: 1000,
//         delay:0, 
    
//         easing: 'easeInOutQuad',
//         complete: randomValues
//     });
//   }
  
// randomValues();
var finnished = false;
function firstPart() {
    anime({
        targets:'#UpperLogo',
        translateY: ['2.5vh','0vh'],
        duration: 3500,
        delay:500, 
    
        easing: 'easeInOutQuad',
    });
    // anime({
    //     targets:'#UpperLeft',
    //     width: 0,
    //     duration:3500,
    //     delay:500,
    //     easing: 'easeInOutQuad',


    // });
    anime({
    targets:'#LeftLogo',
    translateY: ['15.0vh','17.5vh' ],
    translateX: ['0vh','-2.5vh' ],
    duration: 3500,
    delay:500, 

    easing: 'easeInOutQuad'
});
        anime({
        targets:'#RightLogo',
        translateY: ['15.0vh','17.5vh' ],
        translateX: ['0vh','2.5vh' ],
        duration: 3500,
        delay:500, 
    
        easing: 'easeInOutQuad',
        complete: SecondPart
    });
  }
function SecondPart() {
    anime({
        targets:'#UpperLogo',
        translateY: [0,2.5 ],
        duration: 3500,
        delay:500, 
    
        easing: 'easeInOutQuad',
    });   
    anime({
        targets:'#LeftLogo',
        translateY: [17.5,15.0 ],
        translateX: [-2.5,0 ],
        duration: 3500,
        delay:500, 
    
        easing: 'easeInOutQuad'
    });
    anime({
        targets:'#RightLogo',
        translateY: [17.5,15.0 ],
        translateX: [2.5,0 ],
        duration: 3500,
        delay:500, 
        easing: 'easeInOutQuad'
    });
}

/*function CursorMove(){
    
    var movingAnim = anime({
        targets:'#TextCursor',
        translateX: [0,150],
        duration: 850,
        easing: 'steps(9)',
        autoplay: false
    });
    function blinker(){
        var blinking = anime({
            targets:'#TextCursor',
            opacity: 0,
            duration: 500,
            autoplay:false,
        });    
        var blinking2 = anime({
            targets:'#TextCursor',
            opacity: 1,
            duration: 500,
            autoplay:false
        });    
        
    }
    setInterval(blinker, 1000);
    

    movingAnim.play();
}*/

class blinkingTest{
    textData;
    idOfItem;
    isFinished;
    constructor(textData, idOfItem){
        this.textData = textData;
        this.idOfItem = idOfItem;
        document.getElementById(this.idOfItem).innerHTML = "";
      
    }
    
    play(_feedback){
            var i = 0  ;     //  create a loop function
            var text = this.textData;
            var htmlItem = document.getElementById(this.idOfItem);
            htmlItem.innerHTML = "";
            function myLoop() {  
            setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                    var textToPrint = "";
                    for (let j = 0; j < i; j++) {
                        textToPrint += text[j];
                    }
                    i +=1;
                    if(i == text.length + 1){
                        htmlItem.innerHTML = textToPrint;   
                        this.isFinished = true;
                        
                    }else{
                        htmlItem.innerHTML = textToPrint + "|";   
        
                    }
                    if(i <= text.length){
                        myLoop();
                    }else{
                        
                    }
            
            }, 65)
        }
        myLoop();
    }


}

const animation = new blinkingTest('eGuardian', 'MainText')
const animation2 = new blinkingTest('Development', 'secondText')
animation.play();
id = setInterval(() => {
    animation2.play();
    clearInterval(id);
}, 700);


//CursorMove();
firstPart();
setInterval(firstPart,10000);    
    