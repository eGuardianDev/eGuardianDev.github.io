

var logoTimeLine = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
    direction: 'alternate', // Is not inherited
    loop: true // 
  });

logoTimeLine
.add({
    
    targets:'#UpperLogo',
    translateY: ['2.5vh','0vh'],
    duration: 3500,
    delay:500, 

    easing: 'easeInOutQuad'
},0).add({
    
    targets:'#LeftLogo',
    translateY: ['15.0vh','17.5vh' ],
    translateX: ['0vh','-2.5vh' ],
    duration: 3500,
    delay:500, 

    easing: 'easeInOutQuad'
}, 0)
.add({
    
    targets:'#RightLogo',
    translateY: ['15.0vh','17.5vh' ],
    translateX: ['0vh','2.5vh' ],
    duration: 3500,
    delay:500, 

    easing: 'easeInOutQuad'
}, 0);
logoTimeLine.pause();


btnanim = anime({
    targets:'#btn',
    opacity:[0,1],
    duration: 1000,

    easing: 'easeInOutQuad',
}); 
btnanim.pause();
function SecondPart() {
    logoUp = anime({
        targets:'#Logo',
        translateY: ['25.0vh','13vh' ],rotate: 0.01,
        duration: 1500,
        
        easing: 'easeInOutQuad',

complete: function(){animation.play()}

    }); 
    logoUp.pause();
    anime({
        targets:'#UpperLogo',
        translateY: [0,2.5 ],
        opacity:[0,1],
        duration: 1500,
        delay:500, 
    
        easing: 'easeInOutQuad',
    });   
    anime({
        targets:'#LeftLogo',
        translateY: [17.5,15.0 ],
        translateX: [-2.5,0 ],
        opacity:[0,1],
        duration: 1500,
        delay:500, 
    
        easing: 'easeInOutQuad'
    });
    anime({
        targets:'#RightLogo',
        translateY: [17.5,15.0 ],
        translateX: [2.5,0 ],
        opacity:[0,1],
        duration: 1500,
        delay:500, 
        easing: 'easeInOutQuad',
        complete: function(){logoUp.play();}
        
    });
}


class blinkingTest{
    textData;
    idOfItem;
    isFinished=false;
    constructor(textData, idOfItem){
        this.textData = textData;
        this.idOfItem = idOfItem;
        this.isFinished =false;
        document.getElementById(this.idOfItem).innerHTML = "";
      
    }
    
    play(data){
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
                        return this.isFinished = true;
                    }
            
            }, 65)
         
        }
        var stupidTimer = setInterval(() => {
            this.isFinished = true;
            clearInterval(stupidTimer);
        }, 65 * text.length * 1.1);

        myLoop();
        
      
    }
    get finished(){
        return this.isFinished;
    }


}

const animation = new blinkingTest('eGuardian', 'MainText')
const animation2 = new blinkingTest('Development', 'secondText')

id = setInterval(() => {
    console.log(animation.finished)
    if(animation.isFinished){
        animation2.play();
        clearInterval(id);
    }
}, 75);

id2 = setInterval(() => {
    console.log(animation2.finished)
    if(animation2.isFinished){
        btnanim.play();
        clearInterval(id2);
        logoTimeLine.play();
    }
}, 75);
//CursorMove();
SecondPart();
