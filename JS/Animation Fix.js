
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
    complete: function(){checkIfMobile();}
    
},1000);
logoTimeLine.pause();


window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function checkIfMobile(){
    console.log("done");
    if(window.mobileCheck()){
        animation.play();
    }else{
        logoUp.play();
    }
}

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


const diffSeconds = 900;

if(firstTime){
    localStorage.firstTimeDate = Date.now().toString();
    SecondPart();
}else{
    let diff = Date.now()-localStorage.firstTimeDate;
    if(diff > diffSeconds *1000){
        SecondPart();
        localStorage.firstTimeDate = Date.now().toString();
    } else{
        SecondPart();
        finishAllAnim();
        btnanim.play();
    }

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