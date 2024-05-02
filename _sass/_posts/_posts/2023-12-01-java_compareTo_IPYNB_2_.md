---
layout: post
title: Collectable Lesson
description: Usage of compareTo and toString in Collectable framework.
courses: {'csa': {'week': 14}}
type: ccc
---

## POM File Dependencies
This project requires Jackson for JSON building.  The loadFromPOM cell must be oaded before proceeding.


```Java
%%loadFromPOM
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.12.4</version> <!-- Use the latest version -->
</dependency>
```

## Abstract Collectable

Establish class heirarchy for Collectable.  The class is used to manage a catalog of items.

- abstract class required child definitions in order to instantiate
- abstract methods help enforce definitions
- implements defines method compareTo to enable things like sorting


```Java
import com.fasterxml.jackson.databind.ObjectMapper;


/* This is parent class, objectives...
   - Push functionality into parent Class 
   - Enforce consistent definition of child Class

 */
public abstract class Collectable implements Comparable <Collectable> {
	public final String masterType = "Collectable";
	private String type;	// extender should define their data type

	/* Enumerated interface of key types 
	 * an interface named KeyTypes is declared with a single method name(). 
	 * the Collectable class contains an abstract method getKey(), 
	 * which must be implemented by its subclasses. 
	 * must provide a method that returns an object implementing the KeyTypes interface.
	*/ 
	public interface KeyTypes {
		String name();
	}
	protected abstract KeyTypes getKey();
	protected abstract KeyTypes getSortKey();
	protected abstract String getSortKeyValue();

	// getter
	public String getMasterType() {
		return masterType;
	}

	// getter
	public String getType() {
		return type;
	}

	// setter
	public void setType(String type) {
		this.type = type;
	}
	
	/* This method is used to build JSON using Jackson
	 * Object mapper add this attributes to JSON
	 * Exeption returns empty JSON
	*/  
    protected String toJson() {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(this);
        } catch (Exception e) {
            e.printStackTrace();
            return "{}";
        }
    }

	/* 'Collectable' requires toString override for compareTo
	 * JSON data is used and formed with keys: key, data 
	 */
	@Override
	public String toString()
	{
		return "{"
			+ "\"key\":\"" + getSortKeyValue() + "\","
			+ "\"data\":\"" + toJson() + 
			"}";
	}

	/* This method is used to compare toString of objects
	 * the compareTo method is implemented from the Comparable interface
	 * it compares the string representations of two Collectable objects 
	 * using their toString methods
	*/
	public int compareTo(Collectable obj) {
		return this.toString().compareTo(obj.toString());
	}


	/* This method outputs a Collectable Array to console
	 * the object uses toString to show contents
	*/
	public static void print(Collectable[] objs) {
		// print "Collectable: Objects'
		for(Object o : objs)	// observe that type is Opaque
			System.out.println(o);

		System.out.println();
	}
}
```


```Java
/*
 * Pet class extends Collectable and defines abstract methods
 */
public class Pet extends Collectable {
	// Class data
	public enum KeyType implements KeyTypes {title, name, age, color, catalog}
	private static KeyTypes key = KeyType.title;  // static initializer
	private static KeyTypes sortKey = KeyType.title;
	public static void setOrder(KeyTypes key) { Pet.key = key; }
	public static void sort(Collectable[] c, KeyType key) { 
		Pet.key = key; 
		Pet.sortKey = key; 
		Arrays.sort(c); 
		Pet.key = KeyType.title; 
	}

	// Instance data
	private final String name;
	private final int age;
	private final String color;

	/* constructor
	 *
	 */
	public Pet(String name, int age, String color)
	{
		super.setType("Pet");
		this.name = name;
		this.age = age;
		this.color = color;
	}

	/* 'Collectable' requires getKey to help enforce KeyTypes usage */
	@Override
	protected KeyTypes getKey() { return Pet.key; }
	@Override
	protected KeyTypes getSortKey() { return Pet.sortKey; }

	/* Getters / Accessors
	 * 
	 */
	public String getName() { return this.name; }
	public int getAge() { return this.age; }
	public String getColor() { return this.color; }

	/* 'Collectable' requires getSortKeyValue override
	 * provides key based off of Static Key setting
	 */
	protected String getSortKeyValue() {
        if (KeyType.name.equals(getSortKey())) {
            return getName();
        } else if (KeyType.age.equals(getSortKey())) {
			String zeroPad = "00" + getAge();
            return zeroPad.substring(zeroPad.length() - 2);
        } else if (KeyType.color.equals(getSortKey())) {
            return getColor();
		} else if (KeyType.catalog.equals(getSortKey())) {
			return getName() + " " + getColor() + " " + getAge();
        }
        // Default is Type
        return getType();
    }

	// Test data initializer
	public static Pet[] pets() {
		return new Pet[]{
				new Pet("Lion", 8, "Gold"),
				new Pet("Pig", 3, "Pink"),
				new Pet("Robin", 7, "Red"),
				new Pet("Cat", 10, "Black"),
				new Pet("Kitty", 1, "Calico"),
				new Pet("Dog", 14, "Brown")
		};
	}
	
	/* main to test Pet class
	 * 
	 */
	public static void main(String[] args)
	{
		// print with title
		Pet.setOrder(KeyType.title);
		Collectable[] pets = Pet.pets();

		for (Pet.KeyType key : Pet.KeyType.values()) {
			Pet.sort(pets, key);
			Collectable.print(pets);
		}
	}

}
Pet.main(null);
```


