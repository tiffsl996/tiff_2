---
toc: True
comments: True
layout: post
title: SASS basics
description: Understanding the fundamental aspects of SASS
type: collab
courses: {'csse': {'week': 13}, 'csp': {'week': 18}}
---

# What is SASS?

> Sass is a preprocessor language that's interpreted into CSS. A preprocessor language takes input data and converts it to an output that's used as input by another program. This means when you run Sass code, you're actually converting your code to CSS. That CSS code output is then used directly by a browser.
<br>
![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd7eiGMX9FwRLC0uJTDewSjw_7_WvCF4ABLdwztLrCnPEXrqW0gG-pH8eT-fYPLlghjY&usqp=CAU)

#  SCSS vs. CSS 
> Understanding the differences between SCSS and CSS

## What is CSS
- CSS is the default technology that most programmers use when styling webpages. It is one of the 3 fundamental web technologies along with HTML and JavaScript. HTML manages the structure, JavaScript makes pages interactive, and CSS changes the style by taking a markup language like HTML and describes how it should be presented to the user.

- However, CSS is not very easy to work with lacking a lot features often making using CSS very confusing and difficult or hard to work with on lengthy projects. This is why there are tools like Bootstrap, Sass, and Tailwind that make styling a lot easier and more efficient. We will be using Sass in this course.  

### CSS Example
- This is an example of CSS that can be used to change body text of an HTML document
- Hack Question: Can you guess what its changing style of the text to? 

```css
body{
color: #0000FF;
font-family: Ariel, sans-serif;
font-size: 16px;
}
```


## What is SCSS
SASS (Syntactically Awesome Stylesheets) is a powerful preprocessor scripting language that enhances CSS with advanced features. It's compiled into standard CSS, making it a robust tool for modern web development.

### Sass Code Example

```scss
$blue: #0000FF;
body{
color: $blue;
font-family: Ariel, sans-serif;
font-size: 16px;
}
```


- This example is doing the same thing as the other code segment above but the difference being that here we defined the color as $blue which makes it much easier for us to recall later on. In fact, we have done this before, if you have been using the dark mode/midnight theme then go ahead and navigate your your _sass folder and check out the dark-mode.scss and you'll see something similar to the example above

### So which one is better to use?
- CSS tends to be better for really simple styling where not many complex or nested styles are required and in small projects that don't require a lot of customization. 
- SCSS on the other hand is very good for more complex styling and working with a project with more than one page where a lot of customization may be needed.

## Benefits Of SASS Over Traditional CSS

### Improved Code Organization
- **Nesting Capabilities**: SASS allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.
- **Modular Approach**: You can split your CSS into multiple files (partials) and import them into a main file, making your project more organized.

### Maintainability
- **Use of Variables**: Define colors, fonts, and other CSS values as variables for easy updates and consistency across the project.
- **Mixins for Reusable Code**: Create reusable pieces of code for things like buttons, forms, which can be included wherever needed.
- **Extend/Inheritance**: Share a set of CSS properties from one selector to another, reducing the amount of code you need to write and maintain.

### Advanced Features
- **Control Directives**: Use if/else statements and for/each loops in your CSS, which are not possible in plain CSS.
- **Built-in Functions**: SASS offers functions for color manipulation, mathematics and more, enhancing the functionality of CSS.
- **Compatibility**: Automatically handles browser prefixing, ensuring that your styles work across different browsers without extra code.

## Preprocessing
- **Compilation**: Sass files are preprocessed to generate standard CSS files.
- **Usage**: Use the `sass` command in the terminal to compile Sass files. For example, `sass input.sass output.css`.
- **Watching Files**: The `--watch` flag allows Sass to monitor files for changes and recompile automatically.

```scss
// Command to compile Sass
sass input.sass output.css

// Command to watch and compile Sass
sass --watch input.sass output.css
```

# Modular SCSS 
> Understanding how to use modular SCSS
- Modular SCSS allows you to break your SCSS files into multiple files and compile them into a single CSS file.
- How do you do this? Well all you need to do is have _filenames.scss so that is compiled into its own file.
- Now after adding the _ before the file name you can import it into you file without the _ and all the styles will be carried over. 
- The benefits of a partial is that it allows you to break up the code of multiple components for larger websites. This way you can easiliy organize and make changes to components using these separate files instead of having to go through one massive file.
- All styles in the partial will be added to and can be used in the main file as if they were defined in the main file itself.

## File 1 _variable.scss

```scss
$primary-button-color: #009494;
$hover-color: black;
$menu-color: #f2f2f2;
```

## File 2 style.scss
- We can see the importing of the .scss file's content into the other main .scss file style.scss

```scss
{@import 'variables';
@import "{{ site.theme }}";}
/* "row style" is flexible size and aligns pictures in center */
.row {
    align-items: center;
    display: flex;
  }
  
  /* "column style" is one-third of the width with padding */
  .column {
    flex: 33.33%;
    padding: 5px;
  }

.menu a {
  // float: left;
  display: block;
  color: $menu-color;
  text-align: center;
  // padding: 14px 16px;
  text-decoration: none;
}
.menu a:hover {
  background: $primary-button-color;
    color: $hover-color;
}
```

# Nesting

- Nesting is a way to organize your code and make it easier to read.
- Nesting is when you put one selector inside another selector.
- When we make HTML we often nest different elements within each other to have a clear structure when we look at it.
- The problem is that in regular CSS we don't have that so we need to use SASS to help us organize our code.

- Warning: Don't nest too much as when the CSS is processed it can make overqualified selectors which can be hard to read and maintain. Which means that it would only target that specific element type and not any other elements that have the same class name.

## Sass Nesting
- Through nesting the ul, li, and a selectors within the nav selector makes your CSS better and increases its readability overall.

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

## CSS - Lack of Nesting
- We can see that through the lack of nesting the CSS is not as organized and needs extra information to be able to make it more clear exactly what is being targeted.

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

# Variables
> What is a variable?
- A variable is a container that stores a value so when you have multiple places that refer to one value you can just use the variable name instead of the value.
- This is valuable in SASS because it allows you to reuse that value in multiple places throughout your stylesheet. 
- The $ symbol is used in Sass to designate a variable. 

## Variable Example Syntax
- $variable-name: value;
- Once the sass is processed the variable name is replaced with the value throughout the program.

```scss
$main-font: Calibri, sans-serif;
$main-color: #000;
$main-color-hover: #000;
```

# Hacks
- Try to use the SCSS files in the [nighthawk pages](https://github.com/nighthawkcoders/Nighthawk-Pages) repository to change the SASS theming on your blog.
- Use the SCSS files to modify the button theming in the [JS Calculator](https://nighthawkcoders.github.io/teacher_portfolio//c7.0/2023/08/23/javascript-calculator.html).
