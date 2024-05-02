---
toc: True
comments: True
layout: post
title: jQuery | P3
description: Our lesson on jQuery and CRUD!
type: collab
courses: {'csa': {'week': 15}}
authors: Tay, Emaad, Justin, Theo, Ethan T, Finn
---

# What is jQuery?

Essentially, jQuery is a library that allows us to use some of JavaScript's built in functions

## Benefits of jQuery

Benefits of jQuery include:

- Makes it easier for us to write JavaScript and HTML code
- Very flexible in terms of which browsers it can work on
- Simplifies some of the most common JavaScript functions into fewer lines of code

**Question:** What are some real life applications of jQuery? Name at least two you can think of. 
- Web pages, used to make dropdown menus appear smoothly
- Simplifies implementation of AJAX, allows developers to make asynchronous requests to a server and update parts of a web page without requiring a full page reload

## Basic Syntax

Whenever you are working with jQuery, the most basic format you will you use is the following:

(selector).action()

- The selector refers to the HTML element/target elements (ie. class or ID)

Some examples include:

(this).hide() - hides the current element.


("p").hide() - hides all <p> elements.


(".test").hide() - hides all elements with class="test".


("#test").hide() - hides the element with id="test".


```python
<html>
<head>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
</head>
<body>
  <h1>Movie Search</h1>

  <h2>Search for a Movie Series</h2>
  <form id="seriesForm">
    <input type="text" id="seriesInput" placeholder="Enter series title">
    <button type="submit">Search</button>
  </form>
  <div id="seriesContainer"></div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
  <script>
    function fetchMovieSeriesData(seriesTitle) {
      var apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=5f87798890b72c6ac53b262ba43ed8c6&query=" + encodeURIComponent(seriesTitle); 
      var request = new XMLHttpRequest(); // requests data
      request.open("GET", apiUrl, true); // fetches the data from the url
      request.onload = function() { 
        if (request.status === 200) { // if request is successful - more specific than before
          var data = JSON.parse(request.responseText); // JS variable from JSON data
          fetchSeriesMovieData(data);
        } else {
          document.getElementById("seriesContainer").textContent = "Error fetching movie series data.";
        }
      };
      request.onerror = function() {
        document.getElementById("seriesContainer").textContent = "Error fetching movie series data.";
      };
      request.send();
    }
    function fetchSeriesMovieData(data) {
      if (data.results && data.results.length > 0) { // checks that data contains info and is not empty
        var movieSeries = data.results;
        var creditsDataPromises = movieSeries.map(function(movie) { // creates an array of promises, which each fetch data for a movie in the series through a separate API request
          var apiUrl = "https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=5f87798890b72c6ac53b262ba43ed8c6";
          return fetch(apiUrl).then(function(response) { // each request from each promise
            return response.json();
          });
        });
        Promise.all(creditsDataPromises).then(function(creditsData) { // All promises are resolved and a new function is called with the movies series and the data
          displayMovieSeriesData(movieSeries, creditsData);  
        }).catch(function(error) { // if an error appears
          document.getElementById("seriesContainer").textContent = "Error fetching movie series data.";
        });
      } else {
        document.getElementById("seriesContainer").textContent = "No movie series found.";
      }
    }
    function displayMovieSeriesData(movieSeries, creditsData) {
      var table = document.createElement("table");
      var tableHeader = table.createTHead(); // a header is created 
      var headerRow = tableHeader.insertRow(); // Rows are added to the table
      var columns = ["Title", "Popularity", "Vote Count", "Vote Average", "Poster"]; // column titles
      for (var i = 0; i < columns.length; i++) { // iterates through column array and continues until i is greater than length of columns
      // basically, rows are created for every column
        var th = document.createElement("th"); // rows are added underneath the headers
        th.textContent = columns[i]; // data is added to the rows
        headerRow.appendChild(th); // the rows are displayed
      }
      var tableBody = table.createTBody(); // the body of the table is created
      for (var j = 0; j < movieSeries.length; j++) { // another for loop but iterates through the data
      // this way, every single row with contain data since the loop stops once all the data is iterated through
        var movie = movieSeries[j]; // the data is assigned to a variable
        var row = tableBody.insertRow(); // rows are added to the body
        var titleCell = row.insertCell(); 
        titleCell.textContent = movie.title; // the title is displayed in new cells at the rows
        var popularityCell = row.insertCell();
        popularityCell.textContent = movie.popularity; // the popularity is displayed
        var voteCountCell = row.insertCell();
        voteCountCell.textContent = movie.vote_count; // the vote count is displayed
        var voteAverageCell = row.insertCell();
        voteAverageCell.textContent = movie.vote_average; // the vote average is displayed
        var posterCell = row.insertCell();
        var posterImage = $("<img>")
          .attr("src", "https://image.tmdb.org/t/p/w200" + movie.poster_path)
          .attr("alt", "Movie Poster");
        posterCell.appendChild(posterImage);
      }
      document.getElementById("seriesContainer").appendChild(table);
      $('.movie-series-table').DataTable();
    } 
    document.getElementById("seriesForm").addEventListener("submit", function(event) {
      event.preventDefault();
      var seriesTitle = document.getElementById("seriesInput").value;
      fetchMovieSeriesData(seriesTitle);
    });
  </script>
</body>
</html>
```

