import { BaseGameObject } from "./baseGameObject.js"
import { global } from "../modules/global.js";

class Dynamid extends BaseGameObject{
    name = "dynamid"
    active = true;

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImages(['images/dynamid.jpeg'])
    }
}

export { Dynamid }