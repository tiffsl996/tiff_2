---
toc: False
hide: True
layout: post
title: JS Mario 1-Player
description: A lesson designed to help you create your own player for your game
courses: {'csse': {'week': 7}}
type: ccc
author: Nicholas Ramos and Samaya Sankuratri
---

{% include mario_nav.html %}



```python
 %%html
<style>
    #canvas {
        margin: 0;
        border: 1px solid white;
    }
</style>
<canvas id='canvas'></canvas>
<script>
    // Create empty canvas
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');
    // Set the canvas dimensions
    canvas.width = 650;
    canvas.height = 400;
    // Define gravity value
    let gravity = 1.5;
    // Define the Player class
    class Player {
        constructor() {
            // Initial position and velocity of the player
            this.position = {
                x: 100,
                y: 200
            };
            this.velocity = {
                x: 0,
                y: 0
            };
            // Dimensions of the player
            this.width = 30;
            this.height = 30;
        }
        // Method to draw the player on the canvas
        draw() {
            c.fillStyle = 'red';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        // Method to update the players position and velocity
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            if (this.position.y + this.height + this.velocity.y <= canvas.height)
                this.velocity.y += gravity;
            else
                this.velocity.y = 0;
        }
    }
    // Create a player object
    player = new Player();
    // Define keyboard keys and their states
    let keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    };
    // Animation function to continuously update and render the canvas
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        player.update();
        if (keys.right.pressed && player.position.x + player.width <= canvas.width - 50) {
            player.velocity.x = 15;
        } else if (keys.left.pressed && player.position.x >= 50) {
            player.velocity.x = -15;
        } else {
            player.velocity.x = 0;
        }
    }
    animate();
    // Event listener for keydown events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                console.log('left');
                keys.left.pressed = true;
                break;
            case 83:
                console.log('down');
                break;
            case 68:
                console.log('right');
                keys.right.pressed = true;
                break;
            case 87:
                console.log('up');
                player.velocity.y -= 20;
                break;
        }
    });
    // Event listener for keyup events
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                console.log('left');
                keys.left.pressed = false;
                break;
            case 83:
                console.log('down');
                break;
            case 68:
                console.log('right');
                keys.right.pressed = false;
                break;
            case 87:
                console.log('up');
                player.velocity.y = -20;
                break;
        }
    });
</script>
```


<style>
   #canvas {
       margin: 0;
       border: 1px solid white;
   }
</style>
<canvas id='canvas'></canvas>
<script>
   // Create empty canvas
   let canvas = document.getElementById('canvas');
   let c = canvas.getContext('2d');
   // Set the canvas dimensions
   canvas.width = 650;
   canvas.height = 400;
   // Define gravity value
   let gravity = 1.5;
   // Define the Player class
   class Player {
       constructor() {
           // Initial position and velocity of the player
           this.position = {
               x: 100,
               y: 200
           };
           this.velocity = {
               x: 0,
               y: 0
           };
           // Dimensions of the player
           this.width = 30;
           this.height = 30;
       }
       // Method to draw the player on the canvas
       draw() {
           c.fillStyle = 'red';
           c.fillRect(this.position.x, this.position.y, this.width, this.height);
       }
       // Method to update the players position and velocity
       update() {
           this.draw();
           this.position.y += this.velocity.y;
           this.position.x += this.velocity.x;
           if (this.position.y + this.height + this.velocity.y <= canvas.height)
               this.velocity.y += gravity;
           else
               this.velocity.y = 0;
       }
   }
   // Create a player object
   player = new Player();
   // Define keyboard keys and their states
   let keys = {
       right: {
           pressed: false
       },
       left: {
           pressed: false
       }
   };
   // Animation function to continuously update and render the canvas
   function animate() {
       requestAnimationFrame(animate);
       c.clearRect(0, 0, canvas.width, canvas.height);
       player.update();
       if (keys.right.pressed && player.position.x + player.width <= canvas.width - 50) {
           player.velocity.x = 15;
       } else if (keys.left.pressed && player.position.x >= 50) {
           player.velocity.x = -15;
       } else {
           player.velocity.x = 0;
       }
   }
   animate();
   // Event listener for keydown events
   addEventListener('keydown', ({ keyCode }) => {
       switch (keyCode) {
           case 65:
               console.log('left');
               keys.left.pressed = true;
               break;
           case 83:
               console.log('down');
               break;
           case 68:
               console.log('right');
               keys.right.pressed = true;
               break;
           case 87:
               console.log('up');
               player.velocity.y -= 20;
               break;
       }
   });
   // Event listener for keyup events
   addEventListener('keyup', ({ keyCode }) => {
       switch (keyCode) {
           case 65:
               console.log('left');
               keys.left.pressed = false;
               break;
           case 83:
               console.log('down');
               break;
           case 68:
               console.log('right');
               keys.right.pressed = false;
               break;
           case 87:
               console.log('up');
               player.velocity.y = -20;
               break;
       }
   });
</script>



## Specific Hacks - Pick One
- Try to stop the player from double jumping
- Make the player rotate when it jumps (like in the game Geometry Dash)

## Open Ended Hack
- Make the player a sprite animation
