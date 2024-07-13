// 9. Return a Boolean if a number is divisible by 10
// Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.

// function check(val){
//     var result = val % 10;
//     if( result == 0){
//         return true ;
//     }
//     else{
//         return false ;
//     }
// }

function check(val) {
    return val % 10 === 0;
}

console.log(check(20));
console.log(check(25)); 
