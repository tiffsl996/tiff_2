---
comments: True
layout: post
title: MCQ 2020 Frequently Missed Questions
description: Indiviual explanation on each of the 10 most missed questions.
type: collab
courses: {'csp': {'week': 20}}
---

## 4. Cause of overflow Error (1D, binary math) - Tara Sehdave

In a certain computer program, two positive integers are added together, resulting in an overflow error. Which of the following best explains why the error occurs?

Responses

A
The program attempted to perform an operation that is considered an undecidable problem.

B
The precision of the result is limited due to the constraints of using a floating-point representation.

C
The program can only use a fixed number of bits to represent integers; the computed sum is greater than the maximum representable value.

D
The program cannot represent integers; the integers are converted into decimal approximations, leading to rounding errors.

The correct answer is C because...

- Overflow error occurs in a computer program when adding two positive integers.
- The program uses a fixed number of bits to represent integers.  In Python and other programming languages, an integer occupies four bytes, or 32 bits.
- The sum of the two integers exceeds the maximum representable value within the fixed number of bits.  In 32 bits, the maximum positive decimal number is 4,294,967,295.
- Due to this limitation, the program cannot accurately represent the result of the addition.  In 32 bits, 4,294,967,295 + 1 = 0
- As a result, an overflow error is triggered to indicate that the computed sum is beyond the representable range.

Add Python Jupyter Notebook example in Python

## 5. Inputs to Logic Circuit (2D, binary logic) - Hanlun Li

The diagram below shows a circuit composed of three logic gates. Each gate takes two inputs and produces a single output. For which of the following input values will the circuit have an output of true ?



## 11. Color represented by binary Triplet (2D, binary) - Torin Wolff

A color in a computing application is represented by an RGB triplet that describes the amount of red, green, and blue, respectively, used to create the desired color. A selection of colors and their corresponding RGB triplets are shown in the following table. Each value is represented in decimal (base 10).

According to information in the table, what color is represented by the binary RGB triplet (11111111, 11111111, 11110000) ?

#### What is a binary RGB triplet?
A binary triplet is a set of three binary numbers. Binary numbers are numbers that are represented by a series of 1's and 0's. Binary numbers are used in computers because they are easy to represent with electrical signals. A binary RGB triplet is a set of three binary numbers that are used to represent a color, from example question above...

    Red Color 11111111 

    Green Color 11111111

    Blue Color 11110000

The numbers are represented in binary because it is easy for engineers to correlate bits to electrical signals for color. The numbers are represented in a triplet to distinguish red, green, and blue.

According to information in the table, what bit or bits would you change to reduce the green color by approximately 1/2 (11111111, 11111111, 11110000) ?

Show the binary numbers after reducing green color by approximately 1/2 in Hexadecimal and Decimal.

#### How do you convert a binary triplet to a decimal number?
To convert a binary string to a decimal number you need to multiply each digit by its place value. For example, if you have the binary string 1010 you would multiply the first digit by 2^3, the second digit by 2^2, the third digit by 2^1, and the fourth digit by 2^0. This would give you the decimal number 10. To convert a binary triplet to a decimal number you need to multiply each digit by its place value. For example, if you have the binary triplet (01101110, 11111111, 10010110) you would multiply the first digit by 2^7, the second digit by 2^6, the third digit by 2^5, the fourth digit by 2^4, the fifth digit by 2^3, the sixth digit by 2^2, the seventh digit by 2^1, and the eighth digit by 2^0. This would give you the decimal number 110, 255, 150.

(0 * 2^7) + (1 * 2^6) + (1 * 2^5) + (0 * 2^4) + (1 * 2^3) + (1 * 2^2) + (1 * 2^1) + (0 * 2^0)

= 0 + 64 + 32 + 0 + 8 + 4 + 2 + 0

= 110

Add Python Jupyter Notebook examples to assist in questions and conversions. 




## 15. Compare output of program a and b (1D, program loop) - Arnav Nadar

Which of the following best compares the values displayed by programs A and B?



## 23. Flowchart to set available (1D, algorithmic expression) - Tanujsai Nimmagadda

