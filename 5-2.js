// To string (какой-либо тип данных переводит в строку)
//1) Через команду string - самый старый и редкоиспользуемый способ
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2 Конкатенация
console.log(typeof((5 + ''))); //Сложение со строкой - это строка

//Пример 1
const num = 5;

console.log("https:vk.com/catalog/" + num);
//Пример 2
const fontSize = 29 + 'px';


// To number (что-либо переводится в число)
//1) Через команду Number
console.log(typeof(Number/'4')));
//2) Унарный плюс
console.log(typeof(+'5'));
//3) Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
console.log(typeof(parseInt('15px', 10)));
//Пример
let ans = +prompt("Hello", "");
//Все, что мы получаем от пользователя - это строка и часто нам нужно их преобразовывать в строки

//To boolean

// 0, '', null, undefined, NaN - это значение false

//1 способ -нативное преобразование
//Пример сначала элемента нет, потом появляется его значение)
let sd = null;
if (sd) {
    console.log('Working...')
};

sd = 4;
if (sd) {
    console.log('Working...')
};

//2) реже, через команду boolean
console.log(typeof(Boolean('4')));

//3) еще реже- через отрицание '!!'
console.log(typeof(Boolean(!!'444444')));