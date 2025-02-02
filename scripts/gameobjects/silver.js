import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Silver extends BaseGameObject{
    name = 'silver'

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImages(['images/silver.jpeg'])
    }
}


export { Silver }