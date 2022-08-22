var logoTimeLine
  
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
    complete: function(){
        logoTimeLine.play();

    }
}); 
btnanim.pause();
function SecondPart() {
    logoUp = anime({
        targets:'#Logo',
        translateY: ['30.0vh','13vh' ],rotate: 0.01,
        duration: 600,
        
        easing: 'easeInOutCirc',

complete: function(){animation.play()}

    }); 
    logoUp.pause(); 
      anime({
        targets:'#Logo',
        opacity:[0,1],
        duration: 750,
        delay:500, 
    
        easing: 'easeOutExpo',
    });   
    anime({
        targets:'#UpperLogo',
        translateY: [0,2.5 ],
        opacity:[0,1],
        duration: 750,
        delay:500, 
    
        easing: 'easeOutExpo',
    });   
    anime({
        targets:'#LeftLogo',
        translateY: [17.5,15.0 ],
        translateX: [-2.5,0 ],
        opacity:[0,1],
        duration: 750,
        delay:500, 
    
        easing: 'easeOutExpo'
    });
    anime({
        targets:'#RightLogo',
        translateY: [17.5,15.0 ],
        translateX: [2.5,0 ],
        opacity:[0,1],
        duration: 750,
        delay:500, 
        easing: 'easeOutExpo',
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
        document.getElementById(this.idOfItem).style.opacity = "1"; 
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
    if(animation.isFinished){
        animation2.play();
        clearInterval(id);
    }
}, 75);

id2 = setInterval(() => {
    if(animation2.isFinished){
        btnanim.play();
        clearInterval(id2);
    }
}, 75);
//CursorMove();
SecondPart();



function functionE(){
    logoTimeLine.pause();
    anime({
        targets:'#MainText',
        opacity:0,
        translateY: 25,
        duration: 250,
        delay:0, 
    
        easing: 'easeInOutCirc',
    });   anime({
        targets:'#secondText',
        opacity:0,
        translateY: 25,
        duration: 250,
        delay:50, 
    
        easing: 'easeInOutCirc',
    });     
    anime({
        targets:'#Logo',
        translateY: 25,
        opacity:0,
        duration: 250,
        delay:0, 
    
        easing: 'easeInOutCirc',
        complete: function(){
            location.href = "/explore"; 
        }
    });   
}
function changePage(){
    var waitting = true;
    console.log("stupid")
    anime({
        targets:"#Logo",
        opacity: [1,0],
        duration: 2000,
    })
    anime({
        targets:"#MainTextDiv",
        opacity: [1,0],
        duration: 2000,
        complete:function(){ waitting = false;console.log("FINISHED");}
    })
    const fetchData = () =>
    new Promise(resolve => {
      setTimeout(() => resolve(route()), 3000);
    });
}
function fix(){ 
anime({
    targets:"#Logo",
    opacity: [0,1],
    duration: 2000,
})
anime({
    targets:"#MainTextDiv",
    opacity: [0,1],
    duration: 2000,
})

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
    console.log("fixing")
 
}