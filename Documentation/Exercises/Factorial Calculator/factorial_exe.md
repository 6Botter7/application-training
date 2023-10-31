# Factorial Calculator

## Background

A factorial is a mathematical function that is used to calculate the product of all positive integers from 1 up to a given positive integer n. It is denoted by "n!" and is read as "n factorial." The factorial of a non-negative integer n is defined as:

n! = n × (n - 1) × (n - 2) × ... × 2 × 1

Here are a few examples of factorials:

- 1! = 1
- 2! = 2 × 1 = 2
- 3! = 3 × 2 × 1 = 6
- 4! = 4 × 3 × 2 × 1 = 24
- 5! = 5 × 4 × 3 × 2 × 1 = 120

Factorials are often used in mathematics, especially in combinatorics and probability theory, to calculate the number of permutations or arrangements of a set of objects, among other applications. Factorials grow rapidly as the input value (n) increases, making them useful for solving problems involving permutations, combinations, and various counting tasks. For large values of n, factorials become very large numbers.

## The Challenge

Write a function which you can pass it a number as an parameter and the result is the factorial of that number. Please ensure you have test cases set up to test your function.

### Edge Cases

Factorials are well-defined for non-negative integers, and they follow a specific mathematical formula, as described earlier. However, there are a few edge cases and considerations to keep in mind when dealing with factorials:

1. Factorial of 0:
0! is defined to be 1. This is a special case, and it serves as the base case for many combinatorial and mathematical formulas.

1. Factorial of Negative Numbers:
Factorials are not defined for negative integers. The factorial function is only applicable to non-negative integers. It doesn't make sense to calculate the factorial of a negative number.

1. Factorial of Non-Integer Values:
Factorials are typically defined for integers. While it's possible to extend the concept to non-integer values using the gamma function, this goes beyond the standard definition of factorials.


### Bonus Round

Write a web component that allows a user to enter a number and then displays the factorial of that number. 
This web component should contain an input for entering the value the user would like to calculate the factorial of and a button to calculate the factorial, 
as well as a display area to show the result. The web component should be able to handle the edge cases described above.