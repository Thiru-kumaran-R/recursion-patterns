// Recursion Patterns Website JavaScript

// Pattern data from JSON
const patternsData = {
  "patterns": [
    {
      "id": 1,
      "title": "Basic Recursion (Foundation)",
      "icon": "🔹",
      "description": "These teach how recursion flows (base case + recursive case). Focus: printing, factorial, sum, Fibonacci, etc.",
      "concepts": ["Print numbers 1 → N or N → 1", "Factorial of N", "Sum of first N numbers", "Fibonacci number", "Power of a number (a^n)", "Reverse a string / array recursively"],
      "java_template": "// Basic Recursion Template\npublic class BasicRecursion {\n    // Template for linear recursion\n    public static int linearRecursion(int n) {\n        // Base case\n        if (n <= 0) return 0; // or 1 for factorial\n        \n        // Recursive case\n        return n + linearRecursion(n - 1);\n    }\n    \n    // Fibonacci with tree recursion\n    public static int fibonacci(int n) {\n        if (n <= 1) return n;\n        return fibonacci(n - 1) + fibonacci(n - 2);\n    }\n    \n    // Power calculation\n    public static int power(int base, int exp) {\n        if (exp == 0) return 1;\n        return base * power(base, exp - 1);\n    }\n}",
      "leetcode_problems": [{"number": 509, "title": "Fibonacci Number", "difficulty": "Easy", "slug": "fibonacci-number"}, {"number": 50, "title": "Pow(x, n)", "difficulty": "Medium", "slug": "powx-n"}, {"number": 344, "title": "Reverse String", "difficulty": "Easy", "slug": "reverse-string"}],
      "complexity": "Time: O(n) for linear, O(2^n) for tree recursion | Space: O(n) call stack",
      "difficulty": "basic"
    },
    {
      "id": 2,
      "title": "Recursion with Arrays / Strings",
      "icon": "🔹",
      "description": "Learning to pass index, reduce input, and build result.",
      "concepts": ["Print array elements recursively", "Reverse array/string recursively", "Palindrome check", "Find element in array", "Sum of array", "Maximum element in array", "Substring generation"],
      "java_template": "// Array/String Recursion Template\npublic class ArrayStringRecursion {\n    // Process array with index\n    public static void printArray(int[] arr, int index) {\n        if (index >= arr.length) return;\n        System.out.print(arr[index] + \" \");\n        printArray(arr, index + 1);\n    }\n    \n    // Check palindrome recursively\n    public static boolean isPalindrome(String s, int left, int right) {\n        if (left >= right) return true;\n        if (s.charAt(left) != s.charAt(right)) return false;\n        return isPalindrome(s, left + 1, right - 1);\n    }\n    \n    // Find maximum in array\n    public static int findMax(int[] arr, int index) {\n        if (index == arr.length - 1) return arr[index];\n        return Math.max(arr[index], findMax(arr, index + 1));\n    }\n}",
      "leetcode_problems": [{"number": 125, "title": "Valid Palindrome", "difficulty": "Easy", "slug": "valid-palindrome"}, {"number": 344, "title": "Reverse String", "difficulty": "Easy", "slug": "reverse-string"}, {"number": 28, "title": "Find Index of First Occurrence", "difficulty": "Easy", "slug": "find-the-index-of-the-first-occurrence-in-a-string"}],
      "complexity": "Time: O(n) | Space: O(n) for recursion depth",
      "difficulty": "basic"
    },
    {
      "id": 3,
      "title": "Subset / Subsequence Pattern",
      "icon": "🔹",
      "description": "Very common pattern for backtracking, DP, and combinations.",
      "concepts": ["Generate all subsequences of a string", "Generate subsets of an array", "Subset sum problem", "Count subsequences with given sum"],
      "java_template": "// Subset/Subsequence Template\npublic class SubsetPattern {\n    public static void generateSubsets(int[] nums, int index, \n                                     List<Integer> current, List<List<Integer>> result) {\n        // Base case - add current subset\n        if (index == nums.length) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        \n        // Exclude current element\n        generateSubsets(nums, index + 1, current, result);\n        \n        // Include current element\n        current.add(nums[index]);\n        generateSubsets(nums, index + 1, current, result);\n        current.remove(current.size() - 1); // backtrack\n    }\n    \n    // Subset sum check\n    public static boolean subsetSum(int[] arr, int index, int target) {\n        if (target == 0) return true;\n        if (index >= arr.length || target < 0) return false;\n        \n        return subsetSum(arr, index + 1, target) || \n               subsetSum(arr, index + 1, target - arr[index]);\n    }\n}",
      "leetcode_problems": [{"number": 78, "title": "Subsets", "difficulty": "Medium", "slug": "subsets"}, {"number": 90, "title": "Subsets II", "difficulty": "Medium", "slug": "subsets-ii"}, {"number": 416, "title": "Partition Equal Subset Sum", "difficulty": "Medium", "slug": "partition-equal-subset-sum"}],
      "complexity": "Time: O(2^n) | Space: O(n) for recursion depth",
      "difficulty": "intermediate"
    },
    {
      "id": 4,
      "title": "Permutations Pattern",
      "icon": "🔹",
      "description": "Order matters, unlike subsets.",
      "concepts": ["String/array permutations", "Distinct permutations (handling duplicates)", "Next permutation"],
      "java_template": "// Permutations Template\npublic class PermutationPattern {\n    public static void generatePermutations(int[] nums, int index, \n                                          List<List<Integer>> result) {\n        // Base case\n        if (index == nums.length) {\n            List<Integer> perm = new ArrayList<>();\n            for (int num : nums) perm.add(num);\n            result.add(perm);\n            return;\n        }\n        \n        for (int i = index; i < nums.length; i++) {\n            // Swap\n            swap(nums, index, i);\n            generatePermutations(nums, index + 1, result);\n            swap(nums, index, i); // backtrack\n        }\n    }\n    \n    private static void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}",
      "leetcode_problems": [{"number": 46, "title": "Permutations", "difficulty": "Medium", "slug": "permutations"}, {"number": 47, "title": "Permutations II", "difficulty": "Medium", "slug": "permutations-ii"}, {"number": 31, "title": "Next Permutation", "difficulty": "Medium", "slug": "next-permutation"}],
      "complexity": "Time: O(n! * n) | Space: O(n) for recursion depth",
      "difficulty": "intermediate"
    },
    {
      "id": 5,
      "title": "Combinations Pattern",
      "icon": "🔹",
      "description": "Choose k elements out of n.",
      "concepts": ["Print all combinations of size k", "Combination sum problems", "Combinations with constraints"],
      "java_template": "// Combinations Template\npublic class CombinationPattern {\n    public static void generateCombinations(int[] nums, int start, int k, \n                                          List<Integer> current, List<List<Integer>> result) {\n        // Base case - found k elements\n        if (current.size() == k) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        \n        for (int i = start; i < nums.length; i++) {\n            current.add(nums[i]);\n            generateCombinations(nums, i + 1, k, current, result);\n            current.remove(current.size() - 1); // backtrack\n        }\n    }\n    \n    // Combination Sum (can reuse elements)\n    public static void combinationSum(int[] candidates, int target, int start,\n                                    List<Integer> current, List<List<Integer>> result) {\n        if (target == 0) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        \n        for (int i = start; i < candidates.length; i++) {\n            if (candidates[i] <= target) {\n                current.add(candidates[i]);\n                combinationSum(candidates, target - candidates[i], i, current, result);\n                current.remove(current.size() - 1);\n            }\n        }\n    }\n}",
      "leetcode_problems": [{"number": 39, "title": "Combination Sum", "difficulty": "Medium", "slug": "combination-sum"}, {"number": 40, "title": "Combination Sum II", "difficulty": "Medium", "slug": "combination-sum-ii"}, {"number": 77, "title": "Combinations", "difficulty": "Medium", "slug": "combinations"}],
      "complexity": "Time: O(2^n) to O(n^k) | Space: O(k) for recursion depth",
      "difficulty": "intermediate"
    },
    {
      "id": 6,
      "title": "Partitioning / Palindrome Partitioning",
      "icon": "🔹",
      "description": "Divide into valid groups.",
      "concepts": ["Partition array/string into k groups", "Palindrome partitioning", "Word break problem"],
      "java_template": "// Partitioning Template\npublic class PartitioningPattern {\n    public static void palindromePartition(String s, int start, \n                                         List<String> current, List<List<String>> result) {\n        // Base case\n        if (start == s.length()) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        \n        for (int end = start; end < s.length(); end++) {\n            if (isPalindrome(s, start, end)) {\n                current.add(s.substring(start, end + 1));\n                palindromePartition(s, end + 1, current, result);\n                current.remove(current.size() - 1); // backtrack\n            }\n        }\n    }\n    \n    private static boolean isPalindrome(String s, int left, int right) {\n        while (left < right) {\n            if (s.charAt(left) != s.charAt(right)) return false;\n            left++;\n            right--;\n        }\n        return true;\n    }\n}",
      "leetcode_problems": [{"number": 131, "title": "Palindrome Partitioning", "difficulty": "Medium", "slug": "palindrome-partitioning"}, {"number": 139, "title": "Word Break", "difficulty": "Medium", "slug": "word-break"}, {"number": 698, "title": "Partition to K Equal Sum Subsets", "difficulty": "Medium", "slug": "partition-to-k-equal-sum-subsets"}],
      "complexity": "Time: O(2^n) | Space: O(n) for recursion depth",
      "difficulty": "intermediate"
    },
    {
      "id": 7,
      "title": "Recursion on Grids / Matrix",
      "icon": "🔹",
      "description": "DFS style problems (backtracking + recursion).",
      "concepts": ["Count paths in a grid", "Print all paths", "Rat in a maze", "Word search", "Flood fill"],
      "java_template": "// Grid/Matrix Recursion Template\npublic class GridRecursion {\n    private static int[][] directions = {{0,1}, {1,0}, {0,-1}, {-1,0}};\n    \n    // Count paths in grid\n    public static int countPaths(int[][] grid, int row, int col, \n                               int targetRow, int targetCol) {\n        if (row == targetRow && col == targetCol) return 1;\n        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length\n            || grid[row][col] == 1) return 0; // 1 represents obstacle\n        \n        int paths = 0;\n        for (int[] dir : directions) {\n            paths += countPaths(grid, row + dir[0], col + dir[1], targetRow, targetCol);\n        }\n        return paths;\n    }\n    \n    // Word Search in grid\n    public static boolean wordSearch(char[][] board, String word, int index, \n                                   int row, int col, boolean[][] visited) {\n        if (index == word.length()) return true;\n        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length\n            || visited[row][col] || board[row][col] != word.charAt(index)) {\n            return false;\n        }\n        \n        visited[row][col] = true;\n        boolean found = false;\n        \n        for (int[] dir : directions) {\n            if (wordSearch(board, word, index + 1, row + dir[0], col + dir[1], visited)) {\n                found = true;\n                break;\n            }\n        }\n        \n        visited[row][col] = false; // backtrack\n        return found;\n    }\n}",
      "leetcode_problems": [{"number": 79, "title": "Word Search", "difficulty": "Medium", "slug": "word-search"}, {"number": 200, "title": "Number of Islands", "difficulty": "Medium", "slug": "number-of-islands"}, {"number": 733, "title": "Flood Fill", "difficulty": "Easy", "slug": "flood-fill"}],
      "complexity": "Time: O(4^(m*n)) worst case | Space: O(m*n) for recursion and visited array",
      "difficulty": "intermediate"
    },
    {
      "id": 8,
      "title": "Recursion with Decision Making (Choices)",
      "icon": "🔹",
      "description": "Classic backtracking pattern.",
      "concepts": ["N-Queens problem", "Sudoku solver", "Knight's tour", "Generate valid parentheses", "Binary tree path sums"],
      "java_template": "// Decision Making Recursion Template\npublic class DecisionMakingRecursion {\n    // N-Queens\n    public static boolean solveNQueens(int[][] board, int col) {\n        int n = board.length;\n        if (col >= n) return true; // All queens placed\n        \n        for (int row = 0; row < n; row++) {\n            if (isSafe(board, row, col)) {\n                board[row][col] = 1; // Place queen\n                \n                if (solveNQueens(board, col + 1)) return true;\n                \n                board[row][col] = 0; // Backtrack\n            }\n        }\n        return false;\n    }\n    \n    // Generate Valid Parentheses\n    public static void generateParentheses(int n, int open, int close, \n                                         String current, List<String> result) {\n        if (current.length() == 2 * n) {\n            result.add(current);\n            return;\n        }\n        \n        if (open < n) {\n            generateParentheses(n, open + 1, close, current + \"(\", result);\n        }\n        if (close < open) {\n            generateParentheses(n, open, close + 1, current + \")\", result);\n        }\n    }\n}",
      "leetcode_problems": [{"number": 22, "title": "Generate Parentheses", "difficulty": "Medium", "slug": "generate-parentheses"}, {"number": 51, "title": "N-Queens", "difficulty": "Hard", "slug": "n-queens"}, {"number": 37, "title": "Sudoku Solver", "difficulty": "Hard", "slug": "sudoku-solver"}],
      "complexity": "Time: O(n!) for N-Queens, O(4^n) for parentheses | Space: O(n) for recursion depth",
      "difficulty": "advanced"
    },
    {
      "id": 9,
      "title": "Recursion + Binary Search / Divide & Conquer",
      "icon": "🔹",
      "description": "Optimized recursion (logarithmic splits).",
      "concepts": ["Binary search", "Merge sort", "Quick sort", "Pow(x, n)", "Search in rotated sorted array"],
      "java_template": "// Divide & Conquer Template\npublic class DivideConquerRecursion {\n    // Binary Search\n    public static int binarySearch(int[] arr, int target, int left, int right) {\n        if (left > right) return -1;\n        \n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        \n        if (arr[mid] > target) {\n            return binarySearch(arr, target, left, mid - 1);\n        } else {\n            return binarySearch(arr, target, mid + 1, right);\n        }\n    }\n    \n    // Merge Sort\n    public static void mergeSort(int[] arr, int left, int right) {\n        if (left < right) {\n            int mid = left + (right - left) / 2;\n            \n            mergeSort(arr, left, mid);\n            mergeSort(arr, mid + 1, right);\n            \n            merge(arr, left, mid, right);\n        }\n    }\n    \n    // Power calculation (optimized)\n    public static double myPow(double x, int n) {\n        if (n == 0) return 1.0;\n        \n        long longN = Math.abs((long) n);\n        double result = powHelper(x, longN);\n        \n        return (n < 0) ? 1.0 / result : result;\n    }\n}",
      "leetcode_problems": [{"number": 50, "title": "Pow(x, n)", "difficulty": "Medium", "slug": "powx-n"}, {"number": 33, "title": "Search in Rotated Sorted Array", "difficulty": "Medium", "slug": "search-in-rotated-sorted-array"}, {"number": 215, "title": "Kth Largest Element in Array", "difficulty": "Medium", "slug": "kth-largest-element-in-an-array"}],
      "complexity": "Time: O(log n) for binary search, O(n log n) for merge sort | Space: O(log n) for recursion stack",
      "difficulty": "intermediate"
    },
    {
      "id": 10,
      "title": "Recursion in Trees",
      "icon": "🔹",
      "description": "Most tree problems are recursive by nature.",
      "concepts": ["Preorder, Inorder, Postorder traversal", "Height of binary tree", "Diameter of tree", "Path sum", "Lowest common ancestor", "Serialize/Deserialize tree"],
      "java_template": "// Tree Recursion Template\npublic class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int val) { this.val = val; }\n}\n\npublic class TreeRecursion {\n    // Tree Traversals\n    public static void inorderTraversal(TreeNode root, List<Integer> result) {\n        if (root == null) return;\n        \n        inorderTraversal(root.left, result);\n        result.add(root.val);\n        inorderTraversal(root.right, result);\n    }\n    \n    // Height of tree\n    public static int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        \n        int leftDepth = maxDepth(root.left);\n        int rightDepth = maxDepth(root.right);\n        \n        return Math.max(leftDepth, rightDepth) + 1;\n    }\n    \n    // Path Sum\n    public static boolean hasPathSum(TreeNode root, int targetSum) {\n        if (root == null) return false;\n        \n        if (root.left == null && root.right == null) {\n            return root.val == targetSum;\n        }\n        \n        return hasPathSum(root.left, targetSum - root.val) ||\n               hasPathSum(root.right, targetSum - root.val);\n    }\n}",
      "leetcode_problems": [{"number": 104, "title": "Maximum Depth of Binary Tree", "difficulty": "Easy", "slug": "maximum-depth-of-binary-tree"}, {"number": 112, "title": "Path Sum", "difficulty": "Easy", "slug": "path-sum"}, {"number": 543, "title": "Diameter of Binary Tree", "difficulty": "Easy", "slug": "diameter-of-binary-tree"}],
      "complexity": "Time: O(n) where n is number of nodes | Space: O(h) where h is height of tree",
      "difficulty": "basic"
    },
    {
      "id": 11,
      "title": "Recursion in Dynamic Programming (Top-Down Memoization)",
      "icon": "🔹",
      "description": "Recursive + memoization.",
      "concepts": ["Fibonacci with memoization", "Climbing stairs", "Coin change", "Knapsack problem", "Longest common subsequence", "Matrix path problems"],
      "java_template": "// Dynamic Programming with Recursion Template\npublic class DPRecursion {\n    // Fibonacci with memoization\n    public static int fibonacciMemo(int n, Map<Integer, Integer> memo) {\n        if (n <= 1) return n;\n        if (memo.containsKey(n)) return memo.get(n);\n        \n        int result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);\n        memo.put(n, result);\n        return result;\n    }\n    \n    // Climbing Stairs\n    public static int climbStairs(int n, Map<Integer, Integer> memo) {\n        if (n <= 1) return 1;\n        if (memo.containsKey(n)) return memo.get(n);\n        \n        int result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);\n        memo.put(n, result);\n        return result;\n    }\n    \n    // Coin Change (minimum coins)\n    public static int coinChange(int[] coins, int amount, Map<Integer, Integer> memo) {\n        if (amount == 0) return 0;\n        if (amount < 0) return -1;\n        if (memo.containsKey(amount)) return memo.get(amount);\n        \n        int minCoins = Integer.MAX_VALUE;\n        for (int coin : coins) {\n            int result = coinChange(coins, amount - coin, memo);\n            if (result >= 0) {\n                minCoins = Math.min(minCoins, result + 1);\n            }\n        }\n        \n        int finalResult = (minCoins == Integer.MAX_VALUE) ? -1 : minCoins;\n        memo.put(amount, finalResult);\n        return finalResult;\n    }\n}",
      "leetcode_problems": [{"number": 70, "title": "Climbing Stairs", "difficulty": "Easy", "slug": "climbing-stairs"}, {"number": 322, "title": "Coin Change", "difficulty": "Medium", "slug": "coin-change"}, {"number": 1143, "title": "Longest Common Subsequence", "difficulty": "Medium", "slug": "longest-common-subsequence"}],
      "complexity": "Time: O(n) with memoization vs O(2^n) without | Space: O(n) for memo + recursion stack",
      "difficulty": "advanced"
    },
    {
      "id": 12,
      "title": "Advanced Recursion / Backtracking",
      "icon": "🔹",
      "description": "Complex problems requiring sophisticated recursive techniques.",
      "concepts": ["Word search in dictionary", "Regular expression matching", "Wildcard matching", "Crossword / puzzles", "Recursive DP on bitmask"],
      "java_template": "// Advanced Recursion Template\npublic class AdvancedRecursion {\n    // Regular Expression Matching\n    public static boolean isMatch(String s, String p, int i, int j, \n                                Map<String, Boolean> memo) {\n        String key = i + \",\" + j;\n        if (memo.containsKey(key)) return memo.get(key);\n        \n        boolean result;\n        if (j >= p.length()) {\n            result = i >= s.length();\n        } else {\n            boolean firstMatch = i < s.length() && \n                               (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.');\n            \n            if (j + 1 < p.length() && p.charAt(j + 1) == '*') {\n                result = isMatch(s, p, i, j + 2, memo) || \n                        (firstMatch && isMatch(s, p, i + 1, j, memo));\n            } else {\n                result = firstMatch && isMatch(s, p, i + 1, j + 1, memo);\n            }\n        }\n        \n        memo.put(key, result);\n        return result;\n    }\n    \n    // Word Search II (Trie + Backtracking)\n    static class TrieNode {\n        TrieNode[] children = new TrieNode[26];\n        String word = null;\n    }\n    \n    public static List<String> findWords(char[][] board, String[] words) {\n        TrieNode root = buildTrie(words);\n        List<String> result = new ArrayList<>();\n        \n        for (int i = 0; i < board.length; i++) {\n            for (int j = 0; j < board[0].length; j++) {\n                dfsWordSearch(board, i, j, root, result);\n            }\n        }\n        return result;\n    }\n}",
      "leetcode_problems": [{"number": 44, "title": "Wildcard Matching", "difficulty": "Hard", "slug": "wildcard-matching"}, {"number": 212, "title": "Word Search II", "difficulty": "Hard", "slug": "word-search-ii"}, {"number": 10, "title": "Regular Expression Matching", "difficulty": "Hard", "slug": "regular-expression-matching"}],
      "complexity": "Time: Exponential in worst case, optimized with pruning | Space: O(n) for recursion + additional data structures",
      "difficulty": "advanced"
    }
  ]
};

