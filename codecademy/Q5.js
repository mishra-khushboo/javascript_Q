// 5. Create a function that reverses an array
// This challenge is particularly helpful if you’re planning to become a Data Scientist. Manipulating data is a significant part of the role, and building the foundations now will help you later down the road when you’re working with large databases.

// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.

var a= [1,2,3,4,5];
console.log(a);
var len = a.length;

var i =0;
var j = len - 1;
while( i < j){
    var temp = a[i] ;
    a[i] = a[j];
    a[j] = temp;
    i ++;
    j --;  
}

console.log(a);