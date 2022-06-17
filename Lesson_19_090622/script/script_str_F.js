//СТРЕЛОЧНЫЕ ФУНКЦИИ

function handler(a, b){
    return a+b
}

const handler_0 = function(a, b){
    return a+b
};

//ч/з стрелочную функцию
const handler_1 = (a, b) => {
    return a+b
};
const handler_2 = (a, b) => a+b;

const handler_3 = (a, b) => {
    return {a, b};
}

const handler_4 = (a, b) => ({a, b});

const handler_5 = a => a**2;

console.log(handler(12, 43));
console.log(handler_0(12, 43));
console.log(handler_1(12, 43));
console.log(handler_2(12, 43));
console.log(handler_3(12, 43));
console.log(handler_4(12, 43));
console.log(handler_5(2));

// описать функцию, которая получает два числа и 
// возвращает наибольшее

const handler_6 = (a, b) => (a > b) ? a : b; 

console.log(handler_6(4,6));
console.log(handler_6(8,6));

// описать функцию, которая получает в качестве аргумента число и 
// возвращает модуль числа

const handler_7 = a => (a > 0) ? a : -a;
console.log(handler_7(-4));
console.log(handler_7(4));

