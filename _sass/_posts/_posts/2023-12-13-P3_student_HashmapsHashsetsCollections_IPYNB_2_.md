---
toc: True
comments: True
layout: post
title: HashMap | P3
description: Student lessons for HashMaps, HashSets, Collections, and SQL
courses: {'csa': {'week': 16}}
author: Shaurya, James, Shivansh, Haoxuan, Quinn
type: collab
---

# Key Concepts 
**Directions: Fill in the blanks, this is a Popcorn HACK**

## Hashing
- HashMap uses a hash function to map ______ to their respective _______ .
- A good hash function generates a unique hash code for each key, but _____ can still occur.
- The hash map in Java does not maintain insertion order.

## Performance

- HashMap provides constant-time performance (O(1)) for get() and put() operations.
- Performance can degrade to O(n) in the worst case, especially if there are many hash collisions.

## Key and Value Types

- HashMap allows any ______ object as a key and any ______ (including null) as a value.
- For a class to be used as a key, it must implement the _____ and ______ methods.

## Iteration:

- HashMap provides methods like keySet(), values(), and entrySet() for iterating over key-value pairs.
- The entrySet() method returns a Set view of key-value pairs, allowing ______ and _______.

## Thread Safety

- HashMap is not thread-safe. For thread-safe operations, use ConcurrentHashMap.


# What is HashMap
A HashMap store items in "key/value" pairs, and you can access them by an index of another type (e.g. a String).

One object is used as a key (index) to another object (value). It can store different types: String keys and Integer values, or the same type, like: String keys and String values:


## Creating HashMap in Java



```java
import java.util.HashMap; // import the HashMap class

public class CreateHashMap{
    public static void main(String[] args){
        // Generating the HashMap
    HashMap<String, String> capitalCities = new HashMap<String, String>();
    // Adding key/value pairs tothe HashMap to store
            capitalCities.put("America", "D.C");
            capitalCities.put("Germany", "Berlin");
            capitalCities.put("United Kingdom", "London");
            capitalCities.put("India", "Delhi");
            capitalCities.put("Afghanistan", "Delhi");
            capitalCities.put("Bangladesh", "Dhaka");
            
            System.out.println("Successfully created a HashMap which stores items in key/value pairs");
    }
}

CreateHashMap.main(null);


```

    Successfully created a HashMap which stores items in key/value pairs


# Methods in HashMap


```java

import java.util.HashMap;
 
public class ExampleHashMap {
      public static void main(String[] args) {
       
      // Create a HashMap
      HashMap<String, Integer> hashMap = new HashMap<>();
       
      // Add elements to the HashMap
      hashMap.put("Shivansh", 25);
      hashMap.put("Shaurya", 30);
      hashMap.put("Patrick Mahomes", 28);
      hashMap.put("Travis Kelce", 34);
      hashMap.put("Tom Brady", 46);
       
      // HashMap put() method in Java (Access elements in the HashMap)
      System.out.println(hashMap.get("Shivansh")); 

      // HashMap remove() method in Java (Remove an element from the HashMap)
      hashMap.remove("Tom Brady");
       
      // HashMap size() method in Java (Get the size of the HashMap)
      System.out.println(hashMap.size()); 

      // HashMap entrySet() method in Java (Get the Entry Set)
      System.out.println("The set is: " + hashMap.entrySet()); 

      // HashMap containsKey() method in Java (check whether a particular key is being mapped into the HashMap or not)
      System.out.println("Is the key 'Shivansh' present? " + hashMap.containsKey("Shivansh"));
      
      
   }
}
ExampleHashMap.main(null);
```

    25
    4
    The set is: [Travis Kelce=34, Shivansh=25, Shaurya=30, Patrick Mahomes=28]
    Is the key 'Shivansh' present? true


### Popcorn Hack 1
Declare a Hashmap, and then research 5 different HashMap method which were not listed above and use them in your code just like the one above.


```java
// Code Here
```

# Traversing through HashMap

In the code below, hash_map.entrySet() is used to return a set view of the mapped elements. Now, getValue() and getKey() functions, key-value pairs can be iterated.


