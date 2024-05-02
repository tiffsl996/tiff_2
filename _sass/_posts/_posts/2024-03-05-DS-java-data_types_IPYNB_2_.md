---
title: Data Types
comments: True
layout: post
description: This is a deeper review on data types, wrapper classes and classes specific in preparation for using Data Structures.
author: John Mortensen
type: ccc
courses: {'csa': {'week': 25}}
---

## Data Types in Java
Before discussing ***Data Structures*** it is important to review ***Data Types*** and the AP ***Methods and Control Structures*** topic.  To begin this discussion I asked ChatGPT, ***"what are Java data types"*** and was really happy with the answer ...

- In Java, ***data types are used to define the type of data that a variable can hold***. There are two main categories of data types in Java: primitive data types and reference data types.

    - Primitive data types:
        - byte: 8-bit signed integer (-128 to 127)
        - short: 16-bit signed integer (-32,768 to 32,767)
        - int: 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
        - long: 64-bit signed integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
        - float: 32-bit floating-point number (1.4e-45 to 3.4e+38)
        - double: 64-bit floating-point number (4.9e-324 to 1.8e+308)
        - boolean: true or false
        - char: 16-bit Unicode character (0 to 65,535)

    - Reference data types:
        - Objects: instances of classes
        - Arrays: a collection of data of the same type.

- ***Primitive data types are stored directly in memory***, whereas ***reference data types are stored as a reference to a memory location*** where the actual data is stored.


This led to follow up question, ***"what about Java Wrapper data types"*** and this answer even corrected my language to say ***wrapper classes*** ...

- Java Wrapper classes are classes that provide a way to use primitive data types as objects. ***They are called wrapper classes because they "wrap" the primitive data types into an object***.

    - There are eight wrapper classes in Java, each corresponding to one of the primitive data types:
    - Byte: represents a byte value
    - Short: represents a short value
    - Integer: represents an int value
    - Long: represents a long value
    - Float: represents a float value
    - Double: represents a double value
    - Boolean: represents a boolean value
    - Character: represents a char value

![](images/java_int_vs_integer.jpeg)

- ***Wrapper classes are often used when working with collections*** or other APIs that require objects rather than primitive data types. They also provide methods for converting between primitive data types and their corresponding object types, as well as methods for performing operations on the wrapped values.

As an addendum to ChatGPT definition of a Wrapper Class, it is critical to understand assignments.  When you ***assign a value*** to a wrapper class object, Java automatically ***creates a new instance*** of the wrapper class and assigns the value to it. Thus, every assignment is a new object!!! This process is called ***Auto-boxing***. For example, to assign an integer value to an Integer object ...

```java
// Both of these create new objects
Integer n = 5; // Auto-boxing, Integer n = new Integer(5);
n += 5;  // Auto-boxing, Integer n = new Integer(n + 5);  
```

For clarification, for my students I asked, "define reference data types".   This added a purpose to the name ***reference*** ...

- In Java, ***reference data types are data types that hold references or memory addresses that point to objects.*** These data types do not actually contain the data they refer to, but instead, store a reference to the memory location where the data is stored.  Area in blue is called stack, variables local to the method; area in green is called heap or area used to store objects.

![](images/java_primitive_reference.jpeg)

- ***Reference data types are used to store complex data structures*** such as objects and arrays. Objects are instances of classes that encapsulate data and behavior, while arrays are collections of data of the same type.

- When a reference data type variable is declared, memory is allocated for the reference variable itself, but not for the object or array it refers to. Memory for the object or array is allocated separately using the "new" keyword, and the reference variable is assigned the memory address of the object or array.

- *****Reference data types are passed by reference***, which means that when a reference variable is passed as a method argument, the method receives a copy of the reference, but both the original reference and the copy point to the same object in memory. ***This allows methods to modify the object or array that the reference points to***.

For completeness on this discussion I asked, ***"define primitive data types"*** ...

- In Java, primitive data types are the basic building blocks of data that can hold a single value of a specific type. They are called ***"primitive" because they are not objects*** and do not have any methods or properties like objects do.

- There are eight primitive data types in Java:
    - byte: 8-bit signed integer (-128 to 127)
    - short: 16-bit signed integer (-32,768 to 32,767)
    - int: 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
    - long: 64-bit signed integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
    - float: 32-bit floating-point number
    - double: 64-bit floating-point number
    - boolean: true or false
    - char: 16-bit Unicode character (0 to 65,535)

- ***Primitive data types are stored directly in memory and are passed by value***, which means that when a primitive data type variable is passed as a method argument, the method receives a copy of the value, not a reference to the original variable. This also means that modifying the value of a primitive data type variable inside a method does not affect the original value of the variable outside the method.


## Data Types behaviors
The ***AP exam will have questions about "primitives", "wrapper classes", and "reference"*** and how they work in relation to "pass by value", and "pass by reference".

### A primitive Data Type "int" showing pass by value
The primitive ***int*** data type. This code shows behavior as it is passed to method and the value is changed.


