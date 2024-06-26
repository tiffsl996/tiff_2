---
toc: True
comments: False
layout: post
title: P5 Introduction to SASS
description: SASS Student Lesson
type: collab
author: Aditi, Eshika, Cindy, Avanthika, Nupur
courses: {'csp': {'week': 19}}
---

# <span style="color:cadetblue">SASS STUDENT TEACH</span> 

<!--- Nupur ---> 
# SASS Basics

**What is Sass?**  
Short for Syntactically Awesome Style Sheets, SASS is a popular CSS pre-processor. SASS code is processed by the program and compiled into CSS code, which can be used to style HTML elements. SASS controls how it appears on the web page. It is compatible with all CSS versions.

## SCSS vs CSS

**What is CSS?**  
CSS is a computer language for laying out and structuring web pages (HTML or XML). For example, it is used to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.

## What is SCSS?  
It is basically more advanced than CSS. SCSS assists a user in adding various extra features to the CSS, such as nesting, variables, etc. These extra features make the process of writing the SCSS language quicker and easier as compared to that of writing the standard language of CSS.



![Alt Text](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png)


## Nesting

Nesting is a way to organize code for better readability. It involves placing one selector inside another.
In regular CSS, SASS helps organize code. Avoid excessive nesting to prevent overqualified selectors that can be challenging to read and maintain.


![CSS-Nesting-Example-without-Nesting.png](https://blog.jetbrains.com/wp-content/uploads/2023/07/CSS-Nesting-Example-without-Nesting.png)

![CSS-Nesting-Nesting-Example.png](https://blog.jetbrains.com/wp-content/uploads/2023/07/CSS-Nesting-Nesting-Example.png)



## Benefits of SASS over traditional CSS
- **Improved code organization:** SASS offers enhanced code organization through features like nested rules and modular imports, promoting a more structured and readable stylesheet.
- **Maintainability:** SASS facilitates easier maintenance with variables, mixins, and functions, reducing code redundancy and making updates and changes more efficient.
- **Advanced features:** SASS provides advanced features such as variables, mixins, inheritance, and logic operators. This allows for more dynamic stylesheets than CSS.

## Modular SCSS

Using Modular SCSS enables you to divide your SCSS files into several pieces and compile them into a unified CSS file. 
- add an underscore (_) before the filenames.scss 
- import it into your file without the underscore, and all the styles will come along
- using a partial is that it allows you to break down the code for multiple components in larger websites
- ll the styles in the partial will be included and can be used in the main file as if they were originally defined in the main file itself

### Definition of Variables:
A variable is essentially a container that stores a value.

### Significance in SASS:
In SASS, utilizing variables allows for the convenient reuse of a value throughout the stylesheet.

### Symbol in Sass:
The $ symbol is employed in Sass to signify and designate a variable

## Hack 1: Create a button which can relate to your cpt project. Make a .scss file or have an inline css portion to give your button color, dimensions, and more! make it unique. Try to play with nesting as well...make two buttons if you want!

example: 
  <style>
        button {
            color: blue;
            border: 2px solid;
        }
    </style>
</head>
<body>
    <button type="button">Health!</button>
</body>
</html>

<!--- ADVANCED SASS ---> 

# Advanced SASS
SASS stands for Syntactically Awesome Style Sheets. It is compatible with CSS and makes the CSS in a file more readable and efficent. For example, instead of having multiple CSS code cells throughout your webpage, you can have a page full of SASS that codes for the entire website. 

## Operators 
Operators are similar to Python syntax and help SASS users perform various operations on different variables. For example...


| Definition                                          | Operator                                |
|-----------------------------------------------------|-----------------------------------------|
| == to check if two values are equal                 | ==                                      |
| + to add two values together                         | +                                       |
| - to subtract two values                              | -                                       |
| * to multiply two values                              | *                                       |
| / to divide two values                                | /                                       |
| % to find the remainder of two values                 | %                                       |
| < to check if one value is less than another         | <                                       |
| > to check if one value is greater than another      | >                                       |
| <= to check if one value is less than or equal to another | <=                                  |
| >= to check if one value is greater than or equal to another | >=                              |
| and to use logical AND                                | and                                     |
| or to use logical OR                                  | or                                      |
| not to use logical NOT                                | not                                     |


## Examples of some operators 


```python
// Variables
$fruit1: "watermelon";
$fruit2: "apple";
$fruit3: "tomato";

// Testing 
$testing: $fruit1 == $fruit2;

// Print
#testing {
    content: false;
}
```

Intended answer: FALSE

<!--- Aditi ---> 
## Conditional Statements 
- Conditional Statements in SASS function similarly to Python and JavaScript.
- They enable the execution of different actions based on varying conditions.
- Examples include executing specific actions if a condition is true or taking alternative actions if it is false.
- The @if directive in SASS allows for the application of different styles based on the truth value of a boolean expression.
- SASS also provides the @else directive to define a set of styles if the preceding condition is not met or is false.
- Additionally, the @else if directive in SASS allows for implementing alternative conditions if the initial one is not satisfied.


```python
$condition1: true;
$condition2: false;

.element {
  @if $condition1 {
    color: blue; // Applied if $condition1 is true
  } @else if $condition2 {
    color: red; // Applied if $condition1 is false and $condition2 is true
  } @else {
    color: green; // Applied if both $condition1 and $condition2 are false
  }
}
```

##### In this example:
- If $condition1 is true, the text color will be blue.
- If $condition1 is false and $condition2 is true, the text color will be red.
- If both $condition1 and $condition2 are false, the text color will be green.

## Loops in SASS
- SASS features loops with @for, @while, and @each decorators.
- Loops repeat a block of code a specific number of times or until a certain condition is met, similar to other programming languages.
- For Loops iterate through a list of values or a range of numbers.
- While Loops continue iterating through a block of code until a specific condition is true, like reaching a certain value or meeting another condition.
- It's recommended to use @each and @for over while loops in SASS for clarity and faster compilation.
- In SASS, lists are groups of values separated by commas or spaces, without special brackets like in JavaScript.
- Lists are immutable in SASS, meaning they cannot be changed once created.


```python
// Define a list
$colors: red, blue, green, yellow;

// Use a @each loop to apply styles to each color in the list
@each $color in $colors {
  .box-#{$color} {
    background-color: $color;
    width: 100px;
    height: 100px;
    margin: 10px;
  }
}

// Use a @for loop to generate styles for a range of numbers
@for $i from 1 through 5 {
  .number-#{$i} {
    font-size: 10px * $i;
  }
}

// Use a @while loop to apply styles until a certain condition is met
$i: 0;
@while $i < 3 {
  .while-loop-#{$i} {
    border: 1px solid black;
    margin: 5px;
  }
  $i: $i + 1;
}
```

##### In this example:
- The @each loop iterates through each color in the $colors list, creating a CSS class for each with a different background color.
- The @for loop generates styles for different font sizes based on a range of numbers.
- The @while loop applies styles until the condition $i < 3 is no longer true, creating CSS classes with borders and margins.

## Hack 2: Let's try an if/else or a loop. Try to relate it to your cpt project and explain how this could be utilized in your project. 

# Functions in SASS 

#### What is a function?

A function is like a set of instructions that does a specific job. It's a handy way to use the same set of instructions over and over, making things more efficient. We use functions a lot in programming languages like JavaScript to avoid repeating the same code.

## SASS Functions
- SASS Functions help in defining advanced calculations and transformations for your stylesheet.
- They allow complex operations on values, data manipulation, and dynamic content generation.
- Both pre-built functions and custom functions (similar to JavaScript) are available in SASS.
- SASS functions handle tasks like arithmetic operations, color manipulation, and working with strings.
- Functions in SASS are akin to those in programming languages but are used within stylesheets to dynamically generate CSS code.



<!--- Cindy ---> 
## Built-in Functions


- SASS has many built-in functions that allow users to manipulate strings, variables, colors, etc.

## Color Functions


- Similarly to Python and JS, SASS can also help users manipulate color codes
- for example...





| Operation example                                          | Intended Answer                                |
|-----------------------------------------------------|-----------------------------------------|
|.lighten(#E6E6FA, 30%);        | // lightens the lavender by 30%|
|.darken(#E6E6FA, 40%);         |// darkens the lavender by 40%|
|.opacify(#E6E6FA, 0.2);        | // makes the color more opaque by a factor 0.2|
|.transparentize(#E6E6FA, 0.1); |  // makes the color more transparent by a factor of 0.1|
|.mix(#E6E6FA, #ff0000, 50%);   | // returns an even mix of two colors|

## Math Functions

SASS can not only help us complete basic operations like addition and subtraction but also other, more complex calculations like floor, ceiling, min, max, and absolute value.

| Operation example      | Intended Answer                        |
|------------------------|----------------------------------------|
| `.round(1.7);`         | // returns 2                           |
| `.ceil(2.2);`          | // returns 3                           |
| `.floor(4.2);`         | // returns 4                           |
| `.abs(-8.5);`          | // returns 8.5                         |
| `.min(101, 90, 30);`   | // returns 30                          |
| `.max(1, 2, 3);`       | // returns 3                           |
| `.random(1, 100);`     | // returns a random number between 1 and 100 |


![sass-in-css-lighten-darken.png](https://cdn.jim-nielsen.com/blog/2020/sass-in-css-lighten-darken.png)


## String Functions
- Allows users to manipulate strings, similar to concat in JS


| Operation example                                          | Intended Answer                                |
|-----------------------------------------------------|-----------------------------------------|
|.to-upper-case("hi");      |// returns "HI"|
|.to-lower-case("HeLlO");      |// returns "hello"|
|.str-index("hello world", "world", "hi", "hey"); |// returns the index of the first occurrence of "world"|
|.str-insert("hello", " world", 3);  |// inserts " world" into "hello" at position 3, resulting in "helworldlo"|

## Creating Custom Functions


- Users can define functions using "@function name(arguments){}"
- similar to a return function in JS, it returns a value from a funcitons




```python
// Function to calculate the area of a trapezoid
@function trapezoid-area($height, $base1, $base2) {
  $area: 0.5 * ($base1 + $base2) * $height;
  @return $area;
}


// Function to calculate the perimeter of a rectangle
@function rectangle-perimeter($width, $length) {
  $perimeter: 2 * ($width + $length);
  @return $perimeter;
}


// Example usage
$trapezoidArea: trapezoid-area(5, 8, 12); // Calculate the area of a trapezoid
$rectanglePerimeter: rectangle-perimeter(4, 6); // Calculate the perimeter of a rectangle


// Output the results
@debug "Trapezoid Area: #{$trapezoidArea}";
@debug "Rectangle Perimeter: #{$rectanglePerimeter}";
```

## Hack 3: Try to create your own custom function. Use the color functions to create a primary color gradient (integrate for loops, color functions, and creating custom functions).

## Extending
- This allows users to share style between selectors, using a selector as an argument, and instructing one selector to inherit the style of another



```python
// Example of extending
.button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
}


.submit-button {
  @extend .button;
  // Additional styles for .submit-button can be added here
}
```

## Inheritance
- Inheritance involves using a placeholder selector, represented by the percent sign %. Placeholder selectors act as templates for styles and are not compiled into CSS on their own.


```python
// Example of inheritance
%text-styles {
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  color: #333;
}


.header {
  @extend %text-styles;
  // Additional styles for .header can be added here
}


.paragraph {
  @extend %text-styles;
  // Additional styles for .paragraph can be added here
}
```

- #### In this example, %text-styles acts as a template for common text styles. Both .header and .paragraph selectors inherit these styles using @extend. If you update %text-styles, the changes will reflect in both the header and paragraph styles.

######  help for hack #3:

<style>
@function primary-gradient-lighten($base-color, $steps, $lighten-amount) {
    $gradient: $base-color;

    @for $i from 1 through $steps {
        $step: percentage($i / $steps);
        $gradient: append($gradient, lighten($base-color, $lighten-amount * $step));
    }

    @return $gradient;
}

// Usage example
$primary-color: #3498db;  // Replace with your primary color
$gradient-steps: 10;      // Adjust the number of steps in the gradient
$lighten-amount: 10%;     // Adjust the amount to lighten

body {
    background: linear-gradient(to bottom, primary-gradient-lighten($primary-color, $gradient-steps, $lighten-amount));
    height: 100vh;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Arial, sans-serif;
}

