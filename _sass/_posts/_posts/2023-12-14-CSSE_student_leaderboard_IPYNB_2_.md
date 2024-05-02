---
comments: True
toc: True
layout: post
title: Leaderboard | Student
type: collab
courses: {'csse': {'week': 17}}
authors: Nora A, Katie K, Tim V.
---

# What we did #
Created a leaderboard that will display times of the players in fastest to slowest order. To do this, we implemented local storage that will save on your computers that will stay even when the tab is refreshed.

#### STEP ONE

in the main oop-game-levels.md start by adding a DIV to show the time/score (you can customize colors and font sizes to your liking)



```python
<!-- it should go after all of your divs for the buttons, like settings, start, invert, etc
its own separate div category ! -->

<div id="score" style="position: absolute; top: 75px; left: 10px; color: black; font-size: 20px; background-color: white;">
   Time: <span id="timeScore">0</span>
</div>

<!-- this is the part to add, the entire code might look something like this -->

<div id="canvasContainer">
<div id="mySidebar" class="sidenav">
  <a href="javascript:void(0)" id="toggleSettingsBar1" class="closebtn">&times;</a>
</div>
<!-- Splinter -->
    <div id="gameBegin" hidden>
        <button id="startGame">Start Game</button>
    </div>
    <div id="controls"> <!-- Controls -->
        <!-- Background controls -->
        <button id="toggleCanvasEffect">Invert</button>
        <button id="leaderboardButton">Leaderboard</button>
    </div>
      <div id="settings"> <!-- Controls -->
        <!-- Background controls -->
        <button id="toggleSettingsBar">Settings</button>
      </div>
    <div id="gameOver" hidden>
        <button id="restartGame">Restart</button>
    </div>
</div>
<div id="score" style= "position: absolute; top: 75px; left: 10px; color: black; font-size: 20px; background-color: #dddddd; padding-left: 5px; padding-right: 5px;">
    Time: <span id="timeScore">0</span>
</div>
```

#### STEP TWO

create a button for the leaderboard screen


```python
//this one will go in the "canvas container" div as with the settings, start, invert, etc
<button id="leaderboardButton">Leaderboard</button>
```

#### STEP THREE

add a function to show the leaderboard screen/switch to the leaderboard screen.  place this code bellow the assets enemies. (in the MD file)

within the function, the local storage variables are also defined and will be displayed in this manner:


```python
// we put this in the oop file after our assets

// Function to switch to the leaderboard screen
function showLeaderboard() {
    const id = document.getElementById("gameOver");
    id.hidden = false;
    // Hide game canvas and controls
    document.getElementById('canvasContainer').style.display = 'none';
    document.getElementById('controls').style.display = 'none';

  // Create and display leaderboard section
  const leaderboardSection = document.createElement('div');
  leaderboardSection.id = 'leaderboardSection';
  leaderboardSection.innerHTML = '<h1 style="text-align: center; font-size: 18px;">Leaderboard </h1>';
  document.querySelector(".page-content").appendChild(leaderboardSection)
  // document.body.appendChild(leaderboardSection);

  const playerScores = localStorage.getItem("playerScores")
  const playerScoresArray = playerScores.split(";")
  const scoresObj = {}
  const scoresArr = []
  for(let i = 0; i< playerScoresArray.length-1; i++){
    const temp = playerScoresArray[i].split(",")
    scoresObj[temp[0]] = parseInt(temp[1])
    scoresArr.push(parseInt(temp[1]))
  }

  scoresArr.sort()

  const finalScoresArr = []
  for (let i = 0; i<scoresArr.length; i++) {
    for (const [key, value] of Object.entries(scoresObj)) {
      if (scoresArr[i] ==value) {
        finalScoresArr.push(key + "," + value)
        break;
      }
    }
  }
  let rankScore = 1;
  for (let i =0; i<finalScoresArr.length; i++) {
    const rank = document.createElement('div');
    rank.id = `rankScore${rankScore}`;
    rank.innerHTML = `<h2 style="text-align: center; font-size: 18px;">${finalScoresArr[i]} </h2>`;
    document.querySelector(".page-content").appendChild(rank)    
  }
}

//rest of the code here

// Event listener for leaderboard button to be clicked
document.getElementById('leaderboardButton').addEventListener('click', showLeaderboard);

  // add File to assets, ensure valid site.baseurl
  Object.keys(assets).forEach(category => {
    Object.keys(assets[category]).forEach(assetName => {
      assets[category][assetName]['file'] = "{{site.baseurl}}" + assets[category][assetName].src;
    });
  });

  //this should be above the game level callbacks
```

