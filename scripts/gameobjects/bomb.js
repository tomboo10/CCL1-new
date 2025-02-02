import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Bomb extends BaseGameObject{
    name = "bomb";
    active = true;



    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImages(['images/bomb copy.png'])
    }


}


export { Bomb }