console.log("test");

class PCBAnimation{
    RandomReturn;
    lastLenghtOnH;
    lastLenghtOnV;
    usingHcount;
    usingVcount;
    pathToTake ="m 00 00";
    currentH = 0;
    currentV = 0;
    reverseH = 1;
    reverseV = 1;
    RandomReturnWait = 1;
    constructor(){

    }
    ChooseLenght(min,max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    WhichToUse(data){
        if(this.usingVcount > 2){
            this.usingVcount =0;
            return 1}
        if(this.usingHcount > 2){
            this.usingHcount = 0;
                return 0;
        }
        return data;    
    }
    generateNewDesign(){
        this.pathToTake = "m 00 00";
        this.currentH =0;
        this.currentV=0;
            for (let index = 0; index < 50; index++) {
            if(this.RandomReturnWait < 0){
                     this.reverseV = -1;
                    this.RandomReturnWait = this.ChooseLenght(3, 26);
            }else  {
                this.RandomReturnWait  -=1;
            }
            if(this.currentH> screen.width ){
            this.reverseH = -1;
            } else if (this.currentH < 1){
                this.reverseH = 1;
            }
            if(this.currentV> screen.height ){
            this.reverseV = -1;
            } else if ( this.currentV < 1){
            this.reverseV= 1;
            } 
            let randomPosition = Math.floor(Math.random() * 2);
            let fixRotationPos = this.WhichToUse(randomPosition);
            let length_ = this.ChooseLenght(32,550);
            switch (fixRotationPos) {
                case 0:
                this.usingVcount +=1;
                var data = (this.reverseH* length_);
                    this.pathToTake +="h " + (data) + " ";
                this.currentH += data;
                    break;
            
                case 1:
                this.usingHcount +=1;
                var data = (this.reverseV * length_);
                    this.pathToTake +="v " + (data) + " ";
                this.currentV += data;
                    break;
            }
    
        }
        console.log(this.currentH);
            console.log(this.pathToTake);
           document.getElementById('pcbPath').setAttribute('d' , this.pathToTake);
    }
}

var animation4 = new  PCBAnimation();
const anim = anime({
    targets: "#pcbPath",
    strokeDashoffset:[anime.setDashoffset, 0],
    easing:'easeInOutQuad',
    opacity:[0,.7],
    duration: 5000,
    direction: 'alternate',
    loop:true
})
    animation4.generateNewDesign();
setInterval(() => {
    animation4.generateNewDesign();
}, 10000);

  
anim.play();