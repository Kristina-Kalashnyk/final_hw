//Анімація завантаження сторінки 5 сек.
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 5000);
}
//Функція отримання поточного року
function date_time() {
  let current_datetime = new Date();
  let year = current_datetime.getFullYear();
  
  return (year + ' ');
}
//Виведення дати в футері,в блок с id "current_date_time_block"
document.getElementById('current_date_time_block').innerHTML += date_time();

//Плавна поява блоков Blog-News
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
    else change.target.classList.remove('element-show');
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let frstElements = document.querySelectorAll('.first-blog');
let secElements = document.querySelectorAll('.second-blog');

for (let elm of frstElements) {
  observer.observe(elm);
}

for (let elm of secElements) {
  observer.observe(elm);
}

//Прогрес-бар
function progressBar() {
  // Дізнаємось на скільки сторінка прокручена
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  // Висота всієї сторінки
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // Значення у % на скільки прокручена сторінка
  let scrolled = scroll / height * 100;
  // Підставляємо % прокрутки в ширину лініїї
  document.getElementById('progressBar').style.width = scrolled + '%';
}

window.addEventListener('scroll', progressBar);

//Користувач нічого не робить на сторінці
let time,
  loader = document.querySelector('.invisible');

function inactivityTime() {
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);
  document.addEventListener('scroll', resetTimer);

  function resetTimer() {
    loader.classList.add('invisible');
    clearTimeout(time);
    time = setTimeout(fn, 60000)
  }
  function fn() {
    if (confirm('Are you here?') == false)
      location.reload();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  inactivityTime();
});

//Api weather
const apiKey = '8ce0aa8c20fe4afcb35183730231603';
const success = document.querySelector('.success-area');
const form = document.querySelector('#weatherForm');
const input = document.querySelector('#inputCity');

form.onsubmit = function (e) {
  e.preventDefault();
  let city = input.value.trim();
  const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(query).then((response) => {
    return response.json()
  })
    .then((data) => {
      console.log(data);
      const prevCard = document.querySelector('.card');
      
      if (prevCard) prevCard.remove();
      // Розмітка для картки
      const html = `<div class="card">
                            <h2 class="card-city">${data.location.name} <span>${data.location.country}</span></h2>
                            <div class="card-weather">
                                <div class="card-value">${data.current.temp_c}<sup>°c</sup></div>
                                <img class="card-img" src="./src/img/clouds.jpg" alt="Weather">
                            </div>
                            <div class="card-description">${data.current.condition.text}</div>
                        </div>`;

      // Відображення картки на сторінці
      success.insertAdjacentHTML('beforebegin', html);
    });
}

//Дата
let today = new Date();
let now = today.toLocaleDateString('en-US');

//Local Storage
function show() {
  alert(`Саме сьогодні ${now} для користувачів із вказаним ім'ям при оформленні замовлення - знижка 120% :)`);
 
  document.getElementById('snowflakes').style.display = 'block';
  setTimeout(() => {
    document.getElementById('snowflakes').style.display = 'none';
  }, 5000);
}

let forma = document.getElementById('forma');
let subscribe = document.querySelector('#send');

forma.addEventListener('submit', function (e) {
  e.preventDefault();
});

subscribe.addEventListener('click', function (e) {
  let inputName = document.getElementById('name').value;
  let inputSurname = document.getElementById('surname').value;
  let inputEmail = document.getElementById('email').value;

  localStorage.setItem('inputName', inputName);
  localStorage.setItem('inputSurname', inputSurname);
  localStorage.setItem('inputEmail', inputEmail);

  if (inputName === "Krystyna")
    show();
  let firstChar = inputName.substring(0, 1);

  if (firstChar != firstChar.toUpperCase()) {
    alert("Ім'я та прізвище мають бути з великої літери");
  }
  
  if ((inputName == '' ) || (inputSurname == '') || (inputEmail == '')) {
    alert("Поля не мають бути порожніми");
  }
});

