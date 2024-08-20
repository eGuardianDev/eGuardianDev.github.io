
// >Fade and move inin
var logoTimeLine
  
    var logoTimeLine = anime.timeline({
        easing: 'easeOutExpo',
        duration: 250,
    direction: 'alternate', // Is not inherited
    loop: true // 
  });
  logoTimeLine
  .add({
      
      targets:'#UpperLogo',
    translateY: ['2.5vh','0vh'],
    duration: 550,
    delay:250, 

    easing: 'easeInOutQuad'
},0).add({
    
    targets:'#LeftLogo',
    translateY: ['15.0vh','17.5vh' ],
    translateX: ['0vh','-2.5vh' ],
    duration: 550,
    delay:300, 
    
    easing: 'easeInOutQuad'
}, 0)
.add({
    
    targets:'#RightLogo',
    translateY: ['15.0vh','17.5vh' ],
    translateX: ['0vh','2.5vh' ],
    duration: 550,
    delay:250, 
    
    easing: 'easeInOutQuad'
}, 0);

logoTimeLine.pause();


btnanim = anime({
    targets:'#btn',
    opacity:[0,1],
    duration: 300,
    delay: 400,
    easing: 'easeInOutQuad',
    complete: function(){
        logoTimeLine.pause();
      //  logoTimeLine.play();

    }
}); 
btnanim.pause();


// moving part ( not used anymore )
function SecondPart() {
    logoUp = anime({
        targets:'#Logo',
        translateY: ['30.0vh','24vh' ],rotate: 0.01,
        duration: 250,
        
        easing: 'easeOutSine',

complete: function(){animation.play()}

    }); 
    logoUp.pause(); 
      anime({
        targets:'#Logo',
        opacity:[0,1],
        duration: 250,
        delay:250, 
    
        easing: 'easeOutExpo',
    });   
    anime({
        targets:'#UpperLogo',
        translateY: [0,2.5 ],
        opacity:[0,1],
        duration: 750,
        delay:250, 
    
        easing: 'easeOutExpo',
    });   
    anime({
        targets:'#LeftLogo',
        translateY: [17.5,15.0 ],
        translateX: [-2.5,0 ],
        opacity:[0,1],
        duration: 750,
        delay:250, 
    
        easing: 'easeOutExpo'
    });
    anime({
        targets:'#RightLogo',
        translateY: [17.5,15.0 ],
        translateX: [2.5,0 ],
        opacity:[0,1],
        duration: 750,
        delay:250, 
        easing: 'easeOutExpo',
        complete: function(){logoUp.play();}
        
    });
}

// text blinking 
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
            
            }, 45)
         
        }
        var stupidTimer = setInterval(() => {
            this.isFinished = true;
            clearInterval(stupidTimer);
        }, 52 * text.length * 0.8);

        myLoop();
        
      
    }
    get finished(){
        return this.isFinished;
    }


}

// PLay blinknig animaiton
const animation = new blinkingTest('eGuardian', 'MainText')
const animation2 = new blinkingTest('Development', 'secondText')

id = setInterval(() => {
    if(animation.isFinished){
        animation2.play();
        clearInterval(id);
    }
}, 10);

id2 = setInterval(() => {
    if(animation2.isFinished){
        btnanim.play();
        clearInterval(id2);
    }
}, 10);

window.onscroll = function() {
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 400) {
    }
}


//CursorMove();
SecondPart();

var a1,a2,a3, b1,b2;

function functionE(){
    logoTimeLine.pause();
    a1 = anime({
        targets:'#MainText',
        opacity:0,
        translateY: 25,
        duration: 250,
        delay:0, 
    
        easing: 'easeInOutCirc',
    });  a2 =   anime({
        targets:'#secondText',
        opacity:0,
        translateY: 25,
        duration: 250,
        delay:50, 
    
        easing: 'easeInOutCirc',
    });     
     a3 =  anime({
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
   b1 = anime({
        targets:"#Logo",
        opacity: [1,0],
        duration: 1000,
    })
    b2 = anime({
        targets:"#MainTextDiv",
        opacity: [1,0],
        duration: 1000,
        complete:function(){ waitting = false;}
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
    duration: 1000,
})
anime({
    targets:"#MainTextDiv",
    opacity: [0,1],
    duration: 1000,
})


    /* var logoTimeLine = anime.timeline({
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
*/
}