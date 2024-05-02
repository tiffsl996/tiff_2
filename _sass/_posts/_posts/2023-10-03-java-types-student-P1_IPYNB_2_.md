---
comments: True
layout: post
title: U1 Data Types - Student P1
type: ccc
courses: {'csa': {'week': 7}}
author: collin, vinay
---

Java is used around the world to create applications and is one of the most popular coding languages. The reason Java is so popular is because of it's security and versatility provided by it's Object Oriented nature.

# 1.1 Basics

```
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
```

# 1.2 Variables and Data Types

## Variables

A Variable is a name given to a memory location that is holding the specified value. Here are some naming practices:

- Use camel case. likeThis.
- Don't start with a number.
- Spaces are not allowed.
- No reserved characters, like $, @, and &

***Java is a strongly typed language so you always need to declare the type of the variable.*** Variables can also be declared on their own or in the same line as when they are given a value:



```Java
int primitive5;

// primitive5 = 1    // python comparison

//Or...
int primitive6 = 1;
```

What are the greatest values integers and doubles can store?

## Primitive Data

Primitive data determines ***the size and type of information***. Primitive types are the most simple type of variable. They are simply store a short amount of raw data, and are not associated with another class.

Here are the different primitive types:
- byte: An 8-bit signed two's complement integer.
- short: A 16-bit signed two's complement integer.
- int: A 32-bit signed two's complement integer.
- long: A 64-bit signed two's complement integer.
- float: A single-precision 32-bit IEEE 754 floating point.
- double: A double-precision 64-bit IEEE 754 floating point.
- boolean: Stores either true or false.
- char: Stores a single character.

For this class you need to know:


```Java
int primitive1 = 0; //Whole number
double primitive2 = 1.1; //Decimal values. Floating point numbers.
boolean primitive3 = true; //Stores a true of false binary value
char primitive4 = 'a'; //Single character
```

| Data Type | Size (bits) |
|-----------|-------------|
| boolean   | 8           |
| int       | 32          |
| double    | 64          |
| char      | 16          |


```Java
public class GreatestValue {
    public static void main(String[] args) {
        System.out.println("Max Integer: " + Integer.MAX_VALUE);
        System.out.println("Min Integer: " + Integer.MIN_VALUE);
        System.out.println("Max Double: " + Double.MAX_VALUE);
        System.out.println("Min Double: " + Double.MIN_VALUE);

        // Integer Show Overflow
        int i = Integer.MAX_VALUE;
        i++;
        System.out.println("Integer Max + 1, Overflow: " + i);

        // Integer Show Underflow
        int j = Integer.MIN_VALUE;
        j--;
        System.out.println("Integer Min - 1, Underflow: " + j);

        // Integer Max + Min
        int k = Integer.MAX_VALUE + Integer.MIN_VALUE;
        System.out.println("Integer Max + Min: " + k);

    }
}
GreatestValue.main(null);
```

    Max Integer: 2147483647
    Min Integer: -2147483648
    Max Double: 1.7976931348623157E308
    Min Double: 4.9E-324
    Integer Max + 1, Overflow: -2147483648
    Integer Min - 1, Underflow: 2147483647
    Integer Max + Min: -1


## Reference Types
Some data types, like String, start with a capital letter. This is because they are not primiative, but are refrence types. They are called this because they refrence an object.
> "A reference type is a code object that is not stored directly where it is created, but that acts as a kind of pointer to a value stored elsewhere."




```Java
int integer = 7120; //"int" starts with a lowercase
String string = "abc"; //"String" starts with an uppercase, because it is an object and not a primitive type
```

## All Reference Types Reference Objects: String Example

String is the most common reference type. Here is an example of how a String type is really just referencing an object.


```Java
public class WorseString {
    private char[] charArray;

    public WorseString(String inputString) {
        this.charArray = inputString.toCharArray();
    }

    public String getChars() {
        return new String(this.charArray);
    }

    @Override
    public String toString() {
        return getChars();
    }
}
```


```Java
WorseString string = new WorseString("Hello, World!");
System.out.println(string);
```

    Hello, World!


Therefore, these two things are the same:


```Java
String string = "abc";
String string = new String("abc");
```

## Literal vs String literal

- Literal: Source code representation of a fixed value --- 3
- String Literal: In double quotes, a String --- "3"

# 1.3 Expressions and Assignment Statements

Calculations and evaluating arithmetic statements is important when coding to create algorithms and other code. Make sure you are doing arithmetic statements with int or double values and not String literals

## Operators

| Operator | Example Equation | Output | Use |
|----------|------------------|--------|------------|
| +        | 5 + 3            | 8      | Add numbers together. |
| -        | 5 - 3            | 2      | Subtract one number from another. |
| *        | 5 * 3            | 15     | Multiply numbers together. |
| /        | 5 / 3.0          | 1.67   | Divide one number by double. |
| /        | 5 / 3            | 1      | Divide one number by int. |
| %        | 5 % 3            | 2      | Find the remainder of a division operation. |


> Tip: In the AP subset, you only have to worry about operations with int values. However, it's good to know how to use arithmetic statements with doubles and other types. 

If you do an operation with two ints or doubles, it returns the respective type. If you mix types, Java returns the one with more bits, a double in this case.

## Modulus

