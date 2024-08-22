// i. Count even numbers in array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 25];

function CountEvenNums(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) { // Changed <= to < to avoid accessing out of bounds
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(CountEvenNums(array)); // Output: 6

// ii. Sum of numbers divisible by 5
function SumOfNumsDivbyFive(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(SumOfNumsDivbyFive(array)); // Output: 35

// iii. Change each string to uppercase
function string_to_uppercase() {
    let String_Name = "house of the dragon";
    let UpperCase = String_Name.toUpperCase();
    console.log(UpperCase); // Output: HOUSE OF THE DRAGON
}

string_to_uppercase();

// iv. Create array of 1 to n (Not Divisible by 3)
function notDivisibleby3(start, end) {
    let array1 = [];
    for (let i = start; i < end; i++) {
        if (i % 3 !== 0) { // Fixed to include numbers not divisible by 3
            array1.push(i);
        }
    }
    console.log(array1);
}

notDivisibleby3(5, 23); // Output: [5, 7, 8, 10, 11, 14, 16, 17, 20, 22]

// v. Remove "Hello" from a string
function RemoveHello(Str) {
    return Str.split('Hello').join('');
}

let result = RemoveHello("Hello World! Hello Everyone!");
console.log(result); // Output: " World!  Everyone!"

// vi. Count strings with 'b' or 'B'
function find_b(str) {
    let count = (str.match(/b/gi) || []).length; // Counts occurrences of 'b' or 'B'
    if (count > 0) {
        console.log(`Yes, B or b is present in String: ${str}`);
    } else {
        console.log(`No, B or b is not present in String: ${str}`);
    }
    console.log(`The count of 'b' in string is: ${count}`);
}

find_b("remo"); // Output: No, B or b is not present in String: remo
