# Complete Guide to Recursion Patterns - From Basic to Advanced

![Recursion Patterns](https://img.shields.io/badge/Recursion-Patterns-brightgreen)
![Java](https://img.shields.io/badge/Java-ED8B00?logo=java&logoColor=white)
![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?logo=leetcode&logoColor=white)
![Educational](https://img.shields.io/badge/Educational-Resource-blue)

**Master all recursion patterns with visualizations, templates, and LeetCode examples**

## Project Overview

This comprehensive guide is designed to help developers master recursion through structured learning. From fundamental concepts to advanced techniques, this resource covers 12 essential recursion patterns that appear frequently in coding interviews and competitive programming.

## Features

- **12 Comprehensive Patterns**: From basic recursion to advanced backtracking and dynamic programming
- **Java Templates**: Ready-to-use code templates for each pattern
- **LeetCode Integration**: Curated LeetCode problems for hands-on practice
- **Complexity Analysis**: Time and space complexity for each pattern
- **Progressive Learning**: Structured from beginner to advanced level
- **Visual Learning**: Clear explanations with conceptual breakdowns

## Pattern Categories

### ðŸ”¹ **Foundation Level**
1. **Basic Recursion (Foundation)**
   - Print sequences, factorial, Fibonacci, power calculations
   - *Complexity*: O(n) linear, O(2^n) tree recursion

2. **Recursion with Arrays/Strings**
   - Array processing, palindrome checks, string manipulation
   - *Complexity*: O(n) time, O(n) space

### **Intermediate Level**
3. **Subset/Subsequence Pattern**
   - Generate all subsets, subset sum problems
   - *Complexity*: O(2^n) time, O(n) space

4. **Permutations Pattern**
   - All permutations, handling duplicates
   - *Complexity*: O(n! * n) time, O(n) space

5. **Combinations Pattern**
   - Choose k elements, combination sum problems
   - *Complexity*: O(2^n) to O(n^k) time, O(k) space

6. **Partitioning/Palindrome Partitioning**
   - Divide into valid groups, word break problems
   - *Complexity*: O(2^n) time, O(n) space

7. **Recursion on Grids/Matrix**
   - Path finding, word search, flood fill
   - *Complexity*: O(4^(m*n)) worst case, O(m*n) space

###  **Advanced Level**
8. **Decision Making (Choices)**
   - N-Queens, Sudoku solver, valid parentheses
   - *Complexity*: O(n!) for N-Queens, O(4^n) for parentheses

9. **Divide & Conquer**
   - Binary search, merge sort, optimized power calculation
   - *Complexity*: O(log n) to O(n log n), O(log n) space

10. **Recursion in Trees**
    - Tree traversals, path problems, diameter calculations
    - *Complexity*: O(n) time, O(h) space where h is tree height

11. **Dynamic Programming (Memoization)**
    - Top-down DP, coin change, longest common subsequence
    - *Complexity*: O(n) with memoization vs O(2^n) without

12. **Advanced Backtracking**
    - Regular expression matching, word search with Trie
    - *Complexity*: Exponential with pruning optimizations

## Getting Started

### Prerequisites
- Basic understanding of Java programming
- Familiarity with data structures (arrays, strings, trees)
- LeetCode account (optional, for practice problems)

### How to Use This Guide

1. **Start with Basics**: Begin with Pattern 1 (Basic Recursion) even if you have some experience
2. **Follow the Progression**: Each pattern builds upon previous concepts
3. **Practice with Templates**: Use the provided Java templates as starting points
4. **Solve LeetCode Problems**: Apply each pattern to the suggested problems
5. **Understand Complexity**: Analyze time and space complexity for each solution

### Code Template Structure

Each pattern includes:
```java
// Pattern Template Structure
public class PatternName {
    // Main recursive function
    public static ReturnType recursiveFunction(parameters) {
        // Base case(s)
        if (baseCondition) return baseValue;
        
        // Recursive case(s)
        // Processing logic
        return recursiveCall(modifiedParameters);
    }
    
    // Helper functions if needed
    private static void helperFunction() {
        // Implementation
    }
}
```

## Learning Path

### Beginner Track (Patterns 1-3)
- Focus on understanding recursion flow
- Master base cases and recursive cases
- Practice with simple problems

### Intermediate Track (Patterns 4-7)
- Learn backtracking techniques
- Understand state management
- Practice with medium-difficulty problems

### Advanced Track (Patterns 8-12)
- Master complex decision-making
- Optimize with memoization
- Tackle hard-level problems

## LeetCode Problem Distribution

| Difficulty | Number of Problems | Patterns Covered |
|------------|-------------------|------------------|
| **Easy** | 8 problems | Basic recursion, arrays, trees |
| **Medium** | 22 problems | Backtracking, DP, advanced patterns |
| **Hard** | 6 problems | Complex algorithms, optimization |

## ðŸ› ï¸ Study Strategies

### For Interviews
1. Master patterns 1-3 for basic recursion questions
2. Focus on patterns 4-6 for most backtracking problems
3. Study patterns 8-12 for advanced company interviews

### For Competitive Programming
1. Emphasize patterns 9 and 11 for optimization
2. Practice pattern 7 for grid-based problems
3. Master pattern 12 for complex string problems

### For Academic Learning
1. Follow sequential order from pattern 1-12
2. Implement each template from scratch
3. Analyze complexity for every solution

## Progress Tracking

Track your progress through each pattern:
- [ ] Pattern 1: Basic Recursion (Foundation)
- [ ] Pattern 2: Recursion with Arrays/Strings
- [ ] Pattern 3: Subset/Subsequence Pattern
- [ ] Pattern 4: Permutations Pattern
- [ ] Pattern 5: Combinations Pattern
- [ ] Pattern 6: Partitioning/Palindrome Partitioning
- [ ] Pattern 7: Recursion on Grids/Matrix
- [ ] Pattern 8: Decision Making (Choices)
- [ ] Pattern 9: Divide & Conquer
- [ ] Pattern 10: Recursion in Trees
- [ ] Pattern 11: Dynamic Programming (Memoization)
- [ ] Pattern 12: Advanced Backtracking

## Contributing

We welcome contributions to improve this recursion guide:

1. **Add More Problems**: Suggest relevant LeetCode problems for each pattern
2. **Improve Templates**: Enhance code templates with better explanations
3. **Add Visualizations**: Create diagrams or animations for complex patterns
4. **Language Support**: Add templates in other programming languages
5. **Bug Fixes**: Report and fix any issues in the code templates

### Contribution Guidelines
- Ensure code follows Java best practices
- Include time/space complexity analysis
- Add clear comments explaining the logic
- Test solutions on LeetCode before submitting

## Resources

### Additional Learning Materials
- [Recursion Visualizer Tools](https://visualgo.net/en/recursion)
- [LeetCode Recursion Study Plan](https://leetcode.com/study-plan/recursion/)
- [Algorithm Design Manual - Recursion Chapter](https://www.algorist.com/)

### Related Concepts to Study
- **Backtracking**: Core technique for many recursion problems
- **Dynamic Programming**: Optimization of recursive solutions
- **Tree Algorithms**: Natural recursion applications
- **Graph Traversal**: DFS as recursive exploration

## Complexity Cheat Sheet

| Pattern Type | Typical Time | Typical Space | Common Optimizations |
|--------------|--------------|---------------|---------------------|
| Linear Recursion | O(n) | O(n) | Tail recursion, iteration |
| Tree Recursion | O(2^n) | O(n) | Memoization, pruning |
| Backtracking | O(n!) | O(n) | Early termination, constraints |
| Divide & Conquer | O(n log n) | O(log n) | Iterative bottom-up |

## Success Metrics

After completing this guide, you should be able to:
-  Identify recursion patterns in new problems within 30 seconds
-  Implement any of the 12 patterns from memory
-  Solve 80%+ of LeetCode recursion problems (Easy/Medium)
-  Optimize recursive solutions using memoization
-  Explain time/space complexity for recursive algorithms

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **LeetCode**: For providing excellent practice problems
- **Java Community**: For best practices and coding standards
- **Open Source Contributors**: For continuous improvements and feedback

---

**Happy Coding! Master recursion one pattern at a time! ðŸš€**

*Remember: Recursion is not just about solving problems - it's about thinking in patterns and breaking down complex problems into simpler, manageable pieces.*
