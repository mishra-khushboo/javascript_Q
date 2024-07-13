// 6. Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays. Try one with all integers, another with negative numbers, and another with decimals.
var a = [4, 8, 61, 0, 7];

a.sort(function(a, b) {
    return a - b;
});

console.log(a); 


