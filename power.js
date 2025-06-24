function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Test examples
console.log(isPowerOfTwo(8));  // Output: true
console.log(isPowerOfTwo(6));  // Output: false
