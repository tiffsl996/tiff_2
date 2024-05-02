---
comments: True
toc: True
layout: post
title: Mario | Elevated Platforms | Student
description: A lesson designed to help you create your own platform for your game
courses: {'csse': {'week': 15}}
type: collab
author: Gavin Copley, Zafeer Ahmed, Ryan Nguyen
---

<a href="https://ryann96.github.io/Team-Project/mariogame">Mario Platforms</a>

### Using OOP
We use Object Orientated Programming to complete this task. OOP uses objects, classes, variables, and includes a plethora of other items to create, in this case, a developed and fully functional javascript game! Follow along as we go through the steps to make 3 of the following additions: A platform, a coin.

## What do we expect?
We want the platform to be able to be walked on, we want to be able to jump off of it and jump onto it. We also want a coin to that can have collision with the player.

## Step 1: Making A Platform Class
First, we need to make a new .js file to store our information. We named ours PlatformO.js, but you can name it whatever you want. However, if you do that, make sure you reference the correct file name when trying to import it (not recommended). 
- Include the following code to make sure that it runs with the rest of the game:


```python
import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class PlatformO extends GameObject {
    constructor(canvas, image) {
        super(canvas, image, 0);
    }

    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        this.ctx.drawImage(this.image, 0, 0);
    }

    // Set platform position
    size() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = GameEnv.innerHeight * (60/832);
        // Formula for Width is scaled: scaledWidth/scaledHeight == this.width/this.height
        const scaledWidth = 150;
        const platformX = .1 * GameEnv.innerWidth;
        const platformY = (GameEnv.bottom - scaledHeight) - 150;

        // set variables used in Display and Collision algorithms
        this.bottom = platformY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
    
        //this.canvas.width = this.width; 
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${platformX}px`;
        this.canvas.style.top = `${platformY}px`; 

    }
}

export default PlatformO;
```

This code is very similar to the tube code. The PlatformO class is extending the GameObject class, and after being defined, we can now change values and key features that are needed from a platform. 

Constructor initializes the class and super inherits the traits from the class that it is extending. Draw draws it on the canvas and size adjusts values like position, height, and width.

There are many files in which we need to make changes so the game is aware of the platform. Namely, the md file that the game is being displayed in, Player.js so we can have the player collide and stand on the platform, and also some code in GameLevel.
- Most of the values are in this code is changeable; we can change the position, size, and so on for the platform. Be sure to experiment!

Lets make the platform have an image. Lets navigate to the file named "2023-11-27-CSSE-oop-game-levels.md" or whatever you named your main file that holds the game. The following code is needed to provide an image for the platform (image is in slack)


```python
var assets = {
    // other stuff up
    platformO: {
        grass: { src: "/images/brick_wall.png" },
    },
    // other stuff down
};
```

Scroll down to find and add to the next part...


```python
new GameLevel( {
    tag: "hills", 
    background: assets.backgrounds.hills, 
    platform: assets.platforms.grass, 
    platformO: assets.platformO.grass, // This is what we need to add
    player: assets.players.mario, 
    tube: assets.obstacles.tube, 
    callback: testerCallBack, 
    thing: assets.thing.coin, 
} );
```

Now we need to edit the GameLevel.js file. This will make the platform constructed with the image when the level starts.


```python
constructor(gameObject) {
    // conditional assignments from GameObject to instance variables
    this.tag = gameObject?.tag;
    this.backgroundImg = gameObject.background?.file;
    this.platformImg = gameObject.platform?.file;
    this.platformOImg = gameObject.platformO?.file; // You want to add this one!
    this.thingImg = gameObject.thing?.file; 
    this.playerImg = gameObject.player?.file;
    this.playerData = gameObject?.player;
    this.tubeImg = gameObject.tube?.file;
    this.isComplete = gameObject?.callback; // function that determines if level is complete
    GameEnv.levels.push(this);
}
```

Scroll down and add this too


```python
const imagesToLoad = [];
// other stuff
if (this.platformOImg) {
    imagesToLoad.push(this.loadImage(this.platformOImg));
}
```


```python
if (this.platformOImg) {
    const platformCanvas = document.createElement("canvas");
    platformCanvas.id = "jumpPlatform";
    document.querySelector("#canvasContainer").appendChild(platformCanvas);
    const platformSpeedRatio = 0;
    new PlatformO(platformCanvas, loadedImages[i], platformSpeedRatio);
    i++;
}
```

### Make sure you have this!
This code is mandatory for the platform to be displayed!
This code is all based off of Mr. Mortensen's previous code and uses his code as an example.

## Step 2: Adding Collision
Next, we are going to be adding collision to the platform. To do this, we have to go into Player.js and add code for collision for the platform so the character can stand on it.

We need to add the following code next to the tube collision:


```python
if (this.collisionData.touchPoints.other.id === "jumpPlatform") {
    // Collision with the left side of the Platform
    console.log("id")
    if (this.collisionData.touchPoints.other.left && (this.topOfPlatform === true)) {
        this.movement.right = false;
        console.log("a")
    }
    // Collision with the right side of the platform
    if (this.collisionData.touchPoints.other.right && (this.topOfPlatform === true)) {
        this.movement.left = false;
        console.log("b")
    }
    // Collision with the top of the player
    if (this.collisionData.touchPoints.this.ontop) {
        this.gravityEnabled = false;
        console.log("c")
    }
    if (this.collisionData.touchPoints.this.bottom) {
        this.gravityEnabled = false;
        console.log("d")
    }
    if (this.collisionData.touchPoints.this.top) {
        this.gravityEnabled = false;
        this.topOfPlatform = true; 
        console.log(this.topOfPlatform + "top")
        console.log(this.gravityEnabled + "grav")
        //console.log("e");
    }
}
```

Make sure to have the following code to the else statement below the previous code


```python
this.topOfPlatform = false;
this.movement.left = true;
this.movement.right = true;
this.movement.down = true;
this.gravityEnabled = true;
```

These 2 pieces of code both affect the collision of the player with the platform. We are using Mr Mortensen's collisionData.touchPoints and using it to detect collision with the platform.

This is the complete code for the platform. Be sure to ask me anything if you need extra help or if anything is unclear.

The next thing we added to our game was the coin, which we will attempt to allow you to reload the page once you touch it. 

- Make sure you have the coin.png downloaded*
- The first thing we are going to do is locate the JS files in platformer, and create one (which we called Thing1 for simplicity, but you can call it Coin.js)



change your widthReduction to the same as ours! This is found in gameObject:


```python

