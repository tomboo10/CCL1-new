import { BaseGameObject } from "../gameObjects/baseGameObject.js";
import { Miner } from "../gameObjects/miner.js";

const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.allGameObjects = [];
global.playerObject = {};
global.lives = 2;
global.score = 0;
global.level;

global.bordercolor = 'yellow';
global.canCollide = true;
global.htmlScore = document.getElementById('score');
global.htmlLives = document.getElementById('lives');
global.width = 30;
global.height = 15;

global.setDynamidActive = false;
global.setBombDetectionActive = false;
global.detectionColor = 'yellow'
global.startCountdown = 10;
global.normalCountdown = 60;
global.countdownflag = true
global.endGameCalled = true;

global.minerActive;
global.gameFinished = false
global.heartSpriteChangeSpeed = 0.6;
global.cubeSpriteChangeSpeed = 0.5;



global.logCurrentScore = function(){
    if(global.level === 'easy'){document.getElementById('score').innerHTML = "Your Score:" + global.score + "/36"}
    if(global.level === 'middle'){document.getElementById('score').innerHTML = "Your Score:" + global.score + "/52"}
    if(global.level === 'hard'){document.getElementById('score').innerHTML = "Your Score:" + global.score + "/66"}
}


global.looseBeautifulQuote = function(){
    let beautifulQuote = document.getElementById('beautifulQuote')

    let quotes = [
    'HAHAHA That was so bad!',
    "Really, that's it. You can do better!!",
    "OMG maybe this game is not for you!",
    "Keep trying Kid, everyone started somewhere!"
    ]

    let randomNum = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNum];
    beautifulQuote.innerHTML = randomQuote;
}

global.winnerBeautifulQuote = function(){
    let beautifulQuote = document.getElementById('beautifulQuote')

    let quotes = [
    'Youu are the beesstt!!',
    "OMG may i marry you ??!!",
    "How can a human being be that good at something?!",
    "With these skills, you should be president, mate!"
    ]

    let randomNum = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNum];
    beautifulQuote.innerHTML = randomQuote;
}


global.getCanvasBounds = function () {
    let bounds =  {
        "left": 0,
        "right": this.canvas.width,
        "top": 0, 
        "bottom": this.canvas.height
    }

    return bounds;
}

global.checkCollisionWithAnyOther = function (givenObject) {
    for (let i = givenObject.index; i < global.allGameObjects.length; i++) {
        let otherObject = global.allGameObjects[i];
        if (otherObject.active == true) {
            let collisionHappened = this.detectBoxCollision(givenObject, otherObject);
            if (collisionHappened) {
                givenObject.reactToCollision(otherObject);
                otherObject.reactToCollision(givenObject);
            }
        }
    }
}


global.detectBoxCollision = function (gameObject1, gameObject2) {
    let box1 = gameObject1.getBoxBounds();
    let box2 = gameObject2.getBoxBounds();
    if (gameObject1 != gameObject2) {
        if (box1.top < box2.bottom && 
            box1.left < box2.right && 
            box1.bottom > box2.top &&
            box1.right > box2.left)
        {
            return true;
        }
    }
    return false;
}



export { global }