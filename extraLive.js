import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class ExtraLive extends BaseGameObject{
    name = 'extraLive'

    getNextSprite = function () {
        this.animationData.currentSpriteElapsedTime += global.heartSpriteChangeSpeed * global.deltaTime;

        if (this.animationData.currentSpriteElapsedTime >= this.animationData.timePerSprite) {
            this.animationData.currentSpriteIndex++;
            this.animationData.currentSpriteElapsedTime = 0;
            if (this.animationData.currentSpriteIndex > this.animationData.lastSpriteIndex) {
                this.animationData.currentSpriteIndex = this.animationData.firstSpriteIndex
            }
        }
        return this.animationData.animationSprites[this.animationData.currentSpriteIndex];
    };

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.loadImagesFromSpritesheet('images/heart_sprite_sheet.png', 3, 1);
        this.switchCurrentSprites(0,2);
    }
}


export { ExtraLive }