As you can see, JQuery can be used with APIs to create a more user friendly output and also makes it easier to work with API's and code. It also allows for DOM manipulation and event handling (to be covered later). Overall, JQuery is a very powerful tool that can be used to help with coding and ensure better user experience.

### Comparison

Without JQuery:


```python
<script>
    var posterImage = document.createElement("img");
    posterImage.src = "https://image.tmdb.org/t/p/w200" + movie.poster_path;
    posterImage.alt = "Movie Poster";
</script>
```

With JQuery:


```python
<script>
    var posterImage = $("<img>")
      .attr("src", "https://image.tmdb.org/t/p/w200" + movie.poster_path)
      .attr("alt", "Movie Poster");
    posterCell.appendChild(posterImage);
</script>
```

# Introduction to DOM

One of the most useful abilities of JavaScript (and thus jQuery) is its ability to manipulate the DOM. But what is the DOM?

# Overview of DOM

The DOM, short for Document Object Model, is a standard that allows us to create, change, or remove elements from HTML or XML documents. 

Some operations that you can perform on DOM elements include...

- Extracting the content of an element
- Changing the content of an element
- Adding an element before or after an existing element
- Replacing an existing element with another element
- Deleting an element
- And many more!

## jQuery Get Methods

### text() method

The jQuery text method, as its name implies, simply returns the plain text value of the content.

Below is an example of an application of the text() method:


### html() method

The jQuery html method returns the plain text value of the content too, but it also returns it with HTML tags.

### Example 


```python

<div id="info">
  <p class="name">John Doe</p>
  <p class="description">
    <span>Web Developer</span> at <a href="#">TechCorp</a>
  </p>
</div>
```

#### text() method use


```python
var descriptionText = $(".description").text();
console.log(descriptionText);

// with the text() method, this would output the plain text value of description 
// output: 'Developer at TechCorp'
```

- jQuery .text() method is used to retrieve the plain text content from the element with the class description ('Developer at TechCorp')
- The $(".description").text() part selects the element with class description and then gets its textual content without any HTML tags.

#### html() method use


```python
var descriptionHTML = $(".description").html();
console.log(descriptionHTML);

// with the html() method, this would output the HTML content of the element with all the HTML tags
// output:'<span>Web Developer</span> at <a href="#">TechCorp</a>'
```

- The .html() method is used to fetch the HTML content from the same description element
- $(".description").html() selects the description element and also its inner HTML content, including the HTML tags like <span> and <a> 

# Event Handling

## Events

Events refer to the various actions or occurrences that happen in the web browser, which can be detected and responded to with JavaScript

Some types of events include...
- keyboard events (keypress, keyup, etc.)
- form events (ex. submit)
- document/window events (resize, load, etc.)

### Examples

#### Event Handler for Clicking a Button