```Java
/*
 * Car class extends Collectable and defines abstract methods
 */
public class Car extends Collectable {
	// Class data
	public enum KeyType implements KeyTypes {title, make, model, year, color, catalog}
	private static KeyTypes key = KeyType.title;  // static initializer
	private static KeyTypes sortKey = KeyType.title;
	public static void setOrder(KeyTypes key) { Car.key = key; }
	public static void sort(Collectable[] c, KeyType key) { 
		Car.key = key; 
		Car.sortKey = key; 
		Arrays.sort(c); 
		Car.key = KeyType.title; 
	}

	// Instance data
    private final String make;
    private final String model;
	private final int year;
	private final String color;

	/* constructor
	 *
	 */
	public Car(String make, String model, int year, String color)
	{
		super.setType("Car");
		this.make = make;
        this.model = model;
		this.year = year;
		this.color = color;
	}

	/* 'Collectable' requires getKey to help enforce KeyTypes usage */
	@Override
	protected KeyTypes getKey() { return Car.key; }
	@Override
	protected KeyTypes getSortKey() { return Car.sortKey; }

	/* Getters / Accessors
	 * 
	 */
	public String getMake() { return this.make; }
    public String getModel() { return this.model; }
	public int getYear() { return this.year; }
	public String getColor() { return this.color; }

	/* 'Collectable' requires getSortKeyValue override
	 * toString provides data based off of Static Key setting
	 */
	@Override
    protected String getSortKeyValue() {
        if (KeyType.make.equals(getSortKey())) {
            return getMake();
        } else if (KeyType.model.equals(getSortKey())) {
            return getModel();
        } else if (KeyType.year.equals(getSortKey())) {
            return String.valueOf(getYear());
        } else if (KeyType.color.equals(getSortKey())) {
            return getColor();
		} else if (KeyType.catalog.equals(getSortKey())) {
			return getMake() + " " + getModel() + " " + getYear();
        }
        // Default is Type
        return getType();
    }

	// Test data initializer
	public static Car[] cars() {
		return new Car[]{
				new Car("Ford", "Fusion", 2015, "Guard"),
				new Car("Ford", "Excursion", 2003, "Green"),
                new Car("Ford", "F-350", 1997, "Green"),
                new Car("Cadillac", "Boughman", 1969, "Black"),
                new Car("Acura", "RL", 2006, "Silver")
		};
	}
	
	/* main to test Car class
	 * 
	 */
	public static void main(String[] args)
	{
		// print with title
		Car.setOrder(KeyType.title);
		Collectable[] cars = Car.cars();

		for (Car.KeyType key : Car.KeyType.values()) {
			Car.sort(cars, key);
			Collectable.print(cars);
		}
	}

}
Car.main(null);
```


```Java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CollectionExample {
	
    public static void main(String[] args) {
        // use List with dynamic size capabilities for combining Arrays
        List<Collectable> collection = new ArrayList<>();

        // use List.of to add Arrays to collection List
        collection.addAll(List.of(Pet.pets()));
        collection.addAll(List.of(Car.cars()));

        // set Pet and Car to catalog ordering 
        Pet.setOrder(Pet.KeyType.catalog);
        Car.setOrder(Car.KeyType.catalog);

        // Sort will order based on compareTo
        Collections.sort(collection);

        // Collectable object will output according to toString 
        for (Collectable c : collection) {
            System.out.println(c);
        }
    }
}
CollectionExample.main(null);

```

## Hacks
Build your own Collectable class(es), combine them, and sort them.
