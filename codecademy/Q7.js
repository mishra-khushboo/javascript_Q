// 7. Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

var a = [1, -9 , 9, -8 ,8,-6]
console.log(a);
var len = a.length;
for (var i = 0; i < len; i++ ){
    if( a[i] < 0){
        a.splice(i,1);
        i --;
        len --;
    }
}
console.log(a);