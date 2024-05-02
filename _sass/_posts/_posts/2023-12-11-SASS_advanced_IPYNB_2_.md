---
toc: True
comments: True
layout: post
title: SASS advanced
description: Understanding the fundamental aspects of SASS
type: collab
courses: {'csse': {'week': 13}, 'csp': {'week': 18}}
---

# Advanced SASS
SASS can go far beyond making a single CSS like document that can theme and entire website or makeing your CSS like script more readible and more managable using nesting and partials. In this lesson we will be going over some of the more advanced features of SASS.

[Example Code](https://github.com/nighthawkcoders/teacher_portfolio/blob/main/_sass/minima/platformer-styles.scss) for GameLevels project

# Operators
- Operators are used to perform operations on variables and other aspects of the language. Similar to python syntax, we can use operators to see if values are equal, add, divide, subtract, multiply, etc.
- SASS has a lot of operators that can be used to perform operations on variables and other aspects of the language as well. They can include
    - `== to check if two values are equal and != to check if two values are not equal`
    - `+ to add two values together` 
    - `- to subtract two values`
    - `* to multiply two values`
    - `/ to divide two values`
    - `% to find the remainder of two values`
    - `< to check if one value is less than another`
    - `> to check if one value is greater than another`
    - `<= to check if one value is less than or equal to another`
    - `>= to check if one value is greater than or equal to another`
    - `Also there is and, or, & not to be able to use boolean operations`

## Operator Example Syntax
- Operators are used in this example to perform string concatenation

```
// Html
<p id="testing">original text and</p>

// SASS
#testing:after{
  content: " some" + " more" + " text";
}

// Output
original text and some more text
```

# Conditional Statements 
- There are conditional statements in SASS just like in Python and JavaScript they work the same way as well.
- Conditional statements are used to perform different actions based on different conditions. Such as if a certain condition is true then do this, if it is false then do that and so on.
- SASS has @if which allows for different styles based on if a boolean expression was true or false.
- SASS has @else which allows for different set of styles if the if condition was not met or false. 
- SASS has @else if which allows for an alternative conditions to be run if the first is not met. 

```scss
$color: red;

button {
  @if $color == red {
    background-color: $color;
  }
}
// @else: allows you to provide an alternative set of styles to apply if the condition in the @if statement isn't met
$color: blue;

button {
  @if $color == red {
    background-color: red;
  } @else {
    background-color: $color;
  }
}
// @else if: allows you to provide multiple alternative conditions to test
$color: green;

button {
  @if $color == red {
    background-color: red;
  } @else if $color == blue {
    background-color: blue;
  } @else {
    background-color: $color;
  }
}
```

# Loops In Sass
- Loops are present in SASS through the @for and @while decorators, along with @each. 
- Loops are used to repeat a block of code a certain number of times or until a certain condition is met just like in any other programming language.
    - For Loops: Are used to iterate through a value like a list or a range of numbers
    - While Loops: Are used to iterate through a block of code until a certain condition is met such as a value is being equal to a certain value through an incrementing or decrementing a variable or any other condition that is met.

- When using while loops they can be necessary but it is better to use @each and @for as it will make it clear and be able to compile faster.

- Side Note: In SASS lists care a any group of values that are separated by a comma or a space there is no special brackets used in JavaScript. Lists can be searched for values however they are immutable meaning that they cannot be changed once they are created.

## Some Code Examples of Loops and Lists

```scss
// A for each loop is used to interact with a group of sizes changing 
// the size of the element for each item in the list

$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}


// @each: allows you to loop over a list of values and generate styles
$colors: red, green, blue;

@each $color in $colors {
  .color-#{$color} {
    background-color: $color;
  }
}
```

The @debug directive is used to print messages to the Sass output. It's a handy tool for inspecting variable values, checking the flow of your code, and identifying issues during development.

```scss
@debug list.index(1px solid red, 1px); // 1
@debug list.index(1px solid red, solid); // 2
@debug list.index(1px solid red, dashed); // null
```

```scss
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}

// @for:  allows you to loop over a range of values and generate styles

@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

#  Functions in SASS
> What is a function?
- A function is a block of code that performs a specific task. This is a great method to be able to reuse code and processes in a manner that is more efficient and allows for the reuse of code. We do this all the time in programming languages such as JavaScript.

## SASS functions
- Sass Functions allow you to define complex calculations and transformations that can be used throughout your stylesheet and allow you to perform complex operations on values, manipulate data, plus you can generate content dynamically.

- There a are built in functions and ones you can make on your own like languages such as JavaScript.
  
- SASS functions can be used to perform arithmetic operations, manipulate colors, work with strings, and more.

- Functions in SASS are similar to functions in programming languages, but they can be used within SASS stylesheets to generate CSS code dynamically.

## Using Built-in Functions
- Like Python and Javascript SASS provides a variety of built-in functions for  math, color manipulation, string manipulation, and more. 


## Math Functions
- SASS has many functions that allow you to be able to perform wide range of math operations similar to the ones present in python including more complex operations. 


```
.round(1.2);          // returns 1
.ceil(1.2);           // returns 2
.floor(1.2);          // returns 1
.abs(-1.2);           // returns 1.2
.min(1, 2, 3);        // returns 1
.max(1, 2, 3);        // returns 3
.random(1, 100);      // returns a random number between 1 and 100
```

## Color Functions
- Color is an important component of any website and SASS provides a wide range of functions that allow you to manipulate colors in a variety of ways.

```
.lighten(#007fff, 20%);       // returns a lighter shade of blue
.darken(#007fff, 20%);        // returns a darker shade of blue
.opacify(#007fff, 0.2);       // makes the color more opaque
.transparentize(#007fff, 0.2); // makes the color more transparent
.mix(#007fff, #ff0000, 50%);  // returns a mix of two colors
```

## String Functions
- SASS provides a variety of string functions that allow you to manipulate strings. Here are some examples:

```
.to-upper-case("hello world");  // returns "HELLO WORLD"
.to-lower-case("HELLO WORLD");  // returns "hello world"
.str-index("hello world", "world"); // returns the index of the first occurrence of "world"
.str-insert("hello", " world", 5);  // inserts " world" into "hello" at position 5
```

## Creating Custom Functions

- In addition to using built-in functions, you can also create your own functions in SASS using the ``@function name(arguments){}``
- @return is similar to the return statement in JavaScript. It returns a value from a function.
- Functions take input values, perform calculations, and return a result. Here's an example of a simple function that calculates the area of a rectangle:

```scss
@function rectangle-area($width, $height) {
  @return $width * $height;
}

// Usage:
$area: rectangle-area(10px, 20px); // Returns 200px
```

- We can combine functions and loops just like you would in javascript or python to achieve complex behavior with your styling

```scss
//Combining functions and loops to achieve different sass effects

@function sum($numList){
  $sum: 0;
  @each $num in $numList {
    $sum: $sum+$num;
  }
  @return $num;
}

@function tri($num){
  $sum: 0;
  @for $i from 1 through $num {
    $sum: $sum+$num;
  }
  @return $sum;
}

@function max($nums){
  $i:0;
  $value:0px;
  @while $i<length($nums){
    @if $value<list.nth($nums,$i){
      $value:list.nth($nums,$i);
    }
  }
}
```

# Extending & Inheritance
Extending in SASS allows you to share styles between selectors, reducing redundancy. You have to use the @extend directive to do this. Inheritance in SASS involves using a placeholder selector, and they are represented with the percent sign %. These are essentially templates for styles. This allows for more abstraction and less repetition.

```scss
// common styles
%common-style
  color: #333
  font-size: 16px

// Use @extend to apply the common style to specific selectors
.button
  @extend %common-style
  background-color: #007bff

.link
  @extend %common-style
  text-decoration: underline
```

# Hacks
- Use some of the topics learned here to modify your CPT warmup project.
- Apply SASS theming to the frontend of your CPT project as you begin ideation and design of the frontend.
