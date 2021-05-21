//Task 1

// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

// Note:

// - Round up your answers to 4 decimal places (hint: use the toFixed method)
// - C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
// - if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
//     `${parameter} is not a valid number but a/an ${parameter's type}.`
// You can use the following cases as guides:

// - convertFahrToCelsius(0) should return `-17.7778`
// - convertFahrToCelsius("0") should return `-17.7778`
// - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
// - convertFahrToCelsius({temp: 0}) should return `{"temp": 0} is not a valid number but a/an object.`

function convertFahrToCelsius(params) {
  if (typeof params === "string" || typeof params === "number") {
    let num = parseInt(params);
    let result = (num - 32) / 1.8;
    let finalresult = result.toFixed(4);
    return `${finalresult}`;
  } else if (Array.isArray(params)) {
    return `[${params}] Is not valid parameter but a/an array.`;
  } else if (typeof params === "object") {
    const result = JSON.stringify(params);
    return `${result} Is not a valid number but a/an object`;
  }
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });

//  2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

// Note:

// - for numbers that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed.
// Use the following cases as guides:

// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`

function check(num) {
  // Function with number(whole) as the only parameter
  // body...

  let validnum = Number(num);

  // Checks if it's a number
  if (isNaN(validnum)) {
    return (`invalid parameter: "${num}"`);
  }

  let arr = []; // Declaring an empty array
  for (var i = 1; i <= num; i++) {
    // loop through the given number
    arr.push(i); //Push the numbers into the empty arr
    for (var i = 0; i < arr.length; i++) {
      // loop through th new array
      // Test for the conditions

      if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
        arr[i] = "yu-gi-oh";
      } else if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
        arr[i] = "yu-gi";
      } else if (arr[i] % 2 == 0 && arr[i] % 5 == 0) {
        arr[i] = "yu-oh";
      } else if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
        arr[i] = "gi-oh";
      } else if (arr[i] % 2 == 0) {
        arr[i] = "yu";
      } else if (arr[i] % 3 == 0) {
        arr[i] = "gi";
      } else if (arr[i] % 5 == 0) {
        arr[i] = "oh";
      }
     
      else {
      	arr[i] = arr[i];
      }
    }
   
  }
 return arr
 
}
check(10);
check("5"); // calling the functions
check("fizzbuzz is meh");
