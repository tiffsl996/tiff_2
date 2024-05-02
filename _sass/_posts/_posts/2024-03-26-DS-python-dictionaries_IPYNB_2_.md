---
layout: post
title: Learning Hashmaps using Python dictionaries
description: Data Structures topic - Hashmaps, Sets, Hash Tables, Hashing and Collisions
courses: {'csp': {'week': 28}}
type: ccc
---

## What is a Hashtable/Hashmap?

> A hashtable is a data structure that with a collection of key-value pairs, where each key maps to a value, and the keys must be unique and hashable.

- In Python there is a built in hashtable known as a _______________.

> The primary purpose of a hashtable is to provide efficient lookup, insertion, and deletion operations. When an element is to be inserted into the hashtable, a hash function is used to map the key to a specific index in the underlying array that is used to store the key-value pairs. The value is then stored at that index. When searching for a value, the hash function is used again to find the index where the value is stored.

> The key advantage of a hashtable over other data structures like arrays and linked lists is its average-case time complexity for lookup, insertion, and deletion operations.

- The typical time complexity of a hashtable is _______________. 


## What is Hashing and Collision?

> Hashing is the process of mapping a given key to a value in a hash table or hashmap, using a hash function. The hash function takes the key as input and produces a hash value or hash code, which is then used to determine the index in the underlying array where the value is stored. The purpose of hashing is to provide a quick and efficient way to access data, by eliminating the need to search through an entire data structure to find a value.

> However, it is possible for two different keys to map to the same hash value, resulting in a collision. When a collision occurs, there are different ways to resolve it, depending on the collision resolution strategy used.

> Python's dictionary implementation is optimized to handle collisions efficiently, and the performance of the dictionary is generally very good, even in the presence of collisions. However, if the number of collisions is very high, the performance of the dictionary can degrade, so it is important to choose a good hash function that minimizes collisions when designing a Python dictionary.

## What is a Set?


```python
# Creating a set using set() function
my_set = set([1, 2, 3, 2, 1])
print(my_set)  

# What do you notice in the output?
#
#

# Why do you think Sets are in the same tech talk as Hashmaps/Hashtables?
#
#
```

## Dictionary Example

Below are just some basic features of a dictionary. As always, documentation is always the main source for all the full capablilties. 


```python
# Creating a dictionary with information about the album "Lover"
lover_album = {
    "title": "Lover",
    "artist": "Taylor Swift",
    "year": 2019,
    "genre": ["Pop", "Synth-pop"],
    "tracks": {
        1: "I Forgot That You Existed",
        2: "Cruel Summer",
        3: "Lover",
        4: "The Man",
        5: "The Archer",
        6: "I Think He Knows",
        7: "Miss Americana & The Heartbreak Prince",
        8: "Paper Rings",
        9: "Cornelia Street",
        10: "Death By A Thousand Cuts",
        11: "London Boy",
        12: "Soon You'll Get Better (feat. Dixie Chicks)",
        13: "False God",
        14: "You Need To Calm Down",
        15: "Afterglow",
        16: "Me! (feat. Brendon Urie of Panic! At The Disco)",
        17: "It's Nice To Have A Friend",
        18: "Daylight"
    }
}

# What data structures do you see?
#
#

# Printing the dictionary
print(lover_album)
```


```python
# Retrieve value from dictionary with key
print(lover_album.get('tracks'))
# or
print(lover_album['tracks'])
```


```python
# Retrieve value from a dictionary inside a dictionary
print(lover_album.get('tracks')[4])
# or
print(lover_album['tracks'][4])
```


```python
# adding a value with a new key
lover_album["producer"] = ['Taylor Swift', 'Jack Antonoff', 'Joel Little', 'Taylor Swift', 'Louis Bell', 'Frank Dukes']

# What can you change to make sure there are no duplicate producers?
#
#

# Printing the dictionary
print(lover_album)
```


```python
# Adding a an key-value pair to an existing key 
lover_album["tracks"].update({19: "All Of The Girls You Loved Before"})

# How would add an additional genre to the dictionary, like electropop? 
# 
# 

# Printing the dictionary
print(lover_album)
```


```python
# Print lover_album in more readable format
for k,v in lover_album.items(): # iterate using a for loop for key and value
    print(str(k) + ": " + str(v))

# Write your own code to print tracks in readable format
#
#
```


```python
# Using conditionals to retrieve a random song
def search():
    search = input("What would you like to know about the album?")
    if lover_album.get(search.lower()) == None:
        print("Invalid Search")
    else:
        print(lover_album.get(search.lower()))

search()

# This is a very basic code segment, how can you improve upon this code?
#
#
```

## Hacks

- Answer *ALL* questions in the code segments
- Create a diagram or comparison illustration (Canva).
    - What are the pro and cons of using this data structure? 
    - Dictionary vs List    
- Expand upon the code given to you, possible improvements in comments
- Build your own album showing features of a python dictionary

- Former teacher Mr. Yeung's, a swifty said: Justify your favorite Taylor Swift song, answer may effect seed
