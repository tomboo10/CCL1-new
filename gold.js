import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Gold extends BaseGameObject{
    name = 'gold'

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImages(['images/gold.jpg'])
    }
}


export { Gold }