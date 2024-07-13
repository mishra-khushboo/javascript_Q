// 10. Return the number of vowels in a string
// Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript is fun")); 


