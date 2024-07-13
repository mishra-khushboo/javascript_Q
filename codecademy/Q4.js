// 4. Calculate the sum of numbers within an array
// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

// You could also try using arrays of different lengths. If you’re feeling comfortable with this, try the slightly more challenging bonus challenge below.

// Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.

var a = [1,2,3,4,5]
var sum = 0;
a.forEach(function(val){
    sum += val
})
console.log(sum);

var table = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
var rowSum = 0;
var colSum = 0;
var row = 2;
var col = 1;

for(let i = 0; i<3; i ++){
    rowSum += table[row][i];
}
for(let i = 0; i<3; i ++){
    colSum += table[i][col];
}

console.log(rowSum);
console.log(colSum);