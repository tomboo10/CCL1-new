import { global } from "./global.js";
import { Surface } from "../gameObjects/surface.js";
import { Miner } from "../gameObjects/miner.js";
import { Gold } from "../gameObjects/gold.js";
import { Bomb } from "../gameObjects/bomb.js";
import { Silver } from "../gameObjects/silver.js";
import { BombDetection } from "../gameObjects/bombDetection.js";
import { Dynamid } from "../gameObjects/dynamid.js";
import { DynamidCollison } from "../gameObjects/dynamidCollision.js";
import { ExtraLive } from "../gameObjects/extraLive.js";
import { BombDetectionPicture } from "../gameObjects/bombDetectionPicture.js";
import { maps } from "../gameObjects/maps.js";
import { FixedBlock } from "../gameObjects/fixedBlock.js";




function gameLoop(totalRunningTime) { 
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
    global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
    global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output 

    checkScore();
    
    global.detectionColor = 'yellow'
    for (var i = 0; i < global.allGameObjects.length; i++) { //loop in the (game)loop -> the gameloop is continous anyways.. and on every cylce we do now loop through all objects to execute several operations (functions) on each of them: update, draw, collision detection, ...
        if (global.allGameObjects[i].active == true) {
            global.allGameObjects[i].storePositionOfPreviousFrame();
            global.allGameObjects[i].update();
            global.checkCollisionWithAnyOther(global.allGameObjects[i]);
            global.allGameObjects[i].draw();
        }
    }
    
    requestAnimationFrame(gameLoop); // This keeps the gameLoop running indefinitely
}

function countDownTimer(){
if(global.countdownflag == true){
    let startTimer = document.getElementById('startTimer')

    if(global.startCountdown > 0){
    global.startCountdown --;
    startTimer.innerHTML = "Timer: " + global.startCountdown;
    }

    else if(global.startCountdown === 0 && global.normalCountdown > 0){
        global.normalCountdown --;
        startTimer.innerHTML = "Timer: " + global.normalCountdown;        
    }

    else if(global.normalCountdown === 0 && global.endGameCalled === true){
        global.playerObject.endGame();
        global.endGameCalled = false;
    }
}
   
}

function createSurfaceWithDelay(x, y, width, height){
    let surface = new Surface(x, y, width, height);
    surface.active = false;

    setTimeout(function(){
        surface.active = true},5000)
        return surface
}

function createMinerWithDelay(x, y, width, height){
    let miner = new Miner(x, y, width, height);
    global.minerActive = false;

    setTimeout(function(){
        global.minerActive = true},5000)
        return miner
}


function checkScore(){

    if(global.gameFinished === false){
    if(global.level === 'easy' && global.score >= 36){
        wonGame();
    }
    if(global.level === 'middle' && global.score >= 52){
        wonGame();
    }
    if(global.level === 'hard' && global.score >= 66){
        wonGame();
    }
}
}


function wonGame(){
    global.gameFinished = true;

    document.getElementById('gameEnd').style.display = 'flex'

    document.getElementById('allGameThings').style.display = "none"

    global.logScore();
    global.winnerBeautifulQuote();

    document.getElementById('restartButton').addEventListener('click', function(){
        requestAnimationFrame(function(){
        window.location.reload()}
    )})

    let gameEnd = document.getElementById('gameEnd')
    gameEnd.style.backgroundImage = 'url("./images/wonImage.jpeg")'
    
}


function setupGame(level) {
    global.level = level

    setInterval(countDownTimer, 1000)

    document.getElementById('allGameThings').style.display = 'flex'
    global.canvas.style.display = 'flex'
    let startGame = document.getElementById('startGame')
    startGame.style.display = 'none'

    let map = maps[level]


    for(let i = 0; i < map.length; i++){   


        let innerArray = map[i];
        for(let j = 0; j < innerArray.length; j++){                 //  for every single [] you execute (10 times) the numbers in the array

            if(innerArray[j] == 0){
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
            else if (innerArray[j] == 1){
                new Gold(global.width * j, global.height * i, global.width, global.height)
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
            else if (innerArray[j] == 2){
                let x = new Bomb(global.width * j, global.height * i, global.width, global.height)
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
            else if (innerArray[j] == 3){
                new Silver(global.width * j, global.height * i, global.width, global.height)
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
            else if (innerArray[j] == 4){
                new Dynamid(global.width * j, global.height * i, global.width, global.height)
                new DynamidCollison(global.width * j - global.width, global.height * i - global.height , global.width *3, global.height *3)
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
            else if (innerArray[j] == 5){
                new ExtraLive(global.width * j, global.height * i, global.width, global.height)
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
            else if (innerArray[j] == 6){
                new BombDetectionPicture(global.width * j, global.height * i, global.width, global.height)
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
            else if (innerArray[j] == 7){
                new FixedBlock(global.width * j, global.height * i, global.width, global.height)
                createSurfaceWithDelay(global.width * j, global.height * i, global.width, global.height)
            }
        }    
    }
    let miner = global.playerObject = createMinerWithDelay(0, 0, global.width, global.height)
    new BombDetection (miner.x, miner.y, miner.width*3, miner.height *3)
}



document.getElementById('easyButton').addEventListener('click', function() {setupGame('easy')})
requestAnimationFrame(gameLoop);

document.getElementById('middleButton').addEventListener('click', function() {setupGame('middle')})
requestAnimationFrame(gameLoop);

document.getElementById('hardButton').addEventListener('click', function() {setupGame('hard')})
requestAnimationFrame(gameLoop);


/* this is a fix that makes your game still runable after you left the tab/browser for some time: */
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      global.deltaTime = performance.now();
    } 
});
