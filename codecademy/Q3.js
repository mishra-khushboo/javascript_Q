// 3. Create a length converter function
// Creating a function is a skill that’ll be useful in many settings, and as you progress, you’ll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.

// Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

//1 mile = 1.60934 kilometers

function kiloToMiles(val){
    return val / 1.60934 ;
}
function milesToKilo(val){
    return val * 1.60934 ;
}
console.log(kiloToMiles(15));
console.log(milesToKilo(15));