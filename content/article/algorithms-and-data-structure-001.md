---
title: "Algorithms Analysis"
type: "article"
date: 2019-12-20T12:08:18+07:00
description: "Algorithms a"
keywords: ["Algorithms Analysis"]
subjects: ["backend"]
image: "/common/no-image-available.jpg"
---

### The most important properties of an algorithm are:

1. **Correctness**: The algorithm should be correct. It should be able to process all the given
inputs and provide correct output.

2. **Efficiency:** The algorithm should be efficient in solving problems. Efficiency is measured in
two parameters. First is Time-Complexity, how quick result is provided by an algorithm.
And the second is Space-Complexity, how much RAM that an algorithm is going to consume
to give desired result.

- *Time-Complexity* is represented by function T(n) - time versus the input size n.

- *Space-Complexity* is represented by function S(n) - memory used versus the input size n

### Asymptotic analysis

Asymptotic analysis is used to compare the efficiency of algorithm independently of any
particular data set or programming language.

We are generally interested in the order of growth of some algorithm and not interested in the
exact time required for running an algorithm. This time is also called Asymptotic-running time.

### Big-O Notation

Definition: “f(n) is big-O of g(n)” or f(n) = O(g(n)), if there are two +ve constants c and n0 such
that

f(n) ≤ c g(n) for all n ≥ n0,In other words, c g(n) is an upper bound for f(n) for all n ≥ n0

The function f(n) growth is slower than c g(n)

We can simply say that after a sufficient large value of input N the (c.g(n)) will always be
greater than f(n).

> n<sup>2</sup> + n = O(n<sup>2</sup>)

### Omega-Ω Notation

Definition: “f(n) is omega of g(n).” or f(n) = Ω(g(n)) if there are two +ve constants c and n0
such that

c g(n) ≤ f(n) for all n ≥ n0

In other words, c g(n) is lower bound for f(n)

Function f(n) growth is faster than c g(n)

Find relationship of f(n) = nc and g(n) = cn

> f(n) = Ω(g(n))

### Complexity analysis of algorithms

1. **Worst Case complexity**: It is the complexity of solving the problem for the worst input of
size n. It provides the upper bound for the algorithm. This is the most common analysis used.

2. **Average Case complexity**: It is the complexity of solving the problem on an average. We
calculate the time for all the possible inputs and then take an average of it.

3. **Best Case complexity**: It is the complexity of solving the problem for the best input of size
n.

### Time Complexity Order

A list of commonly occurring algorithm Time Complexity in increasing order:

- Constant O(1)
- Logarithmic O(log n)
- Linear O(n)
- N-LogN O(n log n)
- Quadratic O(n2)
- Polynomial O(nc) c is a constant & c>1
- Exponential O(cm) c is a constant & c>1
- Factorial or N-power-N O(n!) or O(nn)

#### Constant Time: O(1)

An algorithm is said to run in constant time if the output is produced in constant time regardless
of the input size.

Examples:

1. Accessing n<sup>th</sup> element of an array
2. Push and pop of a stack.
3. Enqueue and remove of a queue.
4. Accessing an element of Hash-Table.

#### Linear Time: O(n)

An algorithm is said to run in linear time if the execution time of the algorithm is directly
proportional to the input size.

Examples:

1. Array operations like search element, find min, find max etc.
2. Linked list operations like traversal, find min, find max etc.

**Note**: when we need to see/ traverse all the nodes of a data-structure for some task then
complexity is no less than O(n)

#### Logarithmic Time: O(logn)

An algorithm is said to run in logarithmic time if the execution time of the algorithm is
proportional to the logarithm of the input size. Each step of an algorithm, a significant portion of the input is pruned out without traversing it.

Example: Binary search, we will read about these algorithms in this book.

#### N-LogN Time: O(nlog(n))

An algorithm is said to run in logarithmic time if the execution time of an algorithm is
proportional to the product of input size and logarithm of the input size.

Example:

1. Merge-Sort
2. Quick-Sort (Average case)
3. Heap-Sort

**Note:** Quicksort is a special kind of algorithm to sort an array of numbers. Its worst-case
complexity is O(n<sup>2</sup>) and average case complexity is O(n log n).

#### Quadratic Time: O(n<sup>2</sup>)

An algorithm is said to run in quadratic time if the execution time of an algorithm is
proportional to the square of the input size.

Examples:

1. Bubble-Sort
2. Selection-Sort
3. Insertion-Sort

#### Time Complexity Examples


