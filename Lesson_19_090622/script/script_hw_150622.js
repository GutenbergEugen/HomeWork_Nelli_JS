// Карточки из массива объектов
// Создать скрипт, который формирует карточки с данными 
// пользователей из данного массива объектов.


const users = [
{
"id": 1,
"email": "michael.lawson@reqres.in",
"first_name": "Michael",
"last_name": "Lawson",
"avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
"id": 2,
"email": "lindsay.ferguson@reqres.in",
"first_name": "Lindsay",
"last_name": "Ferguson",
"avatar": "https://reqres.in/img/faces/8-image.jpg"
},
{
"id": 3,
"email": "tobias.funke@reqres.in",
"first_name": "Tobias",
"last_name": "Funke",
"avatar": "https://reqres.in/img/faces/9-image.jpg"
}
];

const rootElem = document.querySelector('#root');

users.forEach(function({id, email, first_name, last_name, avatar}){
    const container = document.createElement('div');
    const idElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const firstNameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const avatarElem = document.createElement('img');

        idElem.innerText = `ID: ${id}`;
        emailElem.innerText = `email: ${email}`;
        firstNameElem.innerText = `First name: ${first_name}`;
        lastNameElem.innerText = `Last name: ${last_name}`;
        
    emailElem.setAttribute('href', `mailto:${email}`);

    avatarElem.setAttribute('src', avatar);
    avatarElem.setAttribute('alt', 'photo of worker');


    container.append(idElem, emailElem, firstNameElem, lastNameElem, avatarElem);
    rootElem.append(container);
})