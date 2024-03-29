---
layout: base
title: Course Outlines
image: /images/mario_animation.png
hide: true
---

<link rel="stylesheet" href="_sass/minima/blog-styles.scss">
<!-- Liquid: statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav_home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Hash is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  

{% assign pixels = 256 %} 

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, define how HTML elements look --->
<style>

  /* CSS style rules for the id and class of the sprite... */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /* Background position of sprite element */
  #mario {
    background-position: calc({{mario_metadata["Walk"].col}} * {{pixels}} * -1px) calc({{mario_metadata["Walk"].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to JavaScript key:value objects /////////

  var mario_metadata = {}; // Key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  // Key
  var values = {} // Values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; // Key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  // Capture setInterval() task ID
      this.positionX = 0;  // Current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); // HTML element of sprite
      this.pixels = {{pixels}}; // Pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; // Animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalkingRight() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunningRight() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startWalkingLeft() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], -3);  // Negative speed for left movement
    }

    startRunningLeft() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], -6);  // Negative speed for left movement
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

 // Event control
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "d") {
    event.preventDefault();
    if (event.repeat) {
      mario.startCheering();
    } else {
      if (mario.currentSpeed === 0 || mario.currentSpeed === -3 || mario.currentSpeed === -6) {
        mario.startWalkingRight();
        //mario.startWalkingLeft();
      } else if (mario.currentSpeed === 3) {
        mario.startRunningRight();
      } else if (mario.currentSpeed === 6) {
        mario.startResting();
      }
    }
  } else  if (event.key === "ArrowLeft" || event.key === "a") {
    event.preventDefault();
    if (event.repeat) {
      mario.startCheering();
    } else {
      if (mario.currentSpeed === 0 || mario.currentSpeed === 3 || mario.currentSpeed === 6) {
        mario.startWalkingLeft();
      } else if (mario.currentSpeed === -3) {
        mario.startRunningLeft();
      } else if (mario.currentSpeed === -6) {
        mario.startResting();
      }
    }
  }
  if (event.key === "Enter" || event.key === "w") {
    event.preventDefault();
      mario.startFlipping();
        } 
  if (event.key === " ") {
    mario.stopAnimate();
  }
  if (event.key === "ArrowUp" || event.key === "s") {
     event.preventDefault();
     mario.startCheering()
  }
  });

// Keyup event


  // Touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // Move right
      if (mario.currentSpeed === 0) { // If at rest, go to walking
        mario.startWalking();
      } else if (mario.currentSpeed === 3) { // If walking, go to running
        mario.startRunning();
      }
    } else {
      // Move left
      mario.startPuffing();
    }
  });

  // Stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  // Start animation on window focus
  window.addEventListener("focus", () => {
    mario.startFlipping();
  });

  // Start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // Adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

# TIFFANY LEE

## Introductions 
My name is Tiffany Lee, I am a freshmen currently enrolled at Del Norte High school. I have limited prior coding experience and am looking forward to learning much new content. 

## Hobbies
I spend my free time not equally between skating, music, reading, and practicing my instruments. 

## Goals
My goals for the year is to become more immersive in the tech world and become somewhat experienced in coding