A flowchart is a way to visually represent an algorithm. The flowchart below is used by an application to set the Boolean variable available to true under certain conditions. The flowchart uses the Boolean variable weekday and the integer variable miles.

Which of the following statements is equivalent to the algorithm in the flowchart?



    - Within this diagram, the circle functions are the start and end of the program. The rectangular boxes are the output and the diamonds are the deciding booleans. 
    - Using these functions, the program comes to its output of either available being true or false. The program must go through the requirements to get the value true, which the problem asks of us, the variable weekday equals true and the variable miles should be less than 20. These both must be true and cannot result from one or the other happening. 

The answer was meant to be D.

<img src="images/CBq50.PNG" height="550px" width=7550px"/>


## 50. Reasonable time algorithms (1D, Big O) - Vance Reynolds 

Consider the following algorithms. Each algorithm operates on a list containing n elements, where n is a very large integer.

An algorithm that accesses each element in the list twice
An algorithm that accesses each element in the list n times
An algorithm that accesses only the first 10 elements in the list, regardless of the size of the list
Which of the algorithms run in reasonable time?

Answer D is correct because in order for an algorithm to run in reasonable time, it must take a number of steps less than or equal to a polynomial function. Algorithm I accesses elements times (twice for each of n elements), which is considered in time. Algorithm II accesses elements (n times for each of n elements), which is in reasonable time. Algorithm III accesses 10 elements, which is in reasonable time.

Simple Explainations:

Unreasonable time: Algorithms with exponential or factorial efficiencies are examples of algorithms that run in an unreasonable amount of time.

Reasonable time: Algorithms with a polynomial efficiency or lower (constant, linear, square, cube, etc.) are said to run in a reasonable amount of time.

## 56. Compare execution times of tow version (1D analysis) - Kayden Le

An online game collects data about each player’s performance in the game. A program is used to analyze the data to make predictions about how players will perform in a new version of the game.

The procedure GetPrediction (idNum) returns a predicted score for the player with ID number idNum. Assume that all predicted scores are positive. The GetPrediction procedure takes approximately 1 minute to return a result. All other operations happen nearly instantaneously.

Two versions of the program are shown below.

Which of the following best compares the execution times of the two versions of the program?

Version I calls the GetPrediction procedure once for each element of idList, or four times total. Since each call requires 1 minute of execution time, version I requires approximately 4 minutes to execute. Version II calls the GetPrediction procedure twice for each element of idList, and then again in the final display statement. This results in the procedure being called nine times, requiring approximately 9 minutes of execution time.

Both versions aim to achieve the same result, which is to find and display the highest predicted score among the players in idList. However, Version I directly updates the highest score (topScore), while Version II updates the ID of the player with the highest score (topID) and then retrieves the predicted score for that player. Version II essentially avoids calling GetPrediction multiple times for the same ID.

The answer: D - Version II requires approximately 5 more minutes to execute than version I



```python
Version I

topScore 
 0

idList 
 [1298702, 1356846, 8848491, 8675309]

FOR EACH id IN idList

{

score 
 GetPrediction (id)

IF (score > topScore)

{

topScore 
 score

}

}

DISPLAY (topScore)

Version II

idList 
 [1298702, 1356846, 8848491, 8675309]

topID 
 idList[1]

FOR EACH id IN idList

{

IF (GetPrediction (id) > GetPrediction (topID))

{

topID 
 id

}

}

DISPLAY (GetPrediction (topID)) 
```

## 64. Error with multiplication using repeated addition (4C algorithms and programs) - Abdullah Khanani

The following procedure is intended to return the value of x times y, where x and y are integers. Multiplication is implemented using repeated additions.

For which of the following procedure calls does the procedure NOT return the intended value?

Select two answers.

## 65. Call to concat and substring (4B string operations) - Ameer Hussain

A program contains the following procedures for string manipulation.

Which of the following can be used to store the string "jackalope" in the string variable animal ?

Select two answers.

## 67. Error in numOccurrences procedure (4C algorithms and programs)

The procedure NumOccurrences is intended to count and return the number of times targetWord appears in the list wordList. The procedure does not work as intended.

For which of the following code segments will the call to NumOccurrences NOT return the intended value?

Select two answers.  
