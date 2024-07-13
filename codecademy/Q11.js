// 11. Create a function that finds the maximum number in an array
// In this challenge, you’ll write a function that takes an array of numbers as an input and returns the largest number in that array. Test your function with various arrays, including arrays with negative numbers, decimals, and all positive integers.

var a = [4,88,54,2,78,5,98]
var max = a[0];
var len = a.length;
for(var i = 1; i < len;i++){
    if(a[i] > max){
        max = a[i];
    }
}
console.log(max);