# Fibonacci Sequences

## Background Information

The Fibonacci sequence is a famous mathematical sequence of numbers that starts with 0 and 1, and each subsequent number is the sum of the two preceding ones. In other words, it's defined recursively as follows:

- F(0) = 0
- F(1) = 1
- F(2) =  F(1) + F(0)
  - = 1 + 0
  - = 1
-  F(3) = F(2) + F(1)
  - = 1 + 1
  - = 2
- F(7) = F(7-1) + F(7-2)
        = F(6) + F(5)
        = 8 + 5 
        = 13
    - = F(6) = F(5) + F(4)
    - = F(5) = F(4) + F(3)

- F(n) = F(n-1) + F(n-2) for n > 1


So, the Fibonacci sequence begins as follows:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on...

The sequence continues infinitely, and each number is the sum of the two numbers that immediately precede it. 
This recursive nature is what gives rise to the unique and interesting properties of the Fibonacci sequence.

Here are some key points about the Fibonacci sequence:

1. Golden Ratio: As you move further along the sequence, the ratio of consecutive Fibonacci numbers approaches a constant value called the "golden ratio," 
denoted by the Greek letter φ (phi), which is approximately 1.6180339887. This ratio has many applications in art, architecture, nature, and mathematics.

1. Nature and Art: The Fibonacci sequence appears in various aspects of nature, such as the arrangement of leaves on a stem, 
the spirals in pinecones and sunflowers, and the branching of trees. It has also been used in art, as artists have incorporated Fibonacci proportions into their work.

1. Mathematical Properties: The Fibonacci sequence has interesting mathematical properties, and it is related to many mathematical concepts, 
including the Fibonacci numbers' closed-form expression, which involves powers of the golden ratio.

1. Recursive Nature: The Fibonacci sequence is defined recursively, making it a common subject of study in mathematics and computer science. 
Computing Fibonacci numbers can be done using recursion or more efficient methods like dynamic programming.

1. Applications: The sequence has practical applications in various fields, including computer science (e.g., in algorithms and data structures), 
finance (e.g., in modeling interest rates and investment strategies), and even in music and art for creating aesthetically pleasing compositions and designs.

The Fibonacci sequence is a simple yet intriguing mathematical concept that has captured the imagination of people for centuries due to its unique properties 
and its presence in various aspects of the natural and mathematical world.

## The Challenge

Write a function that takes in an integer n and returns the nth Fibonacci number.

### Edge Cases

Non-Integer Indices: The Fibonacci sequence is defined for integer indices. Extending it to non-integer indices would involve using a formula involving real numbers, which is beyond the standard definition of the sequence.


## Bonus Round

Write a web component that displays the Fibonacci sequence up to a given index n i.e. if n = 5, 
the component should display the first 5 numbers of the Fibonacci sequence (e.g. 3, 2, 1, 1, 0).
Your component should consist of an input, a button, and a results area.

HINT: You could make use of multiple recursive functions to solve this problem.