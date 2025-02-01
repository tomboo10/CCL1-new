import { BaseGameObject } from "./baseGameObject.js"
import { global } from "../modules/global.js";

class Miner extends BaseGameObject{
    name = "miner"
    canCollide = true
    hasBorder = true

    stopMiner = function(){
        let canvasBounds = global.getCanvasBounds();
        let minerBounds = this.getBoxBounds();
        if(minerBounds.left < canvasBounds.left){
            this.x = canvasBounds.left
        }
        else if(minerBounds.right > canvasBounds.right){
            this.x = canvasBounds.right - this.width
        }
        else if(minerBounds.bottom > canvasBounds.bottom){
            this.y = canvasBounds.bottom - this.height
        }
        else if(minerBounds.top < canvasBounds.top){
            this.y = canvasBounds.top
        }
    }
   
     update = function(){
         this.stopMiner();
     }

    reactToCollision = function(collidingObject) {
        switch(collidingObject.name){
            case "bomb":
                global.lives -= 1;
                global.htmlLives.innerHTML = "Lives:" + global.lives;
                collidingObject.name = 'oldBomb'
                collidingObject.animationData.animationSprites = []            // we remove the old pic 
                collidingObject.loadImages(['images/explodedBomb.jpg'])         // and add the "exploded" pic
                let explosionSound = new Audio('audio/explosionSound.mp3')
                explosionSound.play();

                alert ("You collided with a bomb: Lives -1")
                if(global.lives <= 0){
                    this.active = false
                    this.showGameAfterDeath();
                    // this.endGame();
                }
            break;

            case 'extraLive':
                global.lives += 1;
                global.htmlLives.innerHTML = "Lives:" + global.lives;
                collidingObject.name = 'oldextraLive'
                break;

            case "gold":
                global.score += 5
                global.logCurrentScore();
                collidingObject.name = "oldGold"
                collidingObject.animationData.animationSprites = []            // we remove the old pic 
                collidingObject.loadImages(['images/goldCollected.jpeg'])
                let goldSound = new Audio('audio/goldSound.mp3')
                goldSound.play();
                break;

            case "silver":
                global.score += 2
                global.logCurrentScore();
                collidingObject.name = "oldSilver"
                collidingObject.animationData.animationSprites = []            // we remove the old pic 
                collidingObject.loadImages(['images/silverCollected.jpeg'])
                let silverSound = new Audio('audio/silverSound.mp3')
                silverSound.play();
                break;

            case "dynamid":
                collidingObject.name = "oldDynamid"
                global.setDynamidActive = true
                console.log('miner collided with dynamid')
                break;
            
            case "fixedBlock":
                this.x = this.previousX
                this.y = this.previousY
                collidingObject.setActive = true
                console.log('miner collided with unmovable block')
                break;
            }
    }





    showGameAfterDeath = function(){
        if(global.lives <= 0){
            let shownCount = 0;

            let activeSurfaces = [];
        for (let i = 0; i < global.allGameObjects.length; i++) {
            if (global.allGameObjects[i] && global.allGameObjects[i].name === "surface" && global.allGameObjects[i].active === true) {
                activeSurfaces.push(global.allGameObjects[i]);
            }
        }
                
        
            function showGame(){
                if(shownCount<4){
                    for(let i = 0; i < activeSurfaces.length; i++){
                        activeSurfaces[i].active = false
                    }
                    global.minerActive = false
                    shownCount ++;

                    setTimeout(function(){
                        for(let i = 0; i < activeSurfaces.length; i++){
                            activeSurfaces[i].active = true
                        }
                    },1000)

                    if (shownCount<4){
                        setTimeout(showGame, 2000)}

                    else if(shownCount >= 4){
                        global.playerObject.endGame();
                    }
                }
            }
            showGame();
        }
    

        
    }

    endGame = function(){
        let gameEnd = document.getElementById('gameEnd')
        gameEnd.style.display = 'flex'
        gameEnd.style.backgroundImage = 'url("./images/gameOver.jpg")'
        let canvas = document.getElementById('allGameThings')
        canvas.style.display = 'none'

        global.logScore();
        global.looseBeautifulQuote();

        let restartButton = document.getElementById('restartButton')
        restartButton.addEventListener('click', function(){
            requestAnimationFrame(function(){
            window.location.reload()}
        )})

    }

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImagesFromSpritesheet('images/miner_sprite_sheet.png', 3, 4)
    }
}


export { Miner }