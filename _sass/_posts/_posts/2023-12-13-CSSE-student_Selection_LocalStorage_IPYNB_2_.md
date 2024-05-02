---
comments: True
toc: True
layout: post
title: Select | Local Storage | Student
description: Local Storage / Level Selection
courses: {'csse': {'week': 16}}
type: collab
author: Trystan, Matthew, Ian
---

# Selection and Local Storage

## Background
During our lesson we will explain the basics about **window.localStorage** property and **Model-View-Controllers**.
At the end of our lesson you should be able to:
- Navigate between levels
- Save your current level
- Learn how to change your game speed
- Save your current game speed


## a. The [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) Property
"The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions"([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)).

In simpler terms it is a way to store data when you exit a web page.
It works in as a *key-value database* on your web page for storing data
- data **values** are saved to an identifiyer called a **key**

### example (the name variable is not a key):
<div>
  <table>
      <tr id="pasteAfter">
        <th>#</th>
          <th>name</th>
          <th>age</th>
      </tr>
      <tr>
        <td><button id="incrementRow">+</button></td>
      </tr>
  </table>
  <button id="save">save</button>
  <button id="load">load</button>
  <p id="storageCheck"></p>
  </div>
  
  <script>
  var count = 0;
  var storageC;
  var pasteAfter = document.getElementById("pasteAfter");
  var incrementRow = document.getElementById("incrementRow");
  var storageExists = document.getElementById("storageCheck");
  var saveButton = document.getElementById("save");
  var loadButton = document.getElementById("load");
  
  var key = "myKeyValue";
  
  var rows=[];
  function addRow(v1,v2){
      var current = count.toFixed(0); //copy the current count for the current row
      rows.push([]);
  
      var row = document.createElement("tr"); //create a row
  
      var td1 = document.createElement("td");
      td1.innerText = String(count);
      row.append(td1);
      
      var td2 = document.createElement("td");
      var input1 = document.createElement("input");
      input1.type = "text";
      input1.value = v1?v1:"";
      rows[count].push(input1.value);
      input1.addEventListener("focusout",()=>{rows[current][0]=input1.value}); //listen for updates to inputfeild
      td2.append(input1);
      row.append(td2);
      
      var td3 = document.createElement("td");
      var input2 = document.createElement("input");
      input2.type = "number";
      input2.value = v2?v2:0;
      rows[count].push(input2.value);
      input2.addEventListener("focusout",()=>{rows[current][1]=input2.value});//listen for updates to inputfeild
      td3.append(input2);
      row.append(td3);
      
      pasteAfter.insertAdjacentElement("afterend",row); //paste row into table
  
      count += 1; //increment count
  }
  
  ///// not my code, but checks if browser has localstorage
  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  if (storageAvailable("localStorage")) {
      storageExists.innerText = "Local Storage Available";
      storageC = true;
    // Yippee! We can use localStorage awesomeness
  } else {
      storageC = false;
      storageExists.innerText = "Local Storage Not Available";
    // Too bad, no localStorage for us
  }
  
  function load(){
      if (!storageC){
          console.log("cannot access local storage");
          return;
      }
      var list = window.localStorage.getItem(key);
      if (list){
          var array1 = list.split(","); //data is saved as a string, convert to array
          for(let i = 0;i<array1.length;i+=2){
              addRow(array1[i],array1[i+1]);
          }
      }
      else {
          console.log("data may not exist");
      }
  }
  
  function save(){
      console.log(rows);
      if (!storageC){
          console.log("cannot access local storage");
          return;
      }
      window.localStorage.clear(); //clear existing data
  
      //replace data
      window.localStorage.setItem(key,rows); //data is converted to string automatically
  }
  //listen for button presses
  incrementRow.addEventListener("click",()=>{addRow()});
  saveButton.addEventListener("click",save);
  loadButton.addEventListener("click",load);
  </script>

