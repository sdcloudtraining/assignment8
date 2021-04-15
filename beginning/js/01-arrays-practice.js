// // //STEP 1
// // var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill"]
// // console.log (moviesArray[1]);
// // //STEP 2

// // var movies = new Array(5);
// // movies[0] = "Braveheart";
// // movies[1] = "The Money Pit";
// // movies[2] = "16 Candles";
// // movies[3] = "Ransom";
// // movies[4] = "A View to a Kill";

// // console.log (movies[0]);
// //STEP 3

// var movies = new Array(5);
// movies[0] = "Braveheart";
// movies[1] = "The Money Pit";
// movies[2] = "16 Candles";
// movies[3] = "Ransom";
// movies[4] = "A View to a Kill";

// movies[2] = "Home 2009";




// console.log (movies.length);


// //STEP 4

// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill"]
// delete moviesArray[0];
// console.log (moviesArray);




// //STEP 5


// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles"]

// for (let i in moviesArray) {

// console.log (moviesArray[i]);
// }



// //STEP 6


// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles"]

// for (let i of moviesArray) {

// console.log (moviesArray[i]);
// }


// //STEP 7

// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles"]

// moviesArray.sort();
// for (let i of moviesArray) {

    
// console.log (moviesArray[i]);
// }


// //STEP 8


// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles", ["Unbreakable", "Little Women", "The Birdcage"]]



// console.log ("Movies I like:");
// console.log ("\n");

// for (let i =0; i<5; i++) {
// console.log(moviesArray[i]);
// console.log("\n");
// }

// console.log("...")
// console.log(`\n`);

// console.log ("Movies I regret watching:");
// console.log ("\n");

// for (let j =0; j<3; j++) {
// console.log(moviesArray[5][j]);
// console.log("\n");
// }

// console.log("...")
// console.log(`\n`);


// //STEP 9

// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles", ["Unbreakable", "Little Women", "The Birdcage"]]

// moviesArray.concat(moviesArray, moviesArray[8]);

// moviesArray.reverse();
// moviesArray.sort();
// console.log(moviesArray);
// //STEP 10


// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles", ["Unbreakable", "Little Women", "The Birdcage"]]
// var popped = moviesArray.pop();
// console.log(popped);
// //STEP 11

// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles", ["Unbreakable", "Little Women", "The Birdcage"]]

// var shifted = moviesArray.shift();
// console.log(shifted);

// //STEP 12
// var moviesArray = ["Braveheart", "The Money Pit", "16 Candles", "Ransom", "A View to a Kill", "Meet Joe Black", "Teenaged Mutuant Ninja Turtles", ["Unbreakable", "Little Women", "The Birdcage"]]

// var index1 = moviesArray[8].findIndex("Unbreakable");
// var index2 = moviesArray[8].findIndex("Little Women");
// var index3 = moviesArray[8].findIndex("The Birdcage");

// moviesArray[5].splice(0, "Gattica");
// moviesArray[5].splice(1, "Life Stinks");
// moviesArray[5].splice(2, "Mr. Destiny");

// //STEP 13
// var moviesArray = [["Meet Joe Black", 0], ["Braveheart", 1], ["The Money Pit", 2], ["16 Candles", 3], ["Ransom", 4], ["A View to a Kill", 5]];
// var moviesArray2 = []
// for (let i of moviesArray){
// moviesArray.filter(i)
//     if (typeof moviesArray[i][0]== "string"){
//     moviesArray2.push[moviesArray[i][0]];
//   }
// }

// console.log(moviesArray2);

// //STEP 14

// employeesArray =["Jack", "Jill", "Bill"]


// function showEmployee(arr) {

//     for (let i of arr) {
//         console.log(arr[i]);
//     }

// }

// console.log ("Employees");
// console.log('\n')

// showEmployee(employeesArray);



// //STEP 15

// function filterArray1(arr) {
// resultArray.push(arr.filter(false));
// }
// function filterArray2(arr) {
// resultArray.push(arr.filter(null));
// }
// function filterArray3(arr) {
// resultArray.push(arr.filter(0));
// }
// function filterArray4(arr) {
// resultArray.push(arr.filter(""));
// }

// //STEP 16

// //STEP 17

// var numbersArray = [123, 456, 789]

// var largest = Math.max.apply( Math, numbersArray);
// //from stackoverflow



