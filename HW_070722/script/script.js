// Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).
// Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).
// const photos = [ 'http://zhivotnue.ru/image/soxranenie_zhivotnux/soxranenie_barsuka/1.jpg', 'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/nufaydlend/1.jpg', 'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/kyrixaar/1.jpg', 'http://zhivotnue.ru/image/dicie_zhivotnue/loshadi/xeke/1.jpg', 'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/bobbteil/1.jpg']

// Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей.
const btn_size_elem = document.querySelector('.btn_size');

let w = '30px';
let h = '30px';

btn_size_elem.style.width = w; 
btn_size_elem.style.height = h;

btn_size_elem.addEventListener('click', () =>{
    btn_size_elem.style.width = w = parseInt(w) + 10 +'px';
    btn_size_elem.style.height = h = parseInt(h) + 10 +'px';
})

// Cоздать кнопку, у которой при клике рандомно меняется цвет заднего фона
const btn_color_elem = document.querySelector('.btn_color');

btn_color_elem.addEventListener('click', () =>{
    btn_color_elem.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
})

// Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).
const btn_bones_elem = document.querySelector('.btn_bones');


// Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).

const photos = 
[ 
'http://zhivotnue.ru/image/soxranenie_zhivotnux/soxranenie_barsuka/1.jpg', 
'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/nufaydlend/1.jpg', 
'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/kyrixaar/1.jpg', 
'http://zhivotnue.ru/image/dicie_zhivotnue/loshadi/xeke/1.jpg', 
'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/bobbteil/1.jpg'
]





