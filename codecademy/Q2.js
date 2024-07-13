// 2. Print a table containing multiplication tables
// Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

// let maxNumber = 10; // You can change this to any number like 12 for a 12 times table

// for (let i = 1; i <= maxNumber; i++) {
//     let row = "";
//     for (let j = 1; j <= maxNumber; j++) {
//         row += (i * j) + "\t"; // Using tab for spacing
//     }
//     console.log(row);
// }


for(var i = 1;i<=10;i++){
    var row = "";
    for(var j = 1;j<=10;j++){
        row += i*j + "\t";

    }
    console.log(row);
}
    