```python
<button id="clickButton">Click Me!</button>

```


```python
$("#clickButton").click(function() {
    alert("Button was clicked!");
  });
```

Breakdown:

- In this first example, the jQuery code sets up an event handler for the click event on the button with the ID ```clickButton```
- When the button is clicked, an alert box displays the message, "Button was clicked!"

#### Event Handler for Form Submit


```python
<form id="myForm">
  <input type="text" placeholder="Enter text">
  <input type="submit" value="Submit">
</form>
<div id="formOutput"></div>
```


```python
$("#myForm").submit(function(event) {
    event.preventDefault(); 
    var enteredText = $(this).find("input[type='text']").val();
    $("#formOutput").text("You entered: " + enteredText);
  });
  
```

Breakdown:

- In this code segment, the jQuery script handles the submit event of the form with the ID ```myForm```.
- The event.preventDefault() method stops the form from being submitted in the traditional way (clicking the submit button), which prevents the page from reloading.
- It gets the text entered in the text input field and displays it in a div with the ID ```formOutput```.

#### Event Handler for Mouse Enter/Leave


```python
<div id="hoverDiv">Hover over me!</div>

```


```python
$("#hoverDiv").mouseenter(function() {
    $(this).css("background-color", "green");
  }).mouseleave(function() {
    $(this).css("background-color", "red");
  });
```

Breakdown:
- The code attaches two event handlers to the div with ID hoverDiv. (for when the mouse enters and leaves the div)
- When the mouse hovers over the div (mouseenter event), the background color changes to green.
- When the mouse leaves the div (mouseleave event), the background color changes to red.

# What is CRUD?

**Create (C):**

GOAL: create records or objects in a database, like creating records in SQLITE database in SPRING java project. 

**Read (R):**

GOAL: retrieve data from our database for display or for interaction

**Update (U):**

GOAL: Update our data in our database, such as changing attributes like name

**Delete (D):**

GOAL: remove data from our database, like removing objects from our database

### popcorn hack

talk about usage of one of four elements of CRUD from your project in tri 1. Focus on how CRUD was implemented. 

### simple example of CRUD


```python
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
class Person {
    private int id;
    private String name;
    public Person(int id, String name) {this.id = id; this.name = name;}
    public int getId() {return id;}
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
}
public class CrudExample {
    private static List<Person> people = new ArrayList<>();
    private static int nextId = 1;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) { System.out.println("1. Create\n2. Read\n3. Update\n4. Delete\n5. Exit\nEnter your choice: ");
            int choice = scanner.nextInt();
            switch (choice) {
                case 1: createPerson(scanner); break;
                case 2: readPeople(); break;
                case 3: updatePerson(scanner); break;
                case 4: deletePerson(scanner); break;
                case 5: System.out.println("Exiting program."); return;
                default: System.out.println("Invalid choice. Please try again.");
            }
        }
    }
    //CREATE
    private static void createPerson(Scanner scanner) {
        System.out.print("Enter person name: "); String name = scanner.next();
        Person person = new Person(nextId++, name); people.add(person);
        System.out.println("Person created with ID: " + person.getId());
    }
    //READ
    private static void readPeople() {
        System.out.println("People:");
        for (Person person : people) {System.out.println("ID: " + person.getId() + ", Name: " + person.getName());}
    }
    //UPDATE
    private static void updatePerson(Scanner scanner) {
        System.out.print("Enter person ID to update: "); int idToUpdate = scanner.nextInt();
        for (Person person : people) {if (person.getId() == idToUpdate) {System.out.print("Enter new name: "); String newName = scanner.next(); person.setName(newName); System.out.println("Person updated successfully."); return;}}
        System.out.println("Person with ID " + idToUpdate + " not found.");
    }
    //DELETE 
    private static void deletePerson(Scanner scanner) {
        System.out.print("Enter person ID to delete: "); int idToDelete = scanner.nextInt();
        for (Person person : people) {if (person.getId() == idToDelete) {people.remove(person); System.out.println("Person deleted successfully."); return;}}
        System.out.println("Person with ID " + idToDelete + " not found.");
    }
}
CrudExample.main(null);
```