// Calculate hitbox constants
const percentage = 0.3;
const widthReduction = thisRect.width * percentage;
const heightReduction = thisRect.height * (percentage - 0.35);
// Build hitbox by subtracting reductions from the left, right, top, and bottom
const thisLeft = thisRect.left + widthReduction;
const thisTop = thisRect.top + heightReduction;
const thisRight = thisRect.right - widthReduction;
const thisBottom = thisRect.bottom - heightReduction;
```

Make sure you add this to part of your player.js. There is an existing version of this code already just change it to this under isGravityAnimation


```python

if (key in this.pressedKeys) {
    result = (!this.isIdle && (this.topOfPlatform ||this.bottom <= this.y));
}
```

## Adding the coin png

*These first few steps will be a repeat, but necessary for the coin to show up in the game

Locate the CSSE-oop game level md file


```python
// Define assets for the game
    var assets = {

      ...Previous code
      
      thing: { //you can call the key value pair anything you want, but we recommmend you call it thing
        coin: { src: "/images/Coin.png" } //Add this one!
      },  
      platformO: {
        grass: { src: "/images/brick_wall.png" },
      },
```

We called our group "thing" but you can call it whatever you want. We defined the image as coin and then pasted the image source. 


```python
// Game screens
    new GameLevel( {tag: "hills", background: assets.backgrounds.hills, platform: assets.platforms.grass, 
    platformO: assets.platformO.grass, player: assets.players.mario, tube: assets.obstacles.tube, 
    callback: testerCallBack, thing: assets.thing.coin, } ); // <-- add the line thing: assets.thing.con
```

Again, your code will differ from ours if you didn't name it "Thing". 

Next thing we want you to do is 

- Just like the platfrom, make a new .js file and call it Thing1.js

*Create it now, we will work with it later


```python
//Go to the game level.js File. 
```


```python
//First thing you have to do is import the Thing1 JS file

import Thing1 from './Thing1.js';
```


```python
// Store the assets and attributes of the Game at the specific GameLevel.
class GameLevel {
    constructor(gameObject) {
        // conditional assignments from GameObject to instance variables
        this.tag = gameObject?.tag;
        this.backgroundImg = gameObject.background?.file;
        this.platformImg = gameObject.platform?.file; // ADD THIS !!!!
        this.platformOImg = gameObject.platformO?.file;
        this.thingImg = gameObject.thing?.file; 
        this.playerImg = gameObject.player?.file;
        this.playerData = gameObject?.player;
        this.tubeImg = gameObject.tube?.file;
        this.isComplete = gameObject?.callback; // function that determines if level is complete
        GameEnv.levels.push(this);
```

Basically this code initialize the images to the game


```python
// test for presence of Images
const imagesToLoad = [];
if (this.backgroundImg) {
    imagesToLoad.push(this.loadImage(this.backgroundImg));
}
if (this.platformImg) {
    imagesToLoad.push(this.loadImage(this.platformImg));
}
if (this.playerImg) {
    imagesToLoad.push(this.loadImage(this.playerImg)); // ADD THIS LINE OF CODE
}
if (this.tubeImg) {
    imagesToLoad.push(this.loadImage(this.tubeImg));
}
if (this.thingImg) {
    imagesToLoad.push(this.loadImage(this.thingImg));
}
if (this.platformOImg) {
    imagesToLoad.push(this.loadImage(this.platformOImg));
}
```


```python
//under async load, you have to add a try method 

try {
    // Do not proceed until images are loaded
 
    //Previous code.... 
    
    if (this.thingImg) {
        const platformCanvas = document.createElement("canvas");
        platformCanvas.id = "thing2";
        document.querySelector("#canvasContainer").appendChild(platformCanvas);
        const platformSpeedRatio = 0;
        new Thing1(platformCanvas, loadedImages[i], platformSpeedRatio);
        i++;
    }
```

This loads the image on the canvas, it appends the platform to the canvas by loading the image. IMPORTANT TO REMEMBER THE CANVAS ID!!! It's called "thing2"


```python
// The next thing you have to do is go over to the JS file you made (called Thing1.js in platformer) and copy paste the following code
```


```python
import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Thing1 extends GameObject {
    constructor(canvas, image) {
        super(canvas, image, 0);
        // Set the initial position and size
        this.size();
    }

    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        // Save the current transformation matrix
        this.ctx.save();

        // Rotate the canvas 90 degrees to the left
        this.ctx.rotate(-Math.PI / 2);

        // Draw the image at the rotated position (swap x and y)
        this.ctx.drawImage(this.image, -this.image.height, 0);

        // Restore the original transformation matrix
        this.ctx.restore();
    }

    // Center and set Thing1 position with adjustable height and width
    size() {
        // Make the image 10 times smaller
        const scaledWidth = this.image.width * 0.2;
        const scaledHeight = this.image.height * 0.169;

        // Center the object on the screen
        const randomPosition = Math.random() < 0.5; // Randomly choose between two positions

        let thingX, thingY;

        if (randomPosition) {
            thingX = (GameEnv.innerWidth - scaledWidth) / 2.5;
            thingY = (GameEnv.innerHeight - scaledHeight) / 1.01;
        } else {
            thingX = (GameEnv.innerWidth - scaledWidth) / 7.5;
            thingY = (GameEnv.innerHeight - scaledHeight) / 2.02;
        }

        // Set variables used in Display and Collision algorithms
        this.bottom = thingY + scaledHeight;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;

        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${thingX}px`;
        this.canvas.style.top = `${thingY}px`;
    }

   
    }

export default Thing1;


```

This code basically.. has 


```python
//The next thing you have to do go over to the Player.js (under platformer file)
```


```python
//Under Collision action()

put the following code 

else {
    if (this.collisionData.touchPoints.other.id === "thing2") {
        // Collision with the left side of the Tub
        if (this.collisionData.touchPoints.coin.left) {
            this.touchCoin = true;
            console.log("o")
            window.location.reload();
        }
        // Collision with the right side of the Tube
        if (this.collisionData.touchPoints.coin.right) {
            console.log("p")
            this.touchCoin = true;
            window.location.reload();
        }
    }  

    
```

This code uses collisionData.touch.points.right which uses its own collision points, and its used to differnciate from the other collision data, the console. log is used to check to see if the player is touching the coin, and the window.location.reload(); is used to reload the page. 

## Your Homework!
For homework we want you to complete both of these or just one and something unique and creative
- Make the coin disappear after touching it. The coin collision is given.
- Make some more platforms to jump on
