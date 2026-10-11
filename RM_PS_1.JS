//PROBLEM 1. SOLVE ME FIRST

var solveMeFirst= function(a,b){
    return a+b; 
}

//PROBLEM 2. MULTIPLY

var multiply= function(a,b) {
    return a * b; 
}

//PROBLEM 3. EVEN OR ODD

var evenOrOdd= function(number){
    return number % 2 === 0 ? "Even" : "Odd"; 
}

//PROBLEM 4. Return Negative

var makeNegative = function(number){
    return -Math.abs(number); 
}

//PROBLEM 5. OPPOSITE NUMBER

var opposite = function(number){
    return -number; 
}

//PROBLEM 6. SIMPLE ARRAY SUM

var simpleArraySum= function(ar){
    return arr.reduce((sum, number) => sum+number, 0)
}

//PROBLEM 7. SLEEPIN
var sleepIn= function(weekday, vacation){
    return !weekday || vacation; 
}

//PROBLEM 8. MONKEY TROUBLE

var monkeyTrouble = function(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
};

//PROBLEM 9. SUM DOUBLE
var sumDouble = function(a,b){
    return a===b? 2*(a+b): a+b; 
}


//PROBLEM 10. DIFF21
var diff21 = function(n){
    return Math.abs(n>21? 2*(n-21): n-21); 
}