```java
import java.util.HashMap;
public class TraverseHashMap{
public static void main(String[] args){
   // Week 15 NFL Quarterback Rankings
   HashMap<Integer, String> hash_map = new HashMap<>();
   hash_map.put(1, "Jalen Hurts");
   hash_map.put(2, "Dak Prescott");
   hash_map.put(3, "Josh Allen");
   hash_map.put(4, "Lamar Jackson");
   hash_map.put(5, "Brock Purdy");
    for (Map.Entry<Integer, String> set : hash_map.entrySet()) {
        System.out.println(set.getKey() + " = " + set.getValue());
    }
}
}
TraverseHashMap.main(null);


```

    1 = Jalen Hurts
    2 = Dak Prescott
    3 = Josh Allen
    4 = Lamar Jackson
    5 = Brock Purdy


### Popcorn Hack 2 (Extra Credit)
Try to find a different way to traverse a HashMap (Hint: try using a forEach function)


```java
// Code Here
```

# HashMaps in Java - Pet Registry Example 


```java
public class Pet {
    private final String name;
    private final int age;
    private final String color;

    public Pet(String name, int age, String color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }

    public String getColor() {
        return this.color;
    }
}

```


```java
public class PetsRegistry {
    
    private HashMap<String, Pet> petRegistry = new HashMap<>(); // declares a private HashMap instance variable petRegistry
    // Key Type String and Value Type Pet

    public PetsRegistry() {
        // Add some pets to the registry
        petRegistry.put("Leo", new Pet("Lion", 8, "Gold"));
        petRegistry.put("Porky", new Pet("Pig", 3, "Pink"));
        petRegistry.put("Ro-Ro", new Pet("Robin", 7, "Red"));
        petRegistry.put("Midnight", new Pet("Cat", 10, "Black"));
        petRegistry.put("Hobbes", new Pet("Kitty", 1, "Calico"));
        petRegistry.put("Duke", new Pet("Dog", 14, "Brown"));
    }

    public Pet removePet(String name) {
        // Remove a pet by name
        return petRegistry.remove(name);
    }

    public void printRegistry() {
        // Iterate over the registry and print pet information
        for (String name : petRegistry.keySet()) { // for each loop
            Pet pet = petRegistry.get(name);
            System.out.println(name + " is a " + pet.getColor() + " " + pet.getName() +
                    " and is " + pet.getAge() + " years old.");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // Initialize the pet registry
        PetsRegistry petsRegistry = new PetsRegistry();
        petsRegistry.printRegistry();

        // Remove a pet
        String petNameToRemove = "Hobbes";
        Pet removedPet = petsRegistry.removePet(petNameToRemove);
        if (removedPet == null) {
            System.out.println(petNameToRemove + " not found");
        } else {
            System.out.println("Removed: " + petNameToRemove + ", " + removedPet);
        }

        // Print the updated registry
        petsRegistry.printRegistry();
    }
}
PetsRegistry.main(null)
```

    Hobbes is a Calico Kitty and is 1 years old.
    Leo is a Gold Lion and is 8 years old.
    Porky is a Pink Pig and is 3 years old.
    Ro-Ro is a Red Robin and is 7 years old.
    Duke is a Brown Dog and is 14 years old.
    Midnight is a Black Cat and is 10 years old.
    
    Removed: Hobbes, REPL.$JShell$13$Pet@41a890b3
    Leo is a Gold Lion and is 8 years old.
    Porky is a Pink Pig and is 3 years old.
    Ro-Ro is a Red Robin and is 7 years old.
    Duke is a Brown Dog and is 14 years old.
    Midnight is a Black Cat and is 10 years old.
    


# Popcorn HACK 3 (Shaurya)


