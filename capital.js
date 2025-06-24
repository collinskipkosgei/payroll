function capitalizeWords(inputString) {
    return inputString.split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
}
// Test example
console.log(capitalizeWords("hi"));  // Output: "Hi"