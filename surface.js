import { BaseGameObject } from "./baseGameObject.js"

class Surface extends BaseGameObject{
    name = "surface"
    active = false;

    reactToCollision = function(collidingObject) {
        switch (collidingObject.name){
            case "miner": 
            this.active = false;
        }
    }

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImages(['./images/surface.jpg'])
    }
}

export { Surface }