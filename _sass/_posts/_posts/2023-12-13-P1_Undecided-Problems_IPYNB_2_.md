---
comments: True
layout: notebook
title: P1 Undecidable Problems
description: Team teach on Undecidable Problems
type: collab
author: Aashray, Akhil, Shuban, Kyle
toc: True
courses: {'csp': {'week': 16}}
---

### Decidable Problem

> A decidable problem is one that we can come to a yes/no answer given any input. An examle would be given a number determine if it is divisible by 3. We know that the algorithm below would provide the correct ouput every time.


```python
PRODECURE divisbleByThree(num)
    IF (num MOD 3 = 0) 
        RETURN true
    ELSE
        RETURN false
```

### Undecidable Problem

**Halting Problem**
> The halting problem is defined as: Given an arbitrary computer program with given inputs will the program stop or will it run forever? 


**Undecidable Problems**
> A problem where an algorithm cannot make a correct yes/no answer every time.

One way would be to test for an ending, but what if that ending is not easily found? What if it takes an unreasonable amount of time to find the ending? Is that because there is an ending or does one not exist?

You see where the problem comes in? This is an undecidable problem -- there is no algorithm which can always produce a yes/no answer for every input of the problem.

**Halting Problem in Computers**
Where may we have seen this in computers today? When a website or program takes too long to load it. It may never load, or it may just be taking a long time. Either way, after a certain time the computer decides the program should be stopped.

### Popcorn Hack #1
An algorithm can be used to solve an undecidable problem. **(True/False)**

### Popcorn Hack #2 
If a programmer encounters an undecidable problem, they can just use an alogirhtm that works most of the time. **(True/False)**

### Scenarios of Undecidable Problems in Computing
1. **Infinite Loop in Program Execution:**
   - When a program enters an infinite loop, it becomes undecidable whether it will eventually terminate or run indefinitely.

2. **Complex Conditional Statements:**
   - Programs with intricate conditional statements or complex control flow may pose undecidable scenarios, making it challenging to determine their termination.

3. **Non-Terminating Recursive Functions:**
   - Recursive functions that do not have a base case or have poorly defined termination conditions can result in undecidability regarding their halting behavior.

4. **Unknown Input Space Size:**
   - In cases where the size of the input space is unknown or unbounded, it becomes difficult to ascertain if a program will halt for all possible inputs.

5. **Multithreading and Concurrency:**
   - Undecidability may arise in concurrent programs where multiple threads interact, introducing intricate synchronization and communication challenges.



### Popcorn Hack 3
An algorithm exists that can always produce a yes/no answer for the halting problem. (True/False)
-

### Homework Question

Research and explain how modern  systems or  browsers deal with the aspects of the halting problem when a program takes too long to load. Provide examples of mechanisms or strategies implemented in real-world scenarios to manage unresponsive programs or prolonged loading times.