## b. Model-View-Controllers (MVC)
"MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions"([codecademy](https://www.codecademy.com/article/mvc)).

In simpler terms, it is a code organization method for user interaction with some set of data.
We roughly created code around this concept. 
- the model is window.localstorage (LocalStorage.js)
- the view is the ui (sidebar with options)
- the controller is our controller.js class

## Step 1: The [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) class
in *LocalStorage.js*
```
export class LocalStorage{
    constructor(keys){
        this.keys = keys;
        console.log("browser local storage available: "+String(this.storageAvailable));
    }

    get storageAvailable(){ //checks if browser is able to use local storage
        let type = "localStorage";
        let storage;
        try {
          storage = window[type];
          const x = "__storage_test__";
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
              // Firefox
              e.code === 1014 ||
              // test name field too, because code might not be present
              // everything except Firefox
              e.name === "QuotaExceededError" ||
              // Firefox
              e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
          );
        }
    }

    save(key){ //save a particular key
        if(!this.storageAvailable){return}; //check if local storage is possible
        window.localStorage.setItem(key,this[key]);
    }
    
    load(key){//load a particular key
        if(!this.storageAvailable){return}; //check if local storage is possible
        this[key] = window.localStorage.getItem(key);
    }

    saveAll(){ //saves data for all keys in this.keys
        if(!this.storageAvailable){return}; //check if local storage is possible
        Object.keys(this.keys).forEach(key => {
            window.localStorage.setItem(key,this[key]);
        });
    }

    loadAll(){//loads data from all keys in this.keys
        if(!this.storageAvailable){return}; //check if local storage is possible
        Object.keys(this.keys).forEach(key => {
            this[key] = window.localStorage.getItem(key);
        });
    }
}

export default LocalStorage;
```
This is the code for the LocalStorage class. It is comprised of 4 major functions, and 1 getter.
1. getters 
- the getter: **storageAvailable**, this getter **returns true if your browser is capable of using Local Storage**, otherwise it returns an error message.
2. functions
- the function **save(key)**, this function saves the value **this.key to the local storage** with the respective key
- the function **load(key)**, this function loads the value **from the local storage** with the respective key **to this.key**
- the function **saveAll()**, this function saves all of the values of this.key **from the class' this.keys to local storage**
- the function **loadAll()**, this function load all of the values **from the local storage** from the class' this.keys **to their respective this.key**

# Step 2: Creating the Controller Class

in *Controller.js*
First, import LocalStorage, GameEnv, and GameControl, and export the Controller class

```
import LocalStorage from "./LocalStorage.js";
import GameEnv from "./GameEnv.js";
import GameControl from "./GameControl.js";

export class Controller extends LocalStorage{
    constructor(){
        var keys = {currentLevel:"currentLevel",gameSpeed:"gameSpeed"}; //default keys for localStorage
        super(keys); //creates this.keys
        
    }
```

Run the initialization after a different time than the constructor. This is used to update the current level and start the eventListeners.

```

    //separated from constructor so that class can be created before levels are added
    initialize(){ 
        this.loadAll(); // load data
        
        if(this[this.keys.currentLevel]){ //update to active level
            GameControl.transitionToLevel(GameEnv.levels[Number(this[this.keys.currentLevel])]);
        }
        else{ //if not currentLevel then set this.currentLevel to 0 (default)
            this[this.keys.currentLevel] = 0;
        }

        if(this[this.keys.gameSpeed]){ //update to custom gameSpeed
           GameEnv.gameSpeed = Number(this[this.keys.gameSpeed]);
        }
        else{ //if not gameSpeedthen set this.gameSpeed to GameEnv.gameSpeed (default)
            this[this.keys.gameSpeed] = GameEnv.gameSpeed;
        }
        
        window.addEventListener("resize",()=>{ //updates this.currentLevel when the level changes
            this[this.keys.currentLevel] = GameEnv.levels.indexOf(GameEnv.currentLevel);
            this.save(this.keys.currentLevel); //save to local storage
        });

        window.addEventListener("speed",(e)=>{ //updates this.gameSpeed when a speed event is fired
            this[this.keys.gameSpeed] = e.detail.speed();
            GameEnv.gameSpeed = this[this.keys.gameSpeed]; //reload or change levels to see effect
            this.save(this.keys.gameSpeed); //save to local storage
        })
 
    }
```

The code below is a getter and creates the table. The table is used to include level tags and the level number. This will show up once we finish Step 3.

```
    get levelTable(){
        var t = document.createElement("table");
        //create header
        var header = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.innerText = "#";
        header.append(th1);
        var th2 = document.createElement("th");
        th2.innerText = "Level Tag";
        header.append(th2);
        t.append(header);

        //create other rows
        for(let i = 0;i < GameEnv.levels.length;i++){
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = String(i);
            row.append(td1);
            var td2 = document.createElement("td");
            td2.innerText = GameEnv.levels[i].tag;
            td2.addEventListener("click",()=>{ // when player clicks on level name
                GameControl.transitionToLevel(GameEnv.levels[i]); //transition to that level
            })
            row.append(td2);
            t.append(row);
        }

        return t; //returns <table> element
    }
```

The code is used to define speedDiv. This helps change the gameSpeed in the game. This will be essential later for the homework.

```
    
    get speedDiv(){
        var div = document.createElement("div"); //container

        var a = document.createElement("a"); //create text
        a.innerText = "Game Speed";
        div.append(a);

        var input1 = document.createElement("input"); //create inputfeild
        input1.type = "number"; //type number (1234...)
        const event = new CustomEvent("speed", { detail: {speed:()=>input1.value} });
        input1.addEventListener("input",()=>{ //after input feild is edited
            window.dispatchEvent(event); //dispatch event to update game speed
        })
        div.append(input1);
        
        return div; //returns <div> element
    }
}

export default Controller;
```

## Step 3 the game.md file changes

### In style at the top:

```
#gameBegin, #controls, #gameOver, #settings {
      position: relative;
        z-index: 2; /*Ensure the controls are on top*/
    }
```
for adding an extra button to the game *settings*


```
.sidenav {
      position: fixed;
      height: 100%; /* 100% Full-height */
      width: 0px; /* 0 width - change this with JavaScript */
      z-index: 3; /* Stay on top */
      top: 0; /* Stay at the top */
      left: 0;
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
      background-color: black; 
    }
```
This is for adding a side navigation bar.
For more information see [w3 Schools page](https://www.w3schools.com/howto/howto_js_sidenav.asp)

### in the html
```
<div id="mySidebar" class="sidenav">
  <a href="javascript:void(0)" id="toggleSettingsBar1" class="closebtn">&times;</a>
</div>
```
this will be the side bar
```
<div id="canvasContainer">
    <div id="gameBegin" hidden>
        <button id="startGame">Start Game</button>
    </div>
    <div id="controls"> <!-- Controls -->
        <!-- Background controls -->
        <button id="toggleCanvasEffect">Invert</button>
    </div>
    <div id="settings"> <!-- Controls -->
        <!-- Background controls -->
        <button id="toggleSettingsBar">Settings</button>
    </div>
    <div id="gameOver" hidden>
        <button id="restartGame">Restart</button>
    </div>
</div>
```
we are adding the settings button into this division

### In the script

```
import Controller from '{{site.baseurl}}/assets/js/platformer/Controller.js';
```
place with the other imports

```
var myController = new Controller();
myController.initialize();
```
the object creation can be placed whereever, but **initialization** needs to be placed **after** the game loop has started **GameControl.gameLoop()**
```
var table = myController.levelTable;
document.getElementById("mySidebar").append(table);

var toggle = false;
  function toggleWidth(){
    toggle = !toggle;
    document.getElementById("mySidebar").style.width = toggle?"250px":"0px";
  }
  document.getElementById("toggleSettingsBar").addEventListener("click",toggleWidth);
  document.getElementById("toggleSettingsBar1").addEventListener("click",toggleWidth);
```
place this after initialization

## Homework:
- Implement the LocalStorage code in the game (Is the code fully implemented? Does the game save your data after closing the tab/window)
- Add an extra setting (examples: gameSpeed, keybinds for movement, etc)

### Challenge:
- Implement storage and controls for gravity (Hint: Use the GameEnv.gravity variable from GameEnv)
