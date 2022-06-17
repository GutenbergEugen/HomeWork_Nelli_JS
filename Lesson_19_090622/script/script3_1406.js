const btn_incr_elem = document.querySelector('.btn_incr');
const btn_decr_elem = document.querySelector('.btn_decr');
let value = 0;

function render(){
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
// чтобы стоял ноль до начала обработки

const product_form_elem = document.querySelector('.product_form');

// product_form_elem.addEventListener('submit', function(event){
//     event.preventDefault();

const products = [];

product_form_elem.addEventListener('submit', event => {
    event.preventDefault();
    const {title, price} = event.target;
    products.push({
        title: title.value,
        price: price.value 
    })
    title.value = '';
    price.value = '';



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