```java
import java.util.HashMap;
import java.util.Map;

public class HashMapTest {
    public static void main(String[] args) {
        // Create a new HashMap with Integer keys and String values
        Map<Integer, String> myMap = new HashMap<>();

        // Add some key-value pairs to the HashMap
        myMap.put(1, "Apple");
        myMap.put(2, "Banana");
        myMap.put(3, "Cherry");

        // Fill in the blanks: Retrieve and print the value for key 2
        String valueForKey2 = myMap.get(___);
        System.out.println("Value for key 2: " + valueForKey2);

        // Fill in the blanks: Check if the HashMap contains key 4
        boolean containsKey4 = myMap.containsKey(___);
        System.out.println("Does the map contain key 4? " + containsKey4);

        // Fill in the blanks: Remove the entry with key 1 from the HashMap
        myMap.remove(___);

        // Print the updated contents of the HashMap
        System.out.println("Updated HashMap:");
        for (Map.Entry<Integer, String> entry : myMap.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }
}

```

# Popcorn HACK 4 - Quiz (Shaurya)

## Multiple Choice:

### Question 1: Hashing in HashMap

What is the primary purpose of a hash function in a HashMap?

- A) To encrypt the keys
- B) To map keys to corresponding buckets
- C) To validate the keys
- D) To generate random numbers

### Question 2: Performance of HashMap

What is the time complexity of the get() and put() operations in a well-distributed HashMap?

- A) O(log n)
- B) O(n)
- C) O(1)
- D) O(n^2)

## Free Response:

### Question 3: Key and Value Types in HashMap

Describe the types of objects that can be used as keys and values in a HashMap. Additionally, explain the methods that a class should implement if used as a key.

______________________________________________________________________________
______________________________________________________________________________
______________________________________________________________________________


### Question 4: Iteration in HashMap

Provide brief explanations for two methods in HashMap that can be used to iterate over its key-value pairs.

______________________________________________________________________________
______________________________________________________________________________
______________________________________________________________________________

### Question 5: Thread Safety in HashMap

Explain why HashMap is not thread-safe and what issues might arise when multiple threads access the same HashMap instance concurrently. Suggest an alternative class that can be used for concurrent access and explain its benefits.

______________________________________________________________________________
______________________________________________________________________________
_____________________________________________________________________________

# HACKS (Shaurya)

1) Finish Popcorn HACKS
2) Develop a Java application that utilizes a HashMap to manage a sports team roster. Each player on the team should have attributes like name, position, and jersey number. The program should enable functionalities such as adding new players, updating player information, and searching for players based on their jersey numbers using the HashMap implementation.
3) Reflection (4-5 sentences)

## Lesson: Collections in Java and SQL

### Introduction to Collections in Java
In Java, the `Collection` interface is a member of the Java Collections Framework and extends the `Iterable` interface. It includes methods for basic operations (such as `add`, `remove`, `clear`), bulk operations (such as `containsAll`, `addAll`, `retainAll`, `removeAll`), and array operations (such as `toArray`).



```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        List<String> list = new ArrayList<String>();
        // Adding elements to the list
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        System.out.println("List: " + list);
    }
}
```

### Definition of Collections
In the context of SQL, collections refer to a group of related data items that can be treated as a whole. Common types of collections include arrays, lists, and sets.

### Using Collections with SQL
When working with databases in Java, you can use the `java.sql`` package. This package provides classes for connecting to a database and executing SQL queries.


```java
import java.sql.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "root";
        String password = "password";

        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM mytable");

            // Creating a list to store the results
            List<String> results = new ArrayList<String>();
            while (rs.next()) {
                results.add(rs.getString("mycolumn"));
            }
            System.out.println("Results: " + results);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

In this code, we’re connecting to a MySQL database and executing a SQL query. The results of the query are then stored in an ArrayList

### `Purpose of Collections`
Collections are useful in a database because they allow you to store multiple values in a single column. This can be beneficial in scenarios where you have a one-to-many relationship. For example, a single product could have multiple colors, sizes, or other attributes.

#### `Important terminology`
- Elements: Individual items within a collection.
- Indexes: The position of an element within a collection.
- Scalar: A single value, as opposed to a collection which can hold multiple values.

## Advanced usage in Collections

### Nested Collections
Collections can be nested, creating a collection of collections, for more freeform control, such as representing a 2D map with a 2D array.


