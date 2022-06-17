// {
// // 1) найти параграф и считать содержимое
// // 2) найти #root 
// // 3) создать новый параграф и записать в него текст из (1) в верхнем регистре
// // 4) добавить новый параграф в #root


// const pElem = document.querySelector('.main');
// const rootElem = document.querySelector('#root');
// const text = pElem.innerText;

// const newPElem = document.createElement('p');
// newPElem.innerText = text.toUpperCase();
// rootElem.append(newPElem);


// // //запишем объект с двумя переменными:
// const id = 24;
// const name = "Petr";

// const user_1 = {id, name, age: 29};

// console.log(user_1.id);
// console.log(user_1.name);


// // //другой вариант записи:
// const user = {
//     id: id,
//     name: name
// };

// user.age = 29;

// console.log(user.id);
// console.log(user.name);
// console.log(user.age);


// // //3 Вариант:
// class User{
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
// }
// const user_2 = new User(12, "Olga");
// }

const data = [
    {
        id: 1,
        title: 'velo',
        price: 300
    },
    {
        id: 2,
        title: 'skate',
        price: 100
    },
    {
        id: 2,
        title: 'skate',
        price: 100
    },
    {
        id: 2,
        title: 'skate',
        price: 100
    },
    {
        id: 2,
        title: 'skate',
        price: 100
    },
    {
        id: 3,
        title: 'ski',
        price: 50
    }
];

// console.log(data);

const rootElem = document.querySelector('#root');

data.forEach(function({id, title, price}){
    const container = document.createElement('div');
    const idElem = document.createElement('p');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');

    // const {id, title, price} = product;

    // const id = product.id;
    // const title = product.title;
    // const price = product.price;


    idElem.innerText = id;
    titleElem.innerText = title;
    priceElem.innerText = price;

    container.classList.add('product'); //clasList - свойство которое позволяет обратиться к классу объекта
    idElem.classList.add('id');
    titleElem.classList.add('title');
    priceElem.classList.add('price');

    container.append(idElem, titleElem, priceElem); //добавляем в элемент другой элемент (набор элементов)
    rootElem.append(container);
})


