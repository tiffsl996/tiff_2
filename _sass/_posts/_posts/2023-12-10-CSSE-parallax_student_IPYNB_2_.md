---
comments: True
toc: True
layout: post
title: Mario | Parallax | Student
courses: {'csse': {'week': 15}}
type: collab
author: Daisy, Kaden, Gabe
---

# Intro
Parallax scrolling occurs when there are different layers of backgrounds that move at different speeds in relation to the character to create a sense of depth. In other words, one thing is stationary while a background moves. Parallax scrolling can be beneficial by adding interest to an otherwise static website/game. Transitions from screen to screen and other transitions that happen when the user does something like press buttons, can also help the game feel smoother.

Some cool examples of Parallax Scrolling and resources:
- https://kevinzhangweb.com/
- http://springsummer.gucci.com/
- https://www.spacex.com/vehicles/falcon-9/
- https://www.sketch.com/blog/what-is-a-parallax-effect/
- https://webflow.com/blog/parallax-scrolling

# Step 1

Add the image into images/platformer/backgrounds. Then add the Background2.js into assets/js/platformer.

# Step 2

Lets get the background into the game. Define mountains as a background image; do this in the main file 2023-11-27-CSSE-oop-game-levels.md and in assets within the background asset.


```python
mountains: { src: "/images/platformer/backgrounds/mountains.jpg"}
```

Add the second background into the "hills" constructor.


```python
new GameLevel( {tag: "hills", background: assets.backgrounds.hills, background2: assets.backgrounds.mountains, platform: assets.platforms.grass, player: assets.players.mario, tube: assets.obstacles.tube, callback: testerCallBack } );
```

Then go to the GameLevel.js file and add this to the constructor.


```python
this.backgroundImg2 = gameObject.background2?.file;
```

Then we need to load the image using this code.


```python
if (this.backgroundImg2) {
    imagesToLoad.push(this.loadImage(this.backgroundImg2));
}
```

After we load the code we then have to create the new background. Make sure this is above the backgroundImg so it will create the canvas behind the original background.


```python
if (this.backgroundImg2) {
    const backgroundCanvas = document.createElement("canvas");
    backgroundCanvas.id = "background";
    document.querySelector("#canvasContainer").appendChild(backgroundCanvas);
    const backgroundSpeedRatio = 0;
    new Background2(backgroundCanvas, loadedImages[i], backgroundSpeedRatio);
    i++;
}
```

Now we have the image in the code but we still need a different file to help create this second background. Make a new js file called Background2.js. You can use the regular background code just make sure to call it Background2 and export background2.

# Step 3

Now that we have the image into the game we can start to make it move. First we need to navigate to the GameEnv.js file. Now make a new variable for the background speed and set it to zero.


```python
static backgroundSpeed2 = 0;
```

Now that we have this this variable we can use it in the background update funtion. If you change this variable in GameEnv.js it should make the background move.


```python
this.speed = GameEnv.backgroundSpeed2;
```

Now the background moves but we need it to move when the player moves. Now go to the Player.js file. We will add an if statement within the keydown function to detect when "a" is pressed and move the background right, and when "d" is pressed move the background left. Just make sure the backgroundSpeed2 variable is set to 0.


```python
if (key === "a") {
    GameEnv.backgroundSpeed2 = -0.1;
}
if (key === "d") {
    GameEnv.backgroundSpeed2 = 0.1;
}
```

Now the background moves when the character moves but it dosent stop. We can add these same if statements to the keyup function but just set the variable to 0. This should stop the background from moving when the player moves.


```python
if (key === "a") {
    GameEnv.backgroundSpeed2 = 0;
}
if (key === "d") {
    GameEnv.backgroundSpeed2 = 0;
}
```

Also need to change the starting x value otherwise we run into some issues.


```python
export class Background2 extends GameObject {
    constructor(canvas, image, speedRatio) {
        super(canvas, image, speedRatio);
        this.x = -1000;
    }
```

Now the background moves with the player. In order to get a full parallax effect both backgrounds need to be moving at different speeds. The background in the foreground should move faster then the one in the back. We can do this by using all the same code but in the Background.js file instead of the Background2.js file.


```python
// add this to GameEnv.js
static backgroundSpeed = 0;

// add this to Background.js
this.speed = GameEnv.backgroundSpeed;

// add this to the keydown if statements in player.js
GameEnv.backgroundSpeed = -0.4;
GameEnv.backgroundSpeed = 0.4;

// add this to the keyup if statements in player.js
GameEnv.backgroundSpeed = 0;
GameEnv.backgroundSpeed = 0;
```

That should all work but you might notice a weird shadow. To fix this we can clear the canvas before it draws it so add this to the update function in Background.js


```python
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
```

# Step 4

We can also add transitions to buttons and moving from screen to screen. Add keyframes in the main game file in the <style> </style> brackets, in this case fade in and fadeout change opacity and flashing makes button flash with 0.5s between each flash. Referencing the ids created in the GameLevel.js file “background” and “platform.”


```python
<style>
  #gameBegin, #controls, #gameOver {
    position: relative;
    z-index: 2; /*Ensure the controls are on top*/
  }
  
  #toggleCanvasEffect, #background, #platform {
    animation: fadein 5s;
  }

  #startGame {
    animation: flash 0.5s infinite;
  }

  @keyframes flash {
    50% {
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {opacity: 1}
    to {opacity: 0}
  }

  @keyframes fadein {
    from {opacity: 0}
    to {opacity: 1}
  }
</style>
```

# Homework

- Add transitions
- Add both moving backgrounds
- Make backgrounds move with the player

### Challenge

- Add transition effect to from the mario level to the alien level