# CRUD + jQuery Connection

## Example with Disney Characters

<!-- Include jQuery library -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<style>
    /* Set background color, font, and remove default margins and padding for the body */
    body {
        background-color: #a8c0ff; /* Disney Blue */
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
    }

    /* Style for the table */
    table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
    }

    /* Style for table header and cells */
    th, td {
        border: 1px solid #70a9ff; /* Disney Blue */
        padding: 10px;
        text-align: left;
    }

    /* Style for table header */
    th {
        background-color: #3d5af1; /* Disney Blue */
        color: white;
    }

    /* Style for buttons */
    button {
        background-color: #3d5af1; /* Disney Blue */
        color: white;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
    }

    /* Style for button hover effect */
    button:hover {
        background-color: #1c3faa; /* Lighter Disney Blue */
    }
</style>

<!-- HTML table structure with an empty tbody for dynamic data -->
<table id="data-table">
    <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <!-- Initial data will be dynamically added here -->
    </tbody>
</table>

<!-- Button to trigger the creation of a new Disney character -->
<button id="create-btn">Create Disney Character</button>

<script>
    // Initial data for Disney characters
    const initialData = [
        { id: 1, name: 'Mickey Mouse', email: 'mickey@example.com' },
        { id: 2, name: 'Donald Duck', email: 'donald@example.com' }
    ];

    // Dynamic data that can be updated or modified
    let dynamicData = [...initialData];

    // Function to remove rows with duplicate IDs
    function removeDuplicateIds(data) {
        const uniqueIds = new Set();
        return data.filter(item => {
            if (uniqueIds.has(item.id)) {
                return false; // Duplicate ID, exclude this item
            }
            uniqueIds.add(item.id);
            return true;
        });
    }

    // Function to render data into the table
    function renderData(data) {
        const tableBody = $('#data-table tbody');
        tableBody.empty();

        // Loop through the data and create table rows dynamically
        data.forEach(item => {
            const row = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>
                        <button class="update-btn" data-id="${item.id}">Update</button>
                        <button class="delete-btn" data-id="${item.id}">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.append(row);
        });
    }

    // Function to create a new Disney character
    function createDisneyCharacter() {
        const newName = prompt('Enter the name of the Disney character:');
        const newEmail = prompt('Enter the email of the Disney character:');

        // Check if there are multiple rows with the same ID
        const existingIds = [...initialData, ...dynamicData].map(item => item.id);
        const newId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

        // Add the new character to the dynamic data array
        dynamicData = [...dynamicData, { id: newId, name: newName, email: newEmail }];

        // Render only the dynamic data
        renderData(removeDuplicateIds(dynamicData));
    }

    // Event handler for the "Create Disney Character" button click
    $('#create-btn').on('click', createDisneyCharacter);

    // Event handler for the "Delete" and "Update" buttons inside the table
    $('#data-table').on('click', '.delete-btn', function () {
        // Get the ID of the item to delete
        const idToDelete = $(this).data('id');
        // Filter out the item with the specified ID from the dynamic data
        dynamicData = dynamicData.filter(item => item.id !== idToDelete);
        // Render only the dynamic data
        renderData(removeDuplicateIds(dynamicData));
    });

    // Event handler for the "Update" button inside the table
    $('#data-table').on('click', '.update-btn', function () {
        // Get the ID of the item to update
        const idToEdit = $(this).data('id');
        // Find the index of the item in the dynamic data array
        const updateIndex = dynamicData.findIndex(item => item.id === idToEdit);

        // Check if the item was found
        if (updateIndex !== -1) {
            // Prompt the user for the new name and email
            const updateName = prompt('Enter the new name of the Disney character:');
            const updateEmail = prompt('Enter the new email of the Disney character:');

            // Update the item in the dynamic data array
            dynamicData[updateIndex] = { id: idToEdit, name: updateName, email: updateEmail };

            // Render only the dynamic data
            renderData(removeDuplicateIds(dynamicData));
        }
    });

    // Initial rendering of the table with the initial data
    renderData(removeDuplicateIds(initialData));