//What we do
let firstBtn = document.getElementById('all'),
 secndBtn = document.getElementById('design'),
 thrdBtn = document.getElementById('architecture'),
 lastBtn = document.getElementById('plan'),
 div = document.createElement('div'),
 area = document.getElementById('service-area-buttons'),
 data = '{"inter_design":[{"id": 1,"name":"Interior Design 1","body": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."},{"id": 2,"name":"Interior Design 2","body": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."},{"id": 3,"name":"Interior Design 3","body": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."},{"id": 4,"name":"Interior Design 4","body": "Lorem ipsum dolor amet consectetur adipiscing elit sed  eiusmod tempor incididunt ut labore."},{"id": 5,"name":"Interior Design 5","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."}],"architecture":[{"id": 1,"name":"Architecture 1","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."},{"id": 2,"name":"Architecture 2","body": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."},{"id": 3,"name":"Architecture 3","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."},{"id": 4,"name":"Architecture 4","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."},{"id": 5,"name":"Architecture 5","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."}],"planning":[{"id": 1,"name":"Planning 1","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."},{"id": 2,"name":"Planning 2","body": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."},{"id": 3,"name":"Planning 3","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."},{"id": 4,"name":"Planning 4","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."},{"id": 5,"name":"Planning 5","body": "Lorem ipsum dolor amet consectetur adipiscing elit sedeiusmod tempor incididunt ut labore."}]}',
 mydata = JSON.parse(data),
 count = Object.keys(mydata).length,
 keys = Object.keys(mydata);

div.className = "new-div";

firstBtn.addEventListener('click', function (e) {
  document.getElementById('all-services').hidden = true;

  for (let i = 0; i <= mydata.inter_design.length; i++) {
    const prevCard = document.querySelector('.single-service');
    if (prevCard)
      prevCard.remove();
  }
  for (let i = 0; i <= count; i++) {
    let block = `<div class="single-service d-flex">
                    <div class="service-image me-3 ">
                         <img src="src/img/si${i+1}.png" alt="">
                    </div>
                    <div class="service-text">
                         <h3>${mydata[keys[i]][0].name}</h3>
                         <p>${mydata[keys[i]][0].body}</p>
                    </div>
                 </div>`;

    div.innerHTML += block;
    area.appendChild(div);
  }
});

secndBtn.addEventListener('click', function (e) {
  document.getElementById('all-services').hidden = true;

  for (let i = 0; i <= mydata.inter_design.length; i++) {
    const prevCard = document.querySelector('.single-service');
    if (prevCard)
      prevCard.remove();
  }

  for (let i = 0; i <= mydata.inter_design.length; i++) {
     let block = `<div class="single-service d-flex">
                    <div class="service-image me-3 ">
                         <img src="src/img/si1.png" alt="">
                    </div>
                    <div class="service-text">
                         <h3>${mydata.inter_design[i].name}</h3>
                         <p>${mydata.inter_design[i].body}</p>
                    </div>
                 </div>`;
                 
    div.innerHTML += block;
    area.appendChild(div);
  }
});

thrdBtn.addEventListener('click', function (e) {
  document.getElementById('all-services').hidden = true;

  for (let i = 0; i <= mydata.architecture.length; i++) {
    const prevCard = document.querySelector('.single-service');
    if (prevCard) 
      prevCard.remove();
  }

  for (let i = 0; i <= mydata.architecture.length; i++) {
      let block = `<div class="single-service  caramel-blocks d-flex">
                    <div class="service-image me-3 ">
                         <img src="src/img/si2.png" alt="">
                    </div>
                    <div class="service-text">
                          <h3">${mydata.architecture[i].name}</h3>
                          <p>${mydata.architecture[i].body}</p>
                    </div>
                 </div>`;
    div.innerHTML += block;
    area.appendChild(div);
  }
});

lastBtn.addEventListener('click', function (e) {
  document.getElementById('all-services').hidden = true;

  for (let i = 0; i <= mydata.planning.length; i++) {
    const prevCard = document.querySelector('.single-service');
    if (prevCard) 
      prevCard.remove();
  }

  for (let i = 0; i <= mydata.planning.length; i++) {
    let block = `<div class="single-service d-flex">
                    <div class="service-image me-3 ">
                         <img src="src/img/si2.png" alt="">
                    </div>
                    <div class="service-text">
                         <h3>${mydata.planning[i].name}</h3>
                         <p>${mydata.planning[i].body}</p>
                    </div>
                 </div>`;
    div.innerHTML += block;
    area.appendChild(div);
  }
});

