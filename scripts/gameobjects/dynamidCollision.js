import { BaseGameObject } from "./baseGameObject.js"
import { global } from "../modules/global.js";
import { Miner } from "./miner.js";

class DynamidCollison extends BaseGameObject{
    name = "dynamidCollision"
    hasBorder = true
    active = true

    
    draw = function () {

    };

    reactToCollision = function(collidingObject) {

        if(global.setDynamidActive == true){
       
         if(collidingObject.name === 'surface'){
                 collidingObject.active = false
                  console.log('collided with surface')
             }
        }
    }



    constructor(x, y, width, height){
        super(x, y, width, height)

    }
}


export { DynamidCollison }