// Global state
let currentPatternId = null;
let visitedPatterns = new Set();
let filteredPatterns = [...patternsData.patterns];

// DOM Elements
const patternsGrid = document.getElementById('patternsGrid');
const patternModal = document.getElementById('patternModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const searchInput = document.getElementById('searchInput');
const difficultyFilter = document.getElementById('difficultyFilter');
const progressIndicator = document.getElementById('progressIndicator');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const prevPatternBtn = document.getElementById('prevPattern');
const nextPatternBtn = document.getElementById('nextPattern');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderPatterns();
    setupEventListeners();
    updateProgress();
    
    // Show progress indicator after a delay
    setTimeout(() => {
        progressIndicator.classList.remove('hidden');
    }, 1000);
});

// Render pattern cards
function renderPatterns(patterns = filteredPatterns) {
    patternsGrid.innerHTML = '';
    
    if (patterns.length === 0) {
        patternsGrid.innerHTML = `
            <div class="col-span-full text-center py-16">
                <h3 style="color: var(--color-text-secondary); margin-bottom: 16px;">No patterns found</h3>
                <p style="color: var(--color-text-secondary);">Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }
    
    patterns.forEach((pattern, index) => {
        const card = createPatternCard(pattern, index);
        patternsGrid.appendChild(card);
    });
}

// Create pattern card element
function createPatternCard(pattern, index) {
    const card = document.createElement('div');
    card.className = 'pattern-card fade-in-up';
    card.style.animationDelay = `${index * 0.1}s`;
    card.onclick = () => openPatternModal(pattern.id);
    
    const difficultyClass = getDifficultyClass(pattern.difficulty);
    const problemCount = pattern.leetcode_problems.length;
    
    card.innerHTML = `
        <div class="pattern-header">
            <div class="pattern-number">${pattern.id}</div>
            <div class="pattern-info">
                <h3 class="pattern-title">${pattern.title}</h3>
                <p class="pattern-description">${pattern.description}</p>
            </div>
        </div>
        <div class="pattern-meta">
            <span class="pattern-complexity">${pattern.complexity.split('|')[0].trim()}</span>
            <span class="pattern-problems">${problemCount} problems</span>
        </div>
    `;
    
    return card;
}

// Get difficulty CSS class
function getDifficultyClass(difficulty) {
    switch(difficulty) {
        case 'basic': return 'difficulty-easy';
        case 'intermediate': return 'difficulty-medium';
        case 'advanced': return 'difficulty-hard';
        default: return 'difficulty-medium';
    }
}

// Open pattern modal
function openPatternModal(patternId) {
    const pattern = patternsData.patterns.find(p => p.id === patternId);
    if (!pattern) return;
    
    currentPatternId = patternId;
    visitedPatterns.add(patternId);
    updateProgress();
    
    modalTitle.textContent = `${pattern.id}. ${pattern.title}`;
    modalBody.innerHTML = createPatternDetailContent(pattern);
    
    updateNavigationButtons();
    patternModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add syntax highlighting and copy functionality
    setupCodeBlocks();
}

// Create pattern detail content
function createPatternDetailContent(pattern) {
    return `
        <div class="pattern-detail-section">
            <h3 class="pattern-detail-title">
                <span class="section-icon">💡</span>
                Key Concepts
            </h3>
            <ul class="concepts-list">
                ${pattern.concepts.map(concept => `<li>${concept}</li>`).join('')}
            </ul>
        </div>
        
        <div class="pattern-detail-section">
            <h3 class="pattern-detail-title">
                <span class="section-icon">💻</span>
                Java Template
            </h3>
            <div class="code-container">
                <div class="code-header">
                    <span class="code-language">Java</span>
                    <button class="copy-code-btn" onclick="copyCode(this)">Copy</button>
                </div>
                <div class="code-content">
                    <pre><code>${escapeHtml(pattern.java_template)}</code></pre>
                </div>
            </div>
        </div>
        
        <div class="pattern-detail-section">
            <h3 class="pattern-detail-title">
                <span class="section-icon">⚡</span>
                Complexity Analysis
            </h3>
            <div class="complexity-info">
                <code>${pattern.complexity}</code>
            </div>
        </div>
        
        <div class="pattern-detail-section">
            <h3 class="pattern-detail-title">
                <span class="section-icon">🎯</span>
                LeetCode Problems
            </h3>
            <div class="problems-grid">
                ${pattern.leetcode_problems.map(problem => `
                    <div class="problem-item" onclick="openLeetCodeProblem('${problem.slug || problem.number}', event)">
                        <div class="problem-info">
                            <span class="problem-number">${problem.number}</span>
                            <span class="problem-title">${problem.title}</span>
                        </div>
                        <span class="difficulty-badge ${getDifficultyClass(problem.difficulty.toLowerCase())}">${problem.difficulty}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Close modal
function closeModal() {
    patternModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentPatternId = null;
}

// Navigate between patterns
function navigatePattern(direction) {
    if (!currentPatternId) return;
    
    const currentIndex = patternsData.patterns.findIndex(p => p.id === currentPatternId);
    let newIndex;
    
    if (direction === 'prev') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : patternsData.patterns.length - 1;
    } else {
        newIndex = currentIndex < patternsData.patterns.length - 1 ? currentIndex + 1 : 0;
    }
    
    const newPattern = patternsData.patterns[newIndex];
    openPatternModal(newPattern.id);
}

// Update navigation buttons
function updateNavigationButtons() {
    const currentIndex = patternsData.patterns.findIndex(p => p.id === currentPatternId);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : patternsData.patterns.length - 1;
    const nextIndex = currentIndex < patternsData.patterns.length - 1 ? currentIndex + 1 : 0;
    
    const prevPattern = patternsData.patterns[prevIndex];
    const nextPattern = patternsData.patterns[nextIndex];
    
    prevPatternBtn.textContent = `← ${prevPattern.title}`;
    nextPatternBtn.textContent = `${nextPattern.title} →`;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Filter functionality
    difficultyFilter.addEventListener('change', handleFilter);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyNavigation);
    
    // Close modal on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !patternModal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// Handle search
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const difficulty = difficultyFilter.value;
    
    filteredPatterns = patternsData.patterns.filter(pattern => {
        const matchesSearch = !query || 
            pattern.title.toLowerCase().includes(query) ||
            pattern.description.toLowerCase().includes(query) ||
            pattern.concepts.some(concept => concept.toLowerCase().includes(query));
        
        const matchesDifficulty = !difficulty || pattern.difficulty === difficulty;
        
        return matchesSearch && matchesDifficulty;
    });
    
    renderPatterns(filteredPatterns);
}

// Handle filter
function handleFilter(e) {
    const difficulty = e.target.value;
    const query = searchInput.value.toLowerCase().trim();
    
    filteredPatterns = patternsData.patterns.filter(pattern => {
        const matchesSearch = !query || 
            pattern.title.toLowerCase().includes(query) ||
            pattern.description.toLowerCase().includes(query) ||
            pattern.concepts.some(concept => concept.toLowerCase().includes(query));
        
        const matchesDifficulty = !difficulty || pattern.difficulty === difficulty;
        
        return matchesSearch && matchesDifficulty;
    });
    
    renderPatterns(filteredPatterns);
}

// Handle keyboard navigation
function handleKeyNavigation(e) {
    if (patternModal.classList.contains('hidden')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            navigatePattern('prev');
            break;
        case 'ArrowRight':
            navigatePattern('next');
            break;
    }
}

// Update progress
function updateProgress() {
    const totalPatterns = patternsData.patterns.length;
    const visitedCount = visitedPatterns.size;
    const percentage = (visitedCount / totalPatterns) * 100;
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${visitedCount} / ${totalPatterns} patterns explored`;
}

// Copy code functionality
function copyCode(button) {
    const codeContent = button.closest('.code-container').querySelector('code').textContent;
    
    navigator.clipboard.writeText(codeContent).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'var(--color-success)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'var(--color-primary)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
    });
}

// Setup code blocks
function setupCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-content code');
    codeBlocks.forEach(block => {
        // Simple syntax highlighting for Java keywords
        let content = block.textContent;
        const keywords = ['public', 'static', 'class', 'int', 'boolean', 'void', 'if', 'else', 'for', 'while', 'return', 'new', 'true', 'false', 'null'];
        
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            content = content.replace(regex, `<span style="color: var(--color-primary); font-weight: var(--font-weight-medium);">$1</span>`);
        });
        
        // Highlight comments
        content = content.replace(/(\/\/.*$)/gm, '<span style="color: var(--color-text-secondary); font-style: italic;">$1</span>');
        
        block.innerHTML = content;
    });
}

// Open LeetCode problem (fixed to open in new tab)
function openLeetCodeProblem(problemSlug, event) {
    // Prevent the event from bubbling up
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Construct proper LeetCode URL using the slug
    const url = `https://leetcode.com/problems/${problemSlug}/`;
    
    // Open in new tab using window.open with proper parameters
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    
    // Fallback if window.open is blocked
    if (!newWindow) {
        // Create a temporary link element and click it
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Scroll to patterns section
function scrollToPatterns() {
    document.getElementById('patterns').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Smooth scrolling for the page
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading states for better UX
function showLoading(container) {
    container.innerHTML = '<div class="loading">Loading patterns...</div>';
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe pattern cards when they're rendered
function observeElements() {
    const cards = document.querySelectorAll('.pattern-card');
    cards.forEach(card => observer.observe(card));
}

// Auto-hide navbar on scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});