#### STEP FOUR
we're going to edit our gameOverCallBack function so that it will PROMPT the users to input their names after so it can assign the time to the name (key value data pair). 

Since you already have an existing function, you should be able to add these parts. 

The if statemet for the function was added so that the timer would not continously record the time, and only do this process once. 


```python
async function gameOverCallBack() {
    const id = document.getElementById("gameOver");
    id.hidden = false;

    // Store whether the game over screen has been shown before
    const gameOverScreenShown = localStorage.getItem("gameOverScreenShown");

    // Check if the game over screen has been shown before
    if (!gameOverScreenShown) {
      const playerScore = document.getElementById("timeScore").innerHTML;
      const playerName = prompt(`You scored ${playerScore}! What is your name?`);
      let temp = localStorage.getItem("playerScores");
      temp += playerName + "," + playerScore.toString() + ";";
      localStorage.setItem("playerScores", temp);
      // Set a flag in local storage to indicate that the game over screen has been shown
      localStorage.setItem("gameOverScreenShown", "true");
  }

// Use waitForRestart to wait for the restart button click
    await waitForButton('restartGame');
    id.hidden = true;
    // Change currentLevel to start/restart value of null
    GameEnv.currentLevel = null;
    // Reset the flag so that the game over screen can be shown again on the next game over
    localStorage.removeItem("gameOverScreenShown");
    return true;
}
```

#### STEP FIVE
We've finished adding the code to the MD file, now we can set up and define the timer in GameEnv.js

 At the end of the GameEnv.js file, we're going to add in the functions for timer start, stop, reset, and update.


```python
let time = 0; // Initialize time variable
let timerInterval; // Variable to hold the interval reference


// Function to update and display the timer
function updateTimer() {
    const id = document.getElementById("gameOver");
    if (id.hidden == false) {
        stopTimer()
        time=-1
    }
   time++; // Increment time (you can adjust this based on your game logic)


   // Display the updated time in the span element with id 'timeScore'
   const timeScoreElement = document.getElementById('timeScore');
   if (timeScoreElement) {
       timeScoreElement.textContent = time; // Update the displayed time
   }
}


// Function to start the timer
function startTimer() {
   // Start the timer interval, updating the timer every second (1000 milliseconds)
   timerInterval = setInterval(updateTimer, 1000);
}


// Function to stop the timer
function stopTimer() {   
    clearInterval(timerInterval); // Clear the interval to stop the timer
 }


// Event listener for the start game button click
document.getElementById('startGame').addEventListener('click', () => {
   startTimer(); // Start the timer when the game starts
});


// Function to reset the timer
function resetTimer() {
   stopTimer(); // Stop the timer
   time = 0; // Reset the time variable
   updateTimer(); // Update the displayed time to show 0
}


// Game Over callback
async function gameOverCallBack() {
   const id = document.getElementById("gameOver");
   id.hidden = false;


   // Stop the timer on game over
   stopTimer();


   // Use waitForRestart to wait for the restart button click
   await waitForButton('restartGame');
   id.hidden = true;


   // Change currentLevel to start/restart value of null
   GameEnv.currentLevel = null;


   // Reset the timer when restarting the game
   resetTimer();


   return true;
}
```

#### Homework and Hacks!
The timer should be fully working in your game now, but because of local storage, it will only start once the start button is pressed and the game is complete. 

##### Homework #####
- implement the timer function so it works correctly 
- create a "clear" button for the leaderboard that will reset or delete all of the local storage values saved (note that this will also remove your local storage for gamespeed)

##### Challenge #####
- customize the leaderboard (adding tables, filter button to sort what order the values are ordered, color!)
