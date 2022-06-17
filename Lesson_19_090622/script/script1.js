/*

Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

Пример: ({ 'key': 'property' }, 'key') => 'property'

*/
// const obj = [
//     {
//         name: 'значение',
//         age: 27,
//     }
// ]

// function objValue(obj, key){
//     return obj[key]
// }
// console.log(objValue({ 'key': 'property' }, 'key')) // => 'property'
// console.log(objValue({ 'name': 'Nelli' }, 'name')) // => 'Nelli'


// const obj1 = {
//     firstName: 'Olga',
//     age: 27
// }

// console.log(obj1.firstName);
// console.log(obj1['firstName']);


// 1. Пройдитесь по массиву с объектами циклом forEach и 
// выведите каждый элемент в консоль


const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
  ]
//вывести имя
//   users.forEach(function(elem, index, arr){
//         console.log(elem.first_name, elem.last_name);
//         console.log(elem['first_name']); //2 способ
//         console.log(`имя пользователя: ${elem.first_name} ${elem.last_name}. Возраст: ${elem.age}`);//3 способ

//   })

//   Сформируйте массив, состоящий только из имен и фамилий пользователей. 
//   Выведите результат в консоль.

// const newUser = users.map(function(elem){
//     return (`${elem.first_name} ${elem.last_name}`)
//     return (`${elem['first_name']}`) //2 способ
// })
// console.log(newUser); 

// Сформируйте массив из совершеннолетних пользователей и зп > 700. 
// И выведите в консоль результат в формате: 
// <Имя> <Фамилия> (<возраст>): <зарплата>.

const adult = console.log(users
    .filter(function(elem){
    return elem.age >= 18 && elem.salary >=700;
    })
    .map(function({first_name, last_name, age, salary}){
    return `${first_name}, ${last_name} (${age}): ${salary}`
    })
)