```java
public class NestedArrays {
    public static void print2Darray(int[][] arr){
        // function for printing arrays
        for (int i=0;i<arr.length;i++){
            for (int j=0;j<arr[i].length;j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args){
        // Direct declaration of an array containing arrays
        int[][] arr = {
            {8,1,6},
            {3,5,7},
            {4,9,2}
        };
        print2Darray(arr);
        System.out.println(arr[1][2]);//printing the value at [1][2] (7)
        arr[1][2] = 0; //assigning a new value to inside the 2D array
        System.out.println(arr[1][2]);
    }
}
NestedArrays.main(null);
```

### Popcorn hacks
Create a program that sums the columns and the rows of the given nested array (should all be 15), then create a copy of the original array by looping through the original array and assigning the values to a new array.


```java
public class NestedArraysPopcorn {
    public static void print2Darray(int[][] arr){
        // function for printing arrays
        for (int i=0;i<arr.length;i++){
            for (int j=0;j<arr[i].length;j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args){
        int[][] arr = {
            {8,1,6},
            {3,5,7},
            {4,9,2}
        };
    }
}
NestedArrays.main(null);
```

### Null values in collections
null values are placeholders that are implemented when there is not any value that is inputed, you see it when we call the main method in our programs. It is automatically created when a new reference variable (such as an Integer) is created but no values have been assigned to it yet. It can also be created directly.

Having null values in a collection will not immediately crash the program, however, it can cause a NullPointerException error if it is used carelessly. So it is important to learn how to identify and filter it.


```java
import java.util.ArrayList;
public class NullValuesInArray {
    public static void main(String[] args){
        Integer[] arr = new Integer[10];//array of Integer
        System.out.println(arr[3]);
        // if the following line of code is ran, it will return a NullPointerException error
        //System.out.println(1+arr[2]);
        for (int i=0;i<arr.length;i++){
            arr[i]=0;// sets the values in the arr to 0
        }
        System.out.println(1+arr[2]);
    }
}
NullValuesInArray.main(null);//using null values in the main method
```

### Popcorn hacks
The given array has certain values set to null, loop through to set all null values to 0, then sum every value in the array.


```java
import java.util.ArrayList;
public class NullValuesInArrayPopcorn {
    public static void main(String[] args){
        int[] arr = {
            4,5,6,null,9,10,null,9,3,2,5,null
        }; // you can look at the array, but it's more fun to do the problem without doing that
    }
}
NullValuesInArray.main(null);
```

### Performance and Complexities
All of the functions used in collections takes a certain time complexity to do, and it may be sometimes better to use one value over the other.
Here are some time complexities for commonly used methods

|Method|Time Complexity|
|-|-|
|Initialization|O(n)|
|Accessing (arr[i] get(i))|O(1)|
|Assignment (arr[i]=a, set(i,a))|O(1)|
|Sorting (Array.sort(arr), sort(Comparator))|O(nlog(n))|
|Length (length, size())|O(1)|
|copy (clone(), arraycopy())|O(n)|

The space complexity of a collection is its size.

Most of the time, the array is a versatile tool that can effeciently store and process values, however, sometimes we would want a different requirement. For example, when we want a storage to always be sorted, while we could use some sort of binary search method to find the best position to insert a value, there are just data structures, such as TreeSet, that maintains sorted status upon insertion. It's important to use the data structure that best suits your need in the right context.

### Real world applications of Collections
In the context of an application or a database, a collection can allow for large amounts of values to be stored efficiently without creating large amounts of variables, storing what's usually a column of information in a single cell (I guess then, then that's also a collection of collection in of itself). It can be used for when you don't know how long that a list can be, you can modify the values in a collection easily also. However, the usage of many collections can add a lot of unnecessary weight on the database due to the extra spaces used, and it can be hard to keep track of what functions should be used for modifying certain values in a collection.

# Usage of Collections in SQL
In SQL, collections are powerful data types that allow us to store multiple values. Let's delve into declaring different types of collections.


```java
-- Syntax for declaring an array
DECLARE TYPE Array_Type IS VARRAY(5) OF VARCHAR2(50);

-- Syntax for declaring a nested table
DECLARE TYPE Nested_Table_Type IS TABLE OF NUMBER;

-- Syntax for declaring an associative array
DECLARE TYPE Assoc_Array_Type IS TABLE OF VARCHAR2(50) INDEX BY PLS_INTEGER;
```

