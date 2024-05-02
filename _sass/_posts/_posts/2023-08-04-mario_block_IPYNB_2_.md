---
toc: False
hide: True
layout: post
title: JS Mario 4-Block
description: A lesson designed to help you create your own block object for your game
courses: {'csse': {'week': 9}}
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
<canvas id="canvas"></canvas>
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
        // Method to update the player position and velocity
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            // Apply gravity if player is not at the bottom
            if (this.position.y + this.height + this.velocity.y <= canvas.height)
                this.velocity.y += gravity;
            else
                this.velocity.y = 0;
        }
    }
    // Define the Platform class
    class Platform {
        constructor(image) {
            // Initial position of the platform
            this.position = {
                x: 0,
                y: 300
            }
            this.image = image;
            this.width = 650;
            this.height = 100;
        }
        // Method to draw the platform on the canvas
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    // Define the Tube class
    class Tube {
        constructor(image) {
            // Initial position of the tube
            this.position = {
                x: 500,
                y: 180
            }
            this.image = image;
            this.width = 100;
            this.height = 120;
        }
        // Method to draw the tube on the canvas
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    //--
    // NEW CODE - DEFINE BLOCKOBJECT CLASS
    //--
    class BlockObject {
        constructor(image) {
            // Initial position of the block object
            this.position = {
                x: 200,
                y: 100
            };
            this.image = image;
            this.width = 158;
            this.height = 79;
        }
        // Method to draw the block object on the canvas
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y);
        }
    }
    // Load images
    let image = new Image();
    let imageTube = new Image();
    //--
    // NEW CODE - ADD IMAGE FOR BLOCK OBJECT
    //--
    let imageBlock = new Image();
    // Load image sources
    image.src = 'https://samayass.github.io/samayaCSA/images/platform.png';
    imageTube.src = 'https://samayass.github.io/samayaCSA/images/tube.png';
    imageBlock.src = 'https://samayass.github.io/samayaCSA/images/box.png';
    // Create platform, tube, and block object instances
    let platform = new Platform(image);
    let tube = new Tube(imageTube);
    //--
    // CREATE BLOCK OBJECT
    //--
    let blockObject = new BlockObject(imageBlock);
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
    }
    // Animation function to continuously update and render the canvas
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        // Draw platform, player, tube, and block object
        platform.draw();
        player.update();
        tube.draw();
        //--
        // DRAW BLOCK OBJECT
        //--
        blockObject.draw();
        //--
        // COLLISIONS BETWEEN BLOCK OBJECT AND PLAYER
        //--
        if (
            player.position.y + player.height <= blockObject.position.y &&
            player.position.y + player.height + player.velocity.y >= blockObject.position.y &&
            player.position.x + player.width >= blockObject.position.x &&
            player.position.x <= blockObject.position.x + blockObject.width
        )
        {
            player.velocity.y = 0;
        }
        // Control player horizontal movement
        if (keys.right.pressed && player.position.x + player.width <= canvas.width - 50) {
            player.velocity.x = 15;
        } else if (keys.left.pressed && player.position.x >= 50) {
            player.velocity.x = -15;
        } else {
            player.velocity.x = 0;
        }
        // Check for collision between player and platform
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }
        // Check for collision between player and tube
        if (
            player.position.y + player.height <= tube.position.y &&
            player.position.y + player.height + player.velocity.y >= tube.position.y &&
            player.position.x + player.width >= tube.position.x &&
            player.position.x <= tube.position.x + tube.width
        ) {
            player.velocity.y = 0;
            player.position.y += 0.1;
            player.velocity.y = 0.0001;
            gravity = 0.2;
        }
        // Reset gravity and collision when not colliding with tube
        if (
            player.position.y + player.height == tube.position.y + tube.height ||
            player.position.y + player.height <= tube.position.y ||
            player.position.x + player.width <= tube.position.x ||
            player.position.x >= tube.position.x + tube.width
        ) {
            gravity = 1.5;
        }
        // Handle collision between player and tube sides
        if (
            player.position.x + player.width <= tube.position.x &&
            player.position.x + player.width + player.velocity.x >= tube.position.x &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
        if (
            player.position.x >= tube.position.x + tube.width &&
            player.position.x + player.velocity.x <= tube.position.x + tube.width &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
        if (
            player.position.x >= tube.position.x &&
            player.position.x + player.velocity.x <= tube.position.x &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
        if (
            player.position.x + player.width <= tube.position.x + tube.width &&
            player.position.x + player.width + player.velocity.x >= tube.position.x + tube.width &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
    }
    // Start the animation loop
    animate();
    // Add event listeners for key presses
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
    // Add event listeners for key releases
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
    })
</script>
```


<style>
    #canvas {
        margin: 0;
        border: 1px solid white;
    }
</style>
<canvas id="canvas"></canvas>
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
        // Method to update the player position and velocity
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            // Apply gravity if player is not at the bottom
            if (this.position.y + this.height + this.velocity.y <= canvas.height)
                this.velocity.y += gravity;
            else
                this.velocity.y = 0;
        }
    }
    // Define the Platform class
    class Platform {
        constructor(image) {
            // Initial position of the platform
            this.position = {
                x: 0,
                y: 300
            }
            this.image = image;
            this.width = 650;
            this.height = 100;
        }
        // Method to draw the platform on the canvas
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    // Define the Tube class
    class Tube {
        constructor(image) {
            // Initial position of the tube
            this.position = {
                x: 500,
                y: 180
            }
            this.image = image;
            this.width = 100;
            this.height = 120;
        }
        // Method to draw the tube on the canvas
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    //--
    // NEW CODE - DEFINE BLOCKOBJECT CLASS
    //--
    class BlockObject {
        constructor(image) {
            // Initial position of the block object
            this.position = {
                x: 200,
                y: 100
            };
            this.image = image;
            this.width = 158;
            this.height = 79;
        }
        // Method to draw the block object on the canvas
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y);
        }
    }
    // Load images
    let image = new Image();
    let imageTube = new Image();
    //--
    // NEW CODE - ADD IMAGE FOR BLOCK OBJECT
    //--
    let imageBlock = new Image();
    // Load image sources
    image.src = 'https://samayass.github.io/samayaCSA/images/platform.png';
    imageTube.src = 'https://samayass.github.io/samayaCSA/images/tube.png';
    imageBlock.src = 'https://samayass.github.io/samayaCSA/images/box.png';
    // Create platform, tube, and block object instances
    let platform = new Platform(image);
    let tube = new Tube(imageTube);
    //--
    // CREATE BLOCK OBJECT
    //--
    let blockObject = new BlockObject(imageBlock);
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
    }
    // Animation function to continuously update and render the canvas
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        // Draw platform, player, tube, and block object
        platform.draw();
        player.update();
        tube.draw();
        //--
        // DRAW BLOCK OBJECT
        //--
        blockObject.draw();
        //--
        // COLLISIONS BETWEEN BLOCK OBJECT AND PLAYER
        //--
        if (
            player.position.y + player.height <= blockObject.position.y &&
            player.position.y + player.height + player.velocity.y >= blockObject.position.y &&
            player.position.x + player.width >= blockObject.position.x &&
            player.position.x <= blockObject.position.x + blockObject.width
        )
        {
            player.velocity.y = 0;
        }
        // Control player horizontal movement
        if (keys.right.pressed && player.position.x + player.width <= canvas.width - 50) {
            player.velocity.x = 15;
        } else if (keys.left.pressed && player.position.x >= 50) {
            player.velocity.x = -15;
        } else {
            player.velocity.x = 0;
        }
        // Check for collision between player and platform
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }
        // Check for collision between player and tube
        if (
            player.position.y + player.height <= tube.position.y &&
            player.position.y + player.height + player.velocity.y >= tube.position.y &&
            player.position.x + player.width >= tube.position.x &&
            player.position.x <= tube.position.x + tube.width
        ) {
            player.velocity.y = 0;
            player.position.y += 0.1;
            player.velocity.y = 0.0001;
            gravity = 0.2;
        }
        // Reset gravity and collision when not colliding with tube
        if (
            player.position.y + player.height == tube.position.y + tube.height ||
            player.position.y + player.height <= tube.position.y ||
            player.position.x + player.width <= tube.position.x ||
            player.position.x >= tube.position.x + tube.width
        ) {
            gravity = 1.5;
        }
        // Handle collision between player and tube sides
        if (
            player.position.x + player.width <= tube.position.x &&
            player.position.x + player.width + player.velocity.x >= tube.position.x &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
        if (
            player.position.x >= tube.position.x + tube.width &&
            player.position.x + player.velocity.x <= tube.position.x + tube.width &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
        if (
            player.position.x >= tube.position.x &&
            player.position.x + player.velocity.x <= tube.position.x &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
        if (
            player.position.x + player.width <= tube.position.x + tube.width &&
            player.position.x + player.width + player.velocity.x >= tube.position.x + tube.width &&
            player.position.y + player.height >= tube.position.y &&
            player.position.y <= tube.position.y + tube.height
        )
        {
            player.velocity.x = 0;
        }
    }
    // Start the animation loop
    animate();
    // Add event listeners for key presses
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
    // Add event listeners for key releases
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
    })
</script>



## Specific Hacks
- Add side and bottom collisions between the player and block object
- Add more blocks to create alternative pathways

## Open Ended Hack
- Add a power-up when the player jumps on the block object
