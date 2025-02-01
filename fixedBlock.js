import { global } from "../modules/global.js"
import { BaseGameObject } from "./baseGameObject.js"

class FixedBlock extends BaseGameObject{
    name = "fixedBlock"
    setActive = false


    getNextSprite = function () {
        this.animationData.currentSpriteElapsedTime += global.cubeSpriteChangeSpeed * global.deltaTime;

        if (this.animationData.currentSpriteElapsedTime >= this.animationData.timePerSprite) {
            this.animationData.currentSpriteIndex++;
            this.animationData.currentSpriteElapsedTime = 0;
            if (this.animationData.currentSpriteIndex > this.animationData.lastSpriteIndex) {
                this.animationData.currentSpriteIndex = this.animationData.firstSpriteIndex
            }
        }
        return this.animationData.animationSprites[this.animationData.currentSpriteIndex];
    };


    reactToCollision = function(collidingObject) {

        if(this.setActive === true){

         if(collidingObject.name === 'surface'){
                 collidingObject.active = false
                  console.log('collided with surface')
             }
        }
    }

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImagesFromSpritesheet('images/cube_sprite_sheet.png', 4, 1)
        this.switchCurrentSprites(0,3);
    }
}


export { FixedBlock }