### Explanation: 
In SQL, we can declare different types of collections to store multiple values. An array is defined with a fixed size of 5, specifically designed to accommodate VARCHAR2 values. Simultaneously, a nested table is declared to store numeric values, offering flexibility in handling numerical data. Additionally, an associative array is declared with an index of PLS_INTEGER, providing a dynamic structure to hold VARCHAR2 values based on the specified index. These declarations showcase the versatility of collections in SQL, allowing for efficient management of various data types.

## Initialization of Collections
Now, let's initialize these collections using different methods.


```java
-- Initializing an array
DECLARE
  my_array Array_Type := Array_Type('Value1', 'Value2', 'Value3');

-- Initializing a nested table
DECLARE
  my_table Nested_Table_Type := Nested_Table_Type(1, 2, 3);

-- Initializing an associative array
DECLARE
  my_assoc_array Assoc_Array_Type;
BEGIN
  my_assoc_array(1) := 'Item1';
  my_assoc_array(2) := 'Item2';
END;
```

### Explanation: 

In the initialization phase, the array is populated with predefined values using its constructor, ensuring specific elements are set from the start. Meanwhile, the nested table is initialized with numeric values, establishing its initial content based on numerical data. In contrast, the associative array takes a more dynamic approach, as values are individually assigned within a BEGIN-END block, allowing for flexible and tailored initialization based on specific requirements or conditions.

## Adding, Removing, and Modifying Elements
Now, let's explore how to perform fundamental operations on collections.


```java
-- Adding elements to an array
my_array.EXTEND;
my_array(4) := 'Value4';

-- Removing elements from a nested table
my_table.DELETE(2);

-- Modifying an element in an associative array
my_assoc_array(1) := 'UpdatedItem';
```

### Explanation:

In this sequence of operations, the array undergoes extension to accommodate a new element, subsequently being assigned a specific value. Simultaneously, within the nested table, an element is removed. Additionally, in the associative array, a specific element undergoes modification, ensuring the dynamic adaptability of the collection to evolving data requirements.

## Common Operations
Explore common operations like appending, deleting, and checking for element existence.


```java
-- Appending elements to an array
my_array := my_array MULTISET UNION Array_Type('Value5', 'Value6');

-- Deleting all elements from a nested table
my_table := Nested_Table_Type();

-- Checking if an element exists in an associative array
IF my_assoc_array.EXISTS(1) THEN
  -- Do something
END IF;
```

### Explanation:

In the realm of SQL collections, various operations enhance their functionality. To enrich an array, additional elements can be seamlessly appended, ensuring dynamic and evolving data storage. For a nested table, a clean slate is achieved by effortlessly deleting all existing elements, offering a quick and efficient reset. The power of the EXISTS function comes into play with associative arrays, providing a means to verify the existence of a specific index, adding a layer of control and precision to the data management process.

## Incorporating Collections in SQL Queries
Now, let's leverage collections in SQL queries for more flexible and dynamic operations.


```java
-- Using an array in a SELECT statement
SELECT * FROM employees WHERE employee_id IN (SELECT * FROM TABLE(my_array));

-- Using a nested table in a JOIN operation
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
JOIN TABLE(my_table) t ON e.department_id = t.COLUMN_VALUE;

-- Using an associative array in a WHERE clause
FOR i IN 1..my_assoc_array.LIMIT
LOOP
```

### Explanation:

In SQL queries, the array serves as a filtering mechanism within the SELECT statement, allowing for precise record retrieval. In JOIN operations, a nested table is harnessed to establish correlations between datasets, facilitating a more comprehensive analysis. Additionally, the versatility of associative arrays shines as they are seamlessly integrated into loops, enabling efficient iteration through their elements. This concise yet powerful utilization of collections enhances the flexibility and dynamism of SQL queries, showcasing their utility in various scenarios.

# Hacks:
- Try declaring your own collection and initializing it with values of your choice.
- Perform basic operations like adding, removing, and modifying elements.
- Create a SQL query using your collection to filter or join data.