Modulus gets the remainder if you were to divide two numbers. One common use is to find odd/even numbers. 

- 5 % 2 = 1
- 100 % 10 = 0

You try: 

- 8 % 3 = ?
- 4 % 1 = ?

Modulus joins multiplication and division in the order of operations

## Assignment Operator

= is called the assignment operator because it is used to assign a value to a variable. It is the last in the order of operations.

## Casting
Casting is converting one type of variable to another
ex: double to int


```Java
public class Casting {
    public static void main(String[] args) {
        double castTest = 3.2;
        System.out.println((int) castTest);
        castTest = 3.7;
        System.out.println((int) castTest);
        System.out.println((int) (castTest+0.5));

        int castTest2 = 3;
        System.out.println(castTest2/2);
        System.out.println(castTest2/2.0);
    }
}
Casting.main(null);
```

    3
    3
    4
    1
    1.5


What will this output?
castTest2 = 7;
System.out.println(castTest2/3);
System.out.println((int) (castTest2+0.5));


## Wrapper Classes

For many operations in Java, you need to have a class. Some examples are:
- **ArrayLists or HashMaps**
- If you require nullability (meaning the value could be null)
- Generics
- Methods that require objects as input

To accomplish this, we use a wrapper class. A wrapper class is essentially a class which 'wraps' the primitive type and makes it into an object rather than a primitive.

What is a downside of using wrapper classes? Why not always use them?

<spoiler>Increased memory usage</spoiler> 


```Java
//This code fails
ArrayList ArrayList = new ArrayList<int>();
```


    |   ArrayList ArrayList = new ArrayList<int>();

    unexpected type

      required: reference

      found:    int

    



```Java
//This code works
ArrayList ArrayList = new ArrayList<Integer>();
```

<img src="/VACTQ-Lesson/download.jfif" alt="wrapper" width="400"/>


```Java
public class Wrappers {
    int age;
    Integer ageWrapper;
    Double gpa;
    String gpaString;
    Double gpaDouble;

    public static void main(String[] args) {
        // make an instance of class
        Wrappers wrapper = new Wrappers();

        // work with int and Integer
        wrapper.ageWrapper = 17;
        wrapper.age = Integer.parseInt(wrapper.ageWrapper.toString());
        System.out.println("Age " + wrapper.age);
        System.out.println("Age Wrapper " + wrapper.ageWrapper);

        // work with String and Double
        wrapper.gpaString = "3.9";
        System.out.println("Wrapper GPA " + wrapper.gpaString);
        // string to double with calculation
        wrapper.gpaDouble = (Double.parseDouble(wrapper.gpaString) + 3.7) / 2;
        System.out.println("Double GPA " + wrapper.gpaDouble);
        wrapper.gpa = Double.parseDouble(wrapper.gpaDouble.toString());
        System.out.println("GPA " + wrapper.gpa);
    }
}
Wrappers.main(null);
```

    Age 17
    Age Wrapper 17
    Wrapper GPA 3.9
    Double GPA 3.8
    GPA 3.8


How do you complete this output so that it outputs an integer
String grade = "95";
?

How do you complete this output so that it outputs a double?
String grade = "95.5";
?

## Enums
What are they?
<spoiler>Enums are a type of data, which allows a variable to be a predetermined set of values</spoiler>

Uses
* Examples: days of the week

Things you can do with Enums
* ordinal
* switch
* for loops


```Java
public class EnumTest { 
    enum Units {
    PRIMITVE_DATA_TYPES,
    CLASSES,
    BOOLEAN,
    ITERATION,
    WRITING_CLASSES,
    ARRAY,
    ARRAY_LIST,
    TWO_DIMENSIONAL_ARRAY,
    INHERITANCE,
    RECURSION;
}
public static void main(String[] args) { 
  System.out.println("What is the third unit in AP CSA? Answer: " + Units.BOOLEAN);
  Units classUnit = Units.CLASSES;
  System.out.println("What is the unit is Classes in AP CSA? Answer: " + (classUnit.ordinal() + 1));
  Units selectedUnit = Units.ARRAY_LIST;

  switch(selectedUnit) {
    case PRIMITVE_DATA_TYPES:
      System.out.println("The selected unit is: primitive data types");
      break;
    case BOOLEAN:
       System.out.println("The selected unit is: boolean");
      break;
    case CLASSES:
      System.out.println("The selected unit is: classes");
      break;
    case ITERATION:
      System.out.println("The selected unit is: iteration");
      break;
    case WRITING_CLASSES:
      System.out.println("The selected unit is: writing classes");
      break;
    case ARRAY:
      System.out.println("The selected unit is: array");
      break;
    case ARRAY_LIST:
      System.out.println("The selected unit is: array list");
      break;
    case TWO_DIMENSIONAL_ARRAY:
      System.out.println("The selected unit is: 2d array");
      break;
    case INHERITANCE:
      System.out.println("The selected unit is: inheritance");
      break;
    case RECURSION:
      System.out.println("The selected unit is: recursion");
      break;
  }
  for (Units allUnits: Units.values()) {
    System.out.println(allUnits);
  }
} 
}
EnumTest.main(null);
```

# Homework

All of your homework is on this [form](https://forms.gle/M6FgxZwX1AnWdZmL9). (Link is https://forms.gle/M6FgxZwX1AnWdZmL9)