```java
public class IntByValue {
    
    public static void changeInt(int n) {
        System.out.println("In changeInt method");
        System.out.println("\tBefore n += 10: n = " + n); // prints 5
        n = n += 10;
        System.out.println("\tAfter n += 10: n = " + n); // prints 10
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("Main method before changeInt(n): n = " + n); // prints 5
        changeInt(n);
        System.out.println("Main method after changeInt(n): n = " + n); // still prints 5
    }
}
IntByValue.main(null);
```

### The wrapper Integer class (by value or reference?)
An object wrapper class ***Integer*** for the primitive ***int*** data type. When an Integer object is passed as a parameter to a method, the object is passed as a class.  How does assignment behave in this example?  By value or by reference?  Observe the hashCode(), we will compare it to the next example.


```java
public class IntegerByValueOrReference {
    
    public static void changeInteger(Integer n) {
        System.out.println("In changeInteger method");
        System.out.println("\tBefore change: n = " + 
                            n + // prints 5
                            " hash code = " + 
                            n.hashCode()); 

        n += 10;  // behind the scenes, this is:  n = new Integer(n+10)
        
        System.out.println("\tAfter change: n = " + 
                            n + // prints 15
                            " hash code = " + 
                            n.hashCode()); 
    }

    public static void main(String[] args) {
        Integer n = 5;
        System.out.println("Main method before changeInteger(n): n = " + 
                            n + // prints 5
                            " hash code = " + 
                            n.hashCode()); 

        changeInteger(n);
        
        System.out.println("Main method after changeInteger(n): n = " + 
                            n +  // now does it print 15?
                            " hash code = " + 
                            n.hashCode());     
    }
}
IntegerByValueOrReference.main(null);
```

### The class AtomicInteger
A class ***AtomicInteger*** for the primitive ***int*** data type. When an AtomicInteger object is passed as a parameter to a method, the object is passed as a Java class.  The only way to change the data with a class is to use the setters and getters of the Object.  The hashCode() show a unique object number and it maintains consistency through as the referenced data being changed by the setter.


```java
import java.util.concurrent.atomic.AtomicInteger;

public class PassByReference {
    
    public static void changeAtomicInteger(AtomicInteger n) {
        System.out.println("In changeAtomicInteger method");
        System.out.println("\tBefore change: n = " + 
                            n + // prints 5
                            " hash code = " + 
                            n.hashCode()); 
        n.set(n.get() + 10);  // at this point, we are clearly working with reference data type
        System.out.println("\tAfter change: n = " + 
                            n + // prints 15
                            " hash code = " + 
                            n.hashCode()); 
}

    public static void main(String[] args) {
        AtomicInteger n = new AtomicInteger(5); // unlike conventional wrapper class, this requires new
        System.out.println("Main method before changeAtomicInteger(n): n = " + 
                            n + // prints 5
                            " hash code = " + 
                            n.hashCode()); 
        changeAtomicInteger(n);
        System.out.println("Main method after changeAtomicInteger(n): n = " + 
                            n +  // now does it print 15?
                            " hash code = " + 
                            n.hashCode()); 
    }
}
PassByReference.main(null);
```

### Swap by IntByReference
Behind the scenes you need to swap values.  This add a little purpose by only swapping if values are out of LowHigh order.  This is a ***Methods and Control Structures*** type of problem!!!

What are some elements in this Class that are important to AP CSA exam?  
Add a Setter to this Class and make modifications to code.


```java
public class IntByReference {  // this is a class that wraps an int value
    private int value; // this is the wrapped value

    public IntByReference(Integer value) { // this is the constructor
        this.value = value; // the value is stored as an instance variable in the object
    }

    public String toString() {  // this method returns a string representation of the object
        return (String.format("%d", this.value)); // in this case, it returns the value of the integer
    }

    public void swapToLowHighOrder(IntByReference i) { // conventional swap method
        if (this.value > i.value) { // only swap if vaue of this object is greater
            int tmp = this.value; // observe, we are swapping the value of the objects
            this.value = i.value; // not the objects themselves
            i.value = tmp;
        }
    }

    public static void swapper(int n0, int n1) {
        IntByReference a = new IntByReference(n0);
        IntByReference b = new IntByReference(n1);
        System.out.println("Before: " + a + " " + b);
        a.swapToLowHighOrder(b);  // conditionally build swap method to change values of a, b
        System.out.println("After: " + a + " " + b);
        System.out.println();
    }

    public static void main(String[] ags) {
        IntByReference.swapper(21, 16);
        IntByReference.swapper(16, 21);
        IntByReference.swapper(16, -1);
    }

}
IntByReference.main(null);
```

## Methods and Control Structures in Java  [On-Demand Reviews](https://apclassroom.collegeboard.org/8/home?highlightElement=sxjnjs7isx&unit=-1)
> Authority on testing should be considered AP Classroom.  There are a lot of sources out there, some drift according to their bias, just like me drifting toward PBL :).  The videos link above goes over test and format, 2023 and 2022 previews.   This video covers a lot of the fundamentals on testing.

- AP Test Format
![](images/ap_format.png)

- AP FRQ Types
![](images/ap_frq_types.png)