</script>



```python
<!-- Include jQuery library -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<style>
    /* Set background color, font, and remove default margins and padding for the body */
    body {
        background-color: #a8c0ff; /* Disney Blue */
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
    }

    /* Style for the table */
    table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
    }

    /* Style for table header and cells */
    th, td {
        border: 1px solid #70a9ff; /* Disney Blue */
        padding: 10px;
        text-align: left;
    }

    /* Style for table header */
    th {
        background-color: #3d5af1; /* Disney Blue */
        color: white;
    }

    /* Style for buttons */
    button {
        background-color: #3d5af1; /* Disney Blue */
        color: white;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
    }

    /* Style for button hover effect */
    button:hover {
        background-color: #1c3faa; /* Lighter Disney Blue */
    }
</style>

<!-- HTML table structure with an empty tbody for dynamic data -->
<table id="data-table">
    <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <!-- Initial data will be dynamically added here -->
    </tbody>
</table>

<!-- Button to trigger the creation of a new Disney character -->
<button id="create-btn">Create Disney Character</button>

<script>
    // Initial data for Disney characters
    const initialData = [
        { id: 1, name: 'Mickey Mouse', email: 'mickey@example.com' },
        { id: 2, name: 'Donald Duck', email: 'donald@example.com' }
    ];

    // Dynamic data that can be updated or modified
    let dynamicData = [...initialData];

    // Function to remove rows with duplicate IDs
    function removeDuplicateIds(data) {
        const uniqueIds = new Set();
        return data.filter(item => {
            if (uniqueIds.has(item.id)) {
                return false; // Duplicate ID, exclude this item
            }
            uniqueIds.add(item.id);
            return true;
        });
    }

    // Function to render data into the table
    function renderData(data) {
        const tableBody = $('#data-table tbody');
        tableBody.empty();

        // Loop through the data and create table rows dynamically
        data.forEach(item => {
            const row = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>
                        <button class="update-btn" data-id="${item.id}">Update</button>
                        <button class="delete-btn" data-id="${item.id}">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.append(row);
        });
    }

    // Function to create a new Disney character
    function createDisneyCharacter() {
        const newName = prompt('Enter the name of the Disney character:');
        const newEmail = prompt('Enter the email of the Disney character:');

        // Check if there are multiple rows with the same ID
        const existingIds = [...initialData, ...dynamicData].map(item => item.id);
        const newId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

        // Add the new character to the dynamic data array
        dynamicData = [...dynamicData, { id: newId, name: newName, email: newEmail }];

        // Render only the dynamic data
        renderData(removeDuplicateIds(dynamicData));
    }

    // Event handler for the "Create Disney Character" button click
    $('#create-btn').on('click', createDisneyCharacter);

    // Event handler for the "Delete" and "Update" buttons inside the table
    $('#data-table').on('click', '.delete-btn', function () {
        // Get the ID of the item to delete
        const idToDelete = $(this).data('id');
        // Filter out the item with the specified ID from the dynamic data
        dynamicData = dynamicData.filter(item => item.id !== idToDelete);
        // Render only the dynamic data
        renderData(removeDuplicateIds(dynamicData));
    });

    // Event handler for the "Update" button inside the table
    $('#data-table').on('click', '.update-btn', function () {
        // Get the ID of the item to update
        const idToEdit = $(this).data('id');
        // Find the index of the item in the dynamic data array
        const updateIndex = dynamicData.findIndex(item => item.id === idToEdit);

        // Check if the item was found
        if (updateIndex !== -1) {
            // Prompt the user for the new name and email
            const updateName = prompt('Enter the new name of the Disney character:');
            const updateEmail = prompt('Enter the new email of the Disney character:');

            // Update the item in the dynamic data array
            dynamicData[updateIndex] = { id: idToEdit, name: updateName, email: updateEmail };

            // Render only the dynamic data
            renderData(removeDuplicateIds(dynamicData));
        }
    });

    // Initial rendering of the table with the initial data
    renderData(removeDuplicateIds(initialData));
</script>

```
