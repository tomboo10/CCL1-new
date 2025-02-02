import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class BombDetectionPicture extends BaseGameObject{
    name = "bombDetectionPicture";
    active = true;

    reactToCollision = function(collidingObject) {

       if(collidingObject.name === 'miner'){
                 global.setBombDetectionActive = true
                  console.log('detection collided with miner')
        }
    }

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImages(['images/bombDetector.jpeg'])
    }


}


export { BombDetectionPicture }