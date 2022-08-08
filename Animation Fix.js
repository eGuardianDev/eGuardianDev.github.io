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
    