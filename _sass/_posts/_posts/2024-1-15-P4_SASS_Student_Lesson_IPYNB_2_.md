---
toc: True
comments: False
layout: post
title: P1 Introduction to SASS
description: SASS Student Lesson
type: collab
author: Saaras K, Cayden S, Austin Z, Eric Y, Sri
courses: {'csp': {'week': 19}}
image: images/1024px-Sass_Logo_Color.svg.png
---

<h2> SASS: Syntactically Awesome Stylesheets</h2><br>

<center><img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png" width ="200" height = "100"></center>

<br>

<h2>What is SASS?</h2>

SASS is a preprocessor scripting language that is interpreted or compiled into CSS. Any preprocessor language takes input data and converts it to an output that’s used as input by another program. In other words when you run a SASS code you are actually converting your code into CSS which is then used by the browser. 

<h2>Understanding differences: CSS V/S SASS</h2>

- CSS: Cascading style sheets or CSS is the standard styling language for the web which provides a simple and direct syntax for styling HTML elements.

- However , it lacks certain features found in preprocessors like Sass, making it less understandable and difficult to work with.


```python
// Basic CSS Code

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}
```

- SASS: SASS is a powerful preprocessor scripting language that enhances CSS with advanced features. Sass enhances the capabilities of CSS by introducing variables, nesting, and mixins. 
- Sass code needs to be compiled into standard CSS for browsers to interpret and this provides a more efficient way to style pages.



```python
// Basic SASS Code

$font-family: Arial, sans-serif;
$background-color: #f0f0f0;
$main-color: #333;
$link-color: #444;
$border-color: #ddd;

body {
  font-family: $font-family;
  background-color: $background-color;
}

header {
  background-color: $main-color;
  color: white;
  padding: 10px;
}
```

### <font color = "Green">Popcorn Hack 1:</font> 

Write a line of code to compare CSS and SASS. Must be similar is both languages. Show how SASS and CSS are similar but different.

<mark>// Your code here</mark>

<h2>Benifits of SASS over CSS</h2>

1. Improved Code Organization

     - Nesting Capabilities:  Sass organizes styles like a neat notebook, mirroring HTML structure for clarity.
     - Modular Approach: Break styles into smaller files, like building blocks, for a cleaner and more organized project.

2. Maintainability

     - Use of Variables: Easily update colors and fonts with name-tag-like variables.
     - Mixins for Reusable Code: Create styles once, reuse them everywhere.
     - Extend/Inheritance: Share styles among elements to avoid repetition.

3. Advanced Features

     - Control Directives: Add conditions to styles for more flexibility.
     - Built-in Functions: Use Sass tools for colors and math in styles.    
     - Compatibility: Sass handles browser differences, ensuring a consistent look across all browsers.

4. Preprocessing:

     - Compilation: Translate Sass to standard CSS for browsers.
     - Usage: Command Sass to compile styles effortlessly.
     - Watching Files: Sass auto-updates styles as you make changes, simplifying the process.

<h2>Nesting</h2>

<center><img src = "https://www.lyricbirdfood.com/media/1059/gettyimages-502665425.jpg?crop=0.43408360128617363,0.23585711414790997,0.083601286173633438,0.38690356568672479&cropmode=percentage&width=700&height=365&rnd=132084484540000000" width ="300" height= "150"></center>

No, not that type of nesting

-<mark> Nesting:</mark> Nesting in coding, especially in stylesheets like SASS, is a way of organizing code by putting one selector inside another. Sort of a hirarchy in structure.


```python
// Nesting example

article {
  border: 1px solid #ccc;

  h2 {
    font-size: 20px;
    color: #555;
  }

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  a {
    text-decoration: underline;
    color: #007bff;
  }
}
```

<h2>Advanced SASS</h2>

1. Operators
    - Operators act as powerful tools in Python and SASS, allowing you to perform operations like checking equality, basic arithmetic (addition, subtraction, multiplication, and division), and in SASS, combining and rearranging values. They're like the building blocks that help you manipulate and transform data in your code, making it flexible and dynamic. 

**Operators Reference Table**

<center>

<table>
  <tr>
    <th>Operator</th>
    <th>Definition</th>
  </tr>
  <tr>
    <td>==</td>
    <td>Check if two values are equal</td>
  </tr>
  <tr>
    <td>!=</td>
    <td>Check if two values are not equal</td>
  </tr>
  <tr>
    <td>+</td>
    <td>Add two values together</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Subtract two values</td>
  </tr>
  <tr>
    <td>*</td>
    <td>Multiply two values</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Divide two values</td>
  </tr>
  <tr>
    <td>%</td>
    <td>Find the remainder of two values</td>
  </tr>
  <tr>
    <td>&lt;</td>
    <td>Check if one value is less than another</td>
  </tr>
  <tr>
    <td>&gt;</td>
    <td>Check if one value is greater than another</td>
  </tr>
  <tr>
    <td>&lt;=</td>
    <td>Check if one value is less than or equal to another</td>
  </tr>
  <tr>
    <td>&gt;=</td>
    <td>Check if one value is greater than or equal to another</td>
  </tr>
</table>

</center>



```python
// Variables
$firstName: "John";
$lastName: "Doe";

// String concatenation using whitespace
$fullName: $firstName + " " + $lastName;

#testing {
  content: $fullName;
}
```

**Intended Answer:**
content: John Doe


2. Conditional Statments:
    - Conditional statements in SASS work and function the same way they do in Python and Javascript. Conditional statements are used to perform different actions based on different conditions.


```python
// example code

$grade: 85;

.button {
  @if $grade >= 90 {
    background-color: green;
    color: white;
    border: 2px solid darkgreen;
  } @else if $grade >= 80 {
    background-color: yellow;
    color: darkgray;
    border: 2px solid goldenrod;
  } @else {
    background-color: red;
    color: white;
    border: 2px solid darkred;
  }
}
```

### <font color = "Green">Popcorn Hack 2:</font> 

Write a simple SASS code to highlight a message box according to it's result, green for success, yellow for warning and red for an error. Use the variable "$message-type". Make sure to use @if, @else and @else if statements.

<mark>// Your code here</mark>

3. Loops in SASS
    - In SASS, loops are facilitated by the <mark>@for, @while, and @each decorators</mark>. Similar to other programming languages, loops enable the repetition of a code block either for a specified number of iterations or until a particular condition is satisfied. 
        - For loops are iterate through a given value, like a list or a range of numbers.
        - While loops iterate through a block of code until a specific condition is met


```python
// Example code

$alignments: left, center, right;

@each $alignment in $alignments {
  .text-#{$alignment} {
    text-align: $alignment;
  }
}
```


```python
// Expected output

.text-left {
    text-align: left;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-right {
    text-align: right;
  }
```

### <font color = "Green">Popcorn Hack 3:</font> 

Write a simple SASS code that defines three different font sizes, which iterates over the same line distance of 1.5.

<mark>// Your code here</mark>

<h2>SASS Functions</h2>

Last but not the least SASS functions. 

- SASS functions are invalvuable tools in stylesheets. They help perform complex calcualtions and manipulate data as well as generate content dynamically. Some functions are built in but there are also a few that you can make on your own. 
- They can be used to perform arithmetic operations, manipulate colors, work with strings, and more.


**Built in Functions**

1. Math Functions
    - SASS has a range of functions that help perform complex math problems in code

2. Color Functions
    - Functions allow you to manipulate colors in different ways

3. String Functions
    - SASS provides a variety of string functions that allow you to manipulate strings.

**Creating Custom Functions**

In addition to built in functions one can also create custom functions with pre exisiting operators and the @return function.



```python
// Example of a complete SASS Code from CSS of Previous CPT Project

$main-bg-color: #8ec1da;
$card-bg-color: rgba(128, 128, 128, 0.5);
$button-bg-color: rgba(38, 152, 255, 0.5);
$button-hover-bg-color: rgba(38, 152, 255, 0.3) !important;
$font-family: Verdana, sans-serif;
$button-size: 10%;
$box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

body {
  width: 100%;
  height: 100%;
  margin: 0em 0%;
  background-color: $main-bg-color;
  background-image: url("https://static.vecteezy.com/system/resources/previews/016/124/733/non_2x/poker-and-casino-playing-card-black-background-vector.jpg");
  background-position: center bottom;
}

.title, .playercardsbox, .dealercardsbox, .result, .hitbutton, .standbutton, .resetbutton, .playersumbox, .dealersumbox {
  position: fixed;
  transform: translate(-50%, -50%);
  font-family: $font-family;
}

.playercardsbox, .dealercardsbox, .playersumbox, .dealersumbox {
  background-color: $card-bg-color;
  padding: 20px;
  border-radius: 10px;
  box-shadow: $box-shadow;
  font-size: 30px;
}

.result {
  top: 34%;
  font-size: 150px;
  color: red;
  display: none;
}

.hitbutton, .standbutton, .resetbutton {
  left: 50%;
  background-color: $button-bg-color;
  border: none;
  width: $button-size;
  height: $button-size;
  border-radius: 10px;
  font-size: 30px;
}

.hitbutton:hover, .standbutton:hover, .resetbutton:hover {
  background-color: $button-hover-bg-color;
}

.standbutton { top: 72%; }
.hitbutton { top: 60%; }
.resetbutton { top: 84%; display: block; }
```

<h2>How does HTML code use SASS??</h2>

In HTML, you don't directly use Sass; instead, you use the compiled CSS generated from Sass. 

<h4>Steps to use predefined SASS</h4>

1. Intall SASS: Before you use SASS you need to install it.


```python
npm install -g sass
```

2. Create SASS file: write you SASS file code and be sure to give it the extension of ".scss"


```python
// Example sass

$primary-color: #3498db;

body {
  background-color: $primary-color;
}

```

3. Compile SASS into CSS: Use installed SASS compiled to convert the .scss file into a .css file.


```python
sass input.scss output.css
```

4. Linked compiled CSS into the HTML/JS project code


```python
<html>
<head>
  <!--Meta data here -->

  <link rel="stylesheet" href="output.css">

  <title>Project Page</title>
</head>
<body>
 <!--HTML stuff-->
</body>
</html>
```

### <font color = "Green">Pop Corn Hack: 4</font> 

1. Using the steps above, create am SCSS file with SASS code for a simple button, convert the file to a .css and link it into a new HTML file. The final output needs to be a button with a color of your choice.

<mark>// Your code here</mark>
