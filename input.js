import { Miner } from "../gameObjects/miner.js";
import { global } from "./global.js";

function move(event) {
if(global.minerActive === true){
    switch(event.key) {
        case "d":
            global.playerObject.x += global.playerObject.width
            console.log("miner moved right");
            global.playerObject.switchCurrentSprites(9, 11)
            break;
        case "a":
            global.playerObject.x -= global.playerObject.width
            console.log("miner moved left");
            global.playerObject.switchCurrentSprites(6, 8)
            break;
        case "w":
            global.playerObject.y -= global.playerObject.height
            console.log("miner moved up");
            global.playerObject.switchCurrentSprites(0, 2)
            break;
        case "s": 
            global.playerObject.y += global.playerObject.height
            console.log("miner moved down");
            global.playerObject.switchCurrentSprites(3, 5)
            break;
    }
}

}

function stop(event) {
    /*switch(event.key) {
        case "d":
            global.playerObject.xVelocity = 0;
            break;
        case "a":*/
}

document.addEventListener("keypress", move);

//if you just want to move as long as the player presses a key:
document.addEventListener("keyup", stop);