{ //чтобы не было конфликта имен этот блок кода обернем в фигурные скобки
const btn_incr_elem = document.querySelector('.btn_incr');
const btn_decr_elem = document.querySelector('.btn_decr');
let value = 0;

const render = function(){
    document.querySelector('.result').innerText = value; 
}
// берет класс .result и выводит в него переменную value 

btn_incr_elem.addEventListener('click', function(){
    value++;
    render();
})

btn_decr_elem.addEventListener('click', function(){
    value--;
    render();
})

render(); 
} //чтобы не было конфликта имен этот блок кода обернем в фигурные скобки


// чтобы стоял ноль до начала обработки

const product_form_elem = document.querySelector('.product_form');

// product_form_elem.addEventListener('submit', function(event){
//     event.preventDefault();

const products = []; //создаем пустой массив

function render(){ //объявляем функцию которая ссылается на элемент HTML produts-container
    const container = document.querySelector('.product-container');
    container.innerText = ''; //добавляем пустую строчку чтобы очистить форму и таким образом избежать дублей при вводе второго значения в форму
    products.forEach(({title, price}) =>{
        const product = document.createElement('div'); //формируем контейнер
        const titleElem = document.createElement('p');
        const priceElem = document.createElement('p');

        titleElem.innerText = title; //записываем текст
        priceElem.innerText = price;
        
        product.append(titleElem, priceElem); //добавляем product
        container.append(product) //добавляем в контейнер
    })
}



product_form_elem.addEventListener('submit', event => { //добавляем обработчик события > Когда мы отправляем форму выполняй следующие действия 
    event.preventDefault(); //отменяем дефолтное поведение (не отправлять на сервер)
    const {title, price} = event.target; //достаем target ссылка на объект с которым произошло событие
    products.push({
        title: title.value, //достаем значение и формируем новый объект и добавляем в массив
        price: price.value 
    })
    title.value = ''; //очищаем форму
    price.value = ''; //очищаем форму
    render(); //вызываем функцию render чтобы он перерисовал форму в HTML
    



    //по умолчанию форма сразу уходит на указанный адрес сервера 
    // и страница перезагружается, чтобы отменить это дефолтное поведение 
    // добавили этот процесс

    // const title = document.querySelector('#title');
    // const price = document.querySelector('#price');

//можно сделать без querySelector('#title') через значение атрибута name (в HTML)
    // const title = product_form_elem.title;
    // const price = product_form_elem.price; 

    //можно короче через this  
    // const title = this.title;
    // const price = this.price;

    //можно еще короче через деструктивное присвоенеи
    // const {title, price} = this;

      //свойство value позволяет считывать значение title
    // console.log(title.value);
    // console.log(price.value);
})

