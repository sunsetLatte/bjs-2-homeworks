"use strict";
 
// Задача 1

function solveEquation(a, b, c) { 
    const d = b * b - 4 * a * c; 
  
    if (d > 0) { 
        const root1 = (-b + Math.sqrt(d)) / (2 * a); 
        const root2 = (-b - Math.sqrt(d)) / (2 * a); 
        return [root1, root2]; 
    } else if (d === 0) { 
        const root = -b / (2 * a); 
        return [root]; 
    } else { 
        return []; 
    } 
} 
  

// Проверка тесткейсов

// Case1 – 2 корня: 
let a = 1; 
let b = 5; 
let c = 4; 


let resultRoots = solveEquation(a, b, c); 
console.log("Корни квадратного уравнения1:", resultRoots);

// Case2 – 1 корень: 
 a = 1; 
 b = 2; 
 c = 1; 
resultRoots = solveEquation(a, b, c); 
console.log("Корни квадратного уравнения2:", resultRoots);

// Case3 – пустой массив: 
a = 1; 
b = 2; 
c = 10; 
resultRoots = solveEquation(a, b, c); 
console.log("Корни квадратного уравнения3:", resultRoots);



// Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
             return false;
  } else {
      
       const percentMounth = percent/100/12;
       const creditBody = amount - contribution;  
       const payment =  creditBody * (percentMounth + (percentMounth / ((Math.pow((1 + percentMounth), countMonths)) - 1)));
       const totalSum = (payment * countMonths).toFixed(2);

             return +totalSum;
    }
}


// Проверка тесткейсов

// Case1
let percent = 10;
let contribution = 0;
let amount = 50_000;
let countMonths = 12;


let resultBank = calculateTotalMortgage(percent, contribution, amount, countMonths); 
console.log("Результат1: ", resultBank);

// Case2
percent = 10;
contribution = 1000;
amount = 50_000;
countMonths = 12;

resultBank = calculateTotalMortgage(percent, contribution, amount, countMonths); 
console.log("Результат2: ", resultBank);

// Case3
percent = 10;
contribution = 20_000;
amount = 20_000;
countMonths = 48;

resultBank = calculateTotalMortgage(percent, contribution, amount, countMonths); 
console.log("Результат3: ", resultBank);

// Case4
percent = 10;
contribution = 0
amount = 10_000;
countMonths = 36;

resultBank = calculateTotalMortgage(percent, contribution, amount, countMonths); 
console.log("Результат4: ", resultBank);

// Case5
percent = 15;
contribution = 0
amount = 10_000;
countMonths = 36;

resultBank = calculateTotalMortgage(percent, contribution, amount, countMonths); 
console.log("Результат5: ", resultBank);