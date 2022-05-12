// Fundamentals To Do 1

// OK Ninjas-in-training, use your new knowledge. Can you solve these?



// Setting and Swapping

// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

// let myNumber = 42;
// let myName = "Kobi";
// myNumber = myName;
// myName = myNumber;
// console.log(myNumber, myName);

// Print -52 to 1066

// Print integers from -52 to 1066 using a FOR loop.

// for (var num = -52; num <= 1066; num++) {
//     console.log("The number is ", num);
// }
// console.log("We are done. Goodbye world!");

// Don’t Worry, Be Happy

// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

// function beCheerful() {
//     for (let i = 1; i <= 98; i++) {
//         console.log("good morning " + i);
//     }
// }
// beCheerful();

// for (let i = 0; i <= 98; i++) {
//     console.log("good morning " + i)
// }

// Multiples of Three – but Not All

// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// console.log("hello")

// function multiplesOfThreeButNotAll() {
//     for (var i = -300; i < 1; i += 3) {
//         if (i == -6 || i == -3) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// multiplesOfThreeButNotAll();

// multiplesOfThreeButNotAll()

// Printing Integers with While

// Print integers from 2000 to 5280, using a WHILE.

// function printingIntegersWithWhile() {
//     var i = 2000;
//     while (i < 5281) {
//         console.log(i);
//         i++;
//     }
// }

// printingIntegersWithWhile()

// You Say It’s Your Birthday

// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

// function birthday(month, day) {
//     if (month == "dec" && day == 11) {
//         console.log("how did you know?");
//     } else {
//         console.log("just another day...");
//     }
// }
// birthday("dec", 11);

// Leap Year

// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.



// Print and Count

// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

// function printAndCount() {
//     for (let i = 512; i < 4096; i += 5) {
//         console.log(i);
//     }
// }
// printAndCount();

// Multiples of Six

// Print multiples of 6 up to 60,000, using a WHILE.

// function multOfSix() {
//     let i = 6;
//     while (i < 6000) {
//         console.log(i *= 6);
//         i++;
//     }
// }
// multOfSix();

// Counting, the Dojo Way

// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

// function countingTheDojoWay() {
//     for (var i = 1; i < 101; i++) {
//         if (i % 10 == 0) {
//             console.log("Dojo");
//         }
//         else if (i % 5 == 0) {
//             console.log("Coding");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// console.log(countingTheDojoWay);

// countingTheDojoWay()

// What Do You Know?

// Your function will be given an input parameter incoming. Please console.log this value.



// Whoa, That Sucker’s Huge…

// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function huge() {
    sum = 0
    let i = 0
    for (let i = -300; i < 300; i++) {
        if (i % 2 == 0) {
            return sum;
        }
        console.log(sum += i);
    }
}
huge();


// Countdown by Fours

// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.



// Flexible Countdown

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

// function flexibleCountdown(lowNum, highNum, mult) {
//     for (var i = highNum; i > lowNum; i -= mult)
//         console.log(i);
// }

// flexibleCountdown(2, 9, 3)

// The Final Countdown

// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).