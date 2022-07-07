//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.

const user_add_form_elem = document.querySelector('.user_add_form');

const users = [];

function render(){
    const container = document.querySelector('.user-container')
    container.innerText = '';
    users.forEach(({name, lastname, age, rate, days, email, photo, progress}) => {
        const user = document.createElement('div');
        const nameElem = document.createElement('p');
        const lastnameElem = document.createElement('p');
        const ageElem = document.createElement('p');
        const rateElem = document.createElement('p');
        const daysElem = document.createElement('p');
        const salaryElem = document.createElement('p');
        const emailElem = document.createElement('a');
        const photolElem = document.createElement('img');

        const progressContainer = document.createElement('div');
        const progressLine = document.createElement('div');
        const progressValue = document.createElement('p');
       
        nameElem.innerText = name;
        lastname.innerText = lastname;
        ageElem.innerText = age;
        rateElem.innerText = rate;
        daysElem.innerText = days;
        salaryElem.innerText = rate * days;
        emailElem.innerText = email;
        progressValue.innerText = progress + '%';
        

        emailElem.setAttribute('href', `mailto: ${email}`);
        photolElem.setAttribute('src', photo);
        photolElem.setAttribute('alt', 'нет фото');

        progressContainer.classList.add('progress-container');
        progressLine.classList.add('progress-line');
        progressValue.classList.add('progress-value');

        progressContainer.append(progressLine, progressValue);
        user.append(nameElem, lastnameElem, ageElem, rateElem, daysElem, salaryElem, emailElem, photolElem, progressContainer);
        container.append(user);
        user.classList.add('user-class');
    })
}

user_add_form_elem.addEventListener('submit', (event) => {
    event.preventDefault();
    const {name, lastname, age, rate, days, email, photo, progress} = event.target;
    users.push({
        name: name.value,
        lastname: lastname.value,
        age: age.value,
        rate: rate.value,
        days: days.value,
        email: email.value,
        photo: photo.value,
        progress: progress.value,
    });
    name.value = '';
    lastname.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    email.value = '';
    photo.value = '';
    progress.value = '';

    render();
});
