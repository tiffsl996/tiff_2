import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';
export class FlyingBlock extends GameObject {
    constructor(canvas, image, data, xPercentage, yPercentage) {
        super(canvas, image, data, 0.0, 0.0);
        this.platformX = xPercentage * GameEnv.innerWidth;
        this.platformY = yPercentage;

    // constructors sets up Character object 
        //Unused but must be defined
        this.name = name;
        this.yPercentage = yPercentage;

        //Initial Position of Goomba
        this.x = xPercentage * GameEnv.innerWidth;
        this.y = 0.4 * GameEnv.innerHeight;
        
        //Access in which a Goomba can travel
        this.minPosition = minPosition * GameEnv.innerWidth;
        this.maxPosition = this.x + xPercentage * GameEnv.innerWidth;

        this.immune = 0;

        //Define Speed of Enemy
        if (GameEnv.difficulty === "normal") {
            this.speed = this.speed;
        } else {
            this.speed = this.speed * 2;
        }
    }
    
    update() {
        super.update();

        if (this.x <= this.minPosition || (this.x + this.canvasWidth >= this.maxPosition) || this.x > (GameEnv.innerWidth - 100) ) {
            this.speed = -this.speed;
        }

        this.dropBlock();

        // Every so often change direction
        if (Math.random() < 0.005) {
            this.speed = Math.random() < 0.5 ? -this.speed : this.speed;
        }

        //Chance for Goomba to turn Gold
        if (["normal","hard"].includes(GameEnv.difficulty)) {
            if (Math.random() < 0.00001) {
                this.canvas.style.filter = 'brightness(1000%)';
                this.immune = 1;
            }
        }
        
        //Immunize Goomba & Texture It
        if (GameEnv.difficulty === "hard") {
                this.canvas.style.filter = "invert(100%)";
                this.canvas.style.scale = 1.00;
                this.immune = 1;
        } else if (GameEnv.difficulty === "impossible") {
                this.canvas.style.filter = 'brightness(1000%)';
                this.canvas.style.transform = "rotate(180deg)"
                this.immune = 1;
        }

        // Move the enemy
        this.x -= this.speed;
    }
}


/**
 * followPlayer Purpose:
 * Allows for smooth movement &
 * Dynamically changes based off player Y
 * 
 * @param {number} min Start Point
 * @param {number} max Destination
 * @param {number} t Rate of Change
 * @returns 
 * 
 */
function followPlayer(min, max, t) {
  return (max - min) * t + min;
}

export default FlyingBlock;