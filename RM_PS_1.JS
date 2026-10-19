//PROBLEM 1. SOLVE ME FIRST

var solveMeFirst = function (a, b) {
  return a + b;
};

//PROBLEM 2. MULTIPLY

var multiply = function (a, b) {
  return a * b;
};

//PROBLEM 3. EVEN OR ODD

var evenOrOdd = function (number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

//PROBLEM 4. Return Negative

var makeNegative = function (number) {
  return -Math.abs(number);
};

//PROBLEM 5. OPPOSITE NUMBER

var opposite = function (number) {
  return -number;
};

//PROBLEM 6. SIMPLE ARRAY SUM

var simpleArraySum = function (ar) {
  return ar.reduce((sum, number) => sum + number, 0);
};

//PROBLEM 7. SLEEPIN
var sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};

//PROBLEM 8. MONKEY TROUBLE

var monkeyTrouble = function (aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile);
};

//PROBLEM 9. SUM DOUBLE
var sumDouble = function (a, b) {
  return a === b ? 2 * (a + b) : a + b;
};

//PROBLEM 10. DIFF21
var diff21 = function (n) {
  return Math.abs(n > 21 ? 2 * (n - 21) : n - 21);
};

// PROBLEM 11. parrotTrouble

var parrotTrouble = function (talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

//PROBLEM 12. MAKES10

var makes10 = function (a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

//PROBLEM 13. nearHundred

var nearHundred = function (n) {
  return Math.abs(n-100)<=10 || Math.abs(n-200)<=10; 
};

//PROBLEM 14. POSnEG

var posNeg = function (a, b, negative) {
  return negative ? a < 0 && b < 0 : (a < 0 && b > 0) || (a > 0 && b < 0);
};

//PROBLEM 15: notString

var notString = function (str) {
  return str.startsWith("not") ? str : "not " + str;
};

//PROBLEM 16: compare the Triplets

var compareTriplets = function (a, b) {
  let pointA = 0;
  let pointB = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      pointA++;
    } else if (a[i] < b[i]) {
      pointB++;
    }
  }

  return [pointA, pointB];
};

// PROBLEM 17: A VERY BIG SUM

var aVeryBigSum = function (ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};

//PROBLEM 18: STAIRCASE

var staircase = function (n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }
    for (let k = 0; k < i; k++) {
      result += "#";
    }
    if (i < n) {
      result += "\n";
    }
  }
  return result;
};

//PROBLEM 19: GRADING STUDENTS

var gradingStudents = function (grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      continue;
    }
    let nextMultiple = Math.ceil(grades[i] / 5) * 5;

    if (nextMultiple - grades[i] < 3) {
      grades[i] = nextMultiple;
    }
  }
  return grades;
};

//PROBLEM 20: TIME CONVERSION

var timeConversion = function (s) {
  let period = s.slice(-2);
  let hour = Number(s.slice(0, 2));
  let rest = s.slice(2, 8);

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }
  return String(hour).padStart(2, "0") + rest;
};

//PROBLEM 21: STRING REPEAT

var repeatStr = function (n, s) {
  return s.repeat(n);
};

//PROBLEM 22: REVERSED STRING

var solution = function (str) {
  return str.split("").reverse().join("");
};

//PROBLEM 23: SUM OF POSITIVE

var positiveSum = function (arr) {
  return arr.reduce((sum, num) => {
    return num > 0 ? sum + num : sum;
  }, 0);
};

//PROBLEM 24. Grasshopper - Summation

var summation = function (num) {
  return (num * (num + 1)) / 2;
};

//PROBLEM 25: CONVERT A BOOLEAN TO A STRING

var booleanToString = function (b) {
  return b.toString();
};
