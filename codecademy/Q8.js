// 8. Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed. Think about if you were tasked with cleaning up customer data at your job. You could scale this function to clean up specific fields of data, such as zip codes.

// Function to remove all spaces from a string
function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}


var originalString = "Hello World! How are you today?";
var cleanedString = removeSpaces(originalString);

console.log("Original String:", originalString);
console.log("Cleaned String:", cleanedString);
