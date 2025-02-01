import { BaseGameObject } from "./baseGameObject.js"
import { global } from "../modules/global.js";
import { Miner } from "./miner.js";

class BombDetection extends BaseGameObject{
    name = "bombDetection"
    canCollide = true
    hasBorder = true


    draw = function () {
        if(global.setBombDetectionActive === true){
        if(this.hasBorder){
            global.ctx.strokeStyle = global.detectionColor
            global.ctx.lineWidth = 1;
            global.ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
    }
    };

    update = function(){ 
        this.x = global.playerObject.x - this.width / 3;        // Center around miner
        this.y = global.playerObject.y - this.height / 3;
    }

   

    reactToCollision = function(collidingObject) {
        if(global.setBombDetectionActive === true){
            console.log(collidingObject);
        if(collidingObject.name === 'bomb') { 
            global.detectionColor = 'red'
            console.log("Wird red")
        }
         
        //  if(collidingObject.name !== 'bomb' && global.detectionColor != "red"){
        //     global.detectionColor = 'yellow'
        //     console.log("Wird yellow")
        // }
    }
}


    constructor(x, y, width, height){
        super(x, y, width, height)

    }
}


export { BombDetection }