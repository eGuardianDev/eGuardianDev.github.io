
// >Fade and move inin




var logoTimeLine;

logoTimeLine = anime.timeline({
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

// logoUp = anime({
//     targets:'#Logo',
//     translateY: ['30.0vh','24vh' ],rotate: 0.01,
//     duration: 250,
    
//     easing: 'easeOutSine',

// complete: function(){animation.play()}

// }); 


logoUp = anime({
    targets:'#Logo',
    translateX: ['0.0vw','20vw' ],rotate: 0.01,
    duration: 100,
    
    easing: 'spring(1,60,100,8)',

    complete: function(){animation.play()}

}); 
     
var logoTimeLine;

logoTimeLine = anime.timeline({
    easing: 'easeOutExpo',
    duration: 5,
});
logoUp.pause(); 

logoTimeLine
.add({
    
    targets:'#Logo',
    opacity:[0,1],
    duration: 250,
    delay:250, 

    easing: 'easeOutExpo',
},0).add({
    targets:'#UpperLogo',
    translateY: [0,2.5 ],
    opacity:[0,1],
    duration: 750,
    delay:250, 

    easing: 'easeOutExpo',
},0).add({
    targets:'#LeftLogo',
    translateY: [17.5,15.0 ],
    translateX: [-2.5,0 ],
    opacity:[0,1],
    duration: 750,
    delay:250, 

    easing: 'easeOutExpo'
},500).add({
    targets:'#RightLogo',
    translateY: [17.5,15.0 ],
    translateX: [2.5,0 ],
    opacity:[0,1],
    duration: 600,
    delay:250, 
    easing: 'easeOutExpo',
    complete: function(){logoUp.play();}
    
},1000);
logoTimeLine.pause();


// moving part ( not used anymore )
function SecondPart() {

 logoTimeLine.play();  
}

// text blinking 
class blinkingTest{
    textData;
    idOfItem;
    isFinished=false;
    t_speed = 45
    constructor(textData, idOfItem, _speed =45){
        this.textData = textData;
        this.idOfItem = idOfItem;
        this.t_speed = _speed;
        this.isFinished =false;
        document.getElementById(this.idOfItem).innerHTML = "";
        document.getElementById(this.idOfItem).style.opacity = "1"; 
    }
    
    play(data){
            if(this.finished){return;}
            var i = 0  ;     //  create a loop function
            var text = this.textData;
            var htmlItem = document.getElementById(this.idOfItem);
            htmlItem.innerHTML = "";
            var speed = this.t_speed;
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
            
            }, speed)
         
        }
        var stupidTimer = setInterval(() => {
            this.isFinished = true;
            clearInterval(stupidTimer);
        }, (speed+10) * text.length * 0.8);

        myLoop();
    }

    speedup(){
        this.t_speed = 1;
    }

    get finished(){
        return this.isFinished;
    }


}

// PLay blinknig animaiton
const animation = new blinkingTest('eGuardian Developement', 'MainText',20)
const animation2 = new blinkingTest('CS student in Sofia, Bulgaria', 'InformationText',10)

id = setInterval(() => {
    if(animation.isFinished){
        animation2.play();
        clearInterval(id);
    }
}, 5);

id2 = setInterval(() => {
    if(animation2.isFinished){
        btnanim.play();
        clearInterval(id2);
    }
}, 5);



//CursorMove();
// SecondPart();

// ================
// start animations
// ================

const intervalTimer = 20 * 60


// if(Math.floor((Date.now() - localStorage.firstTimeDate)/1000) > intervalTimer){
//     localStorage.firstTime = '0';
// }

var firstTime = localStorage.firstTime != '1';
localStorage.firstTime = '1';



if(firstTime){
    console.log("first");
    localStorage.firstTimeDate = Date.now();
    SecondPart();
}else{
    console.log("not first");
    SecondPart();
    finishAllAnim();
    btnanim.play();

}


function finishAllAnim(){
    btnanim.seek(btnanim.duration);
    logoTimeLine.seek(logoTimeLine.duration);
    logoUp.seek(logoUp.timeline);
    animation.speedup();
    animation2.speedup();
    animation.play();
    animation2.play();
    clearInterval(id);
    clearInterval(id2);
}



window.onscroll = function() {
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 50) {
        finishAllAnim();
    }
}







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