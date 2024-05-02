---
toc: True
comments: False
layout: post
title: P1 Introduction to SASS
description: SASS Student Lesson
type: collab
author: Abby, Tanvi, Sreeja, Christina
courses: {'csp': {'week': 19}}
---

# Introduction to Basic SASS

## What is SASS?
* A preprocessor language that’s interpreted into CSS
    * Takes input data and converts it to an output that’s used as input by another program.
    * Basically converting your code to CSS to be run by browser

## SCSS vs CSS
* CSS changes the style of your webpage
    * CSS can be really annoying to use as it lacks features
    * Ex: Layout inconsistency across phones and webpages; lacking nesting (where objects contain other similar objects); creating responsive designs that adapt to different screen sizes; and more
* SCSS is basically a more developed version of CSS.
    * SCSS has more features that makes things more convenient
* CSS better for simple styling in small projects with little customization
* SCSS better for complex styling and working in projects with multiple pages with lots of customization

## SASS benefits
* Nesting Capabilities: A way of writing CSS styles that mimics the structure of your HTML. Instead of writing separate selectors, you can nest them inside each other.
    * In the example below: In the nested example, the p selector is inside the .container selector. This can make your styles more readable and mirrors the HTML structure. Just be mindful not to over-nest, as it may lead to overly specific and harder-to-maintain styles.


```python
CSS:
.container {
  width: 100%;
}

.container p {
  color: #333;
}


SCSS:
.container {
  width: 100%;

  p {
    color: #333;
  }
}
```

* Modular Approach: Split CSS into partial files, enhancing project organization.
* Use of Variables: Easily update and maintain consistency with defined variables.
    * Ex: in CSS to make something blue you'd have to constantly write "color: #0000FF". In SCSS you can define "$blue: #0000FF", and then for the rest of the code just write "color: $blue" to make something blue
* Mixins for Reusable Code: Create reusable code pieces for elements like buttons and forms.
* Extend/Inheritance: Share CSS properties between selectors, reducing code redundancy.
* Control Directives: Use if/else statements and for/each loops in CSS.
* Built-in Functions: Functions for color manipulation, mathematics, and more.
* Compatibility: Automatically handles browser prefixing for cross-browser support.



## POPCORN HACK #1

List at least one pro and con of SCSS and CSS

Answer: 

## Modular SCSS
* Organizing your CSS code into smaller pieces
    * better readability, reusability, and maintenance
* Each piece (module) focuses on a specific part
    * easier to work with, collaborate, and update. 
* Think of it like having separate folders for different types of styles, so your code is more organized and manageable.
* To use it: Add _ before the filenames (e.g., _filename.scss) to create partials. Import partials into the main SCSS file without the _.


```python
// _header.scss
.header {
  // Styles for header component
}

// _footer.scss
.footer {
  // Styles for footer component
}

// main.scss
@import 'header'; // No need for the underscore
@import 'footer';

// Styles for other components in the main file
```

## Advanced SASS

# Operators:
- Developers use operators to perform dynamic calculations within stylesheets. For example, they can use mathematical operators (+, -, *, /) to dynamically adjust sizes, positions, or other style properties based on certain conditions or user interactions.

# Conditional Statements:
- Conditional statements like @if, @else, and @else if allow developers to apply different styles based on conditions. This is crucial for creating interactive interfaces where styles change dynamically in response to user actions or application state.

# Loops:
- Loops, such as @for and @each, enable developers to iterate through lists of values or apply styles multiple times. This is useful for creating repetitive elements in a dynamic way or for handling dynamic data structures.

# Functions:
- Functions in SASS enable developers to encapsulate complex logic and calculations. This is valuable for creating dynamic styles that respond to various inputs or conditions. For instance, developers can use functions to calculate and set styles based on user preferences or device characteristics.

# Built-in Functions:
- Developers leverage built-in functions for math, color manipulation, and string manipulation to dynamically generate styles. This can be especially useful in creating color schemes, responsive layouts, and other interactive design elements.

# Extending & Inheritance:
- Extending styles with @extend allows developers to share common styles among selectors, reducing redundancy. This is beneficial for creating consistent and easily maintainable styles. In interactive designs, maintaining consistency becomes crucial as styles may change dynamically.

## POPCORN HACK 2:

What can you use operators for in SCSS?

Answer:

# How Does Html Use Sass?

In HTML, you don't directly use Sass; instead, you use the compiled CSS generated from Sass.

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

# Home Work:

1. Create a SCSS file with SASS code for a simple button, convert the file to a .css and link it into a new HTML file. The final output needs to be a button with a color of your choice


```python
# Add Code Here
```
