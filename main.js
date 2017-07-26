// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    }
}


max(10, 5);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    }
}

maxOfThree(100, 50, 200);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u", "y"]

    if (vowels.indexOf(char) >= 0) {
        return true;
    } else {
        return false;
    }
    // for (var i = 0; i < vowels.length; i++) {
    //     if (char === vowels[i]) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}

isVowel("s");
isVowel("a");
isVowel("e");
isVowel("t");


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2) {
    return num1 + num2;
}

sum(100, 50);


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

avg(30, 20, 10);


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {
    return string.length;
}

getLength("Tacos");

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2) {
    if (num2 > num1) {
        return true;
    } else {
        return false;
    }
}

greaterThan(10, 100);

greaterThan(50, 10);



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
    return "Hello, " + name + "!";
}

greet("Dakota");


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1, word2, word3, word4) {
    sentence = "There once was a " + word1 + " that " + word2 + " around the " + word3 + " only everyday on its " + word4;
    return sentence;
}


madlib("taco", "swam", "lion", "skateboard");
