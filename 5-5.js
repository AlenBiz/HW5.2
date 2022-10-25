//1 вариант
let value1 = 1;
let rand = (Math.random() * 100);
console.log(rand);

let value2 = Math.floor(rand);
console.log(value2);
let result = value1 + value2 / 5 + 1;
console.log(result);


//2 варинат
let value1 = 1;
let value2 = Math.floor(Math.random() * 100);

console.log(value2);

let result = value1 + value2 / 5 + 1;
console.log(result);
/*По приоритету выполнения:все как в математике, сначала умножение/деление, потом сложение */