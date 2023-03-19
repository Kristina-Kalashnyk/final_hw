 /*window.onload = function () {
    document.body.classList.add('body[hidden]');
    window.setTimeout(function () {
      document.body.classList.add('animation');
      document.body.classList.remove('animation_hiding');
    }, 60);

  }*/

   //Функция получения текущего года
    function date_time(){
        let current_datetime = new Date();
        let year = current_datetime.getFullYear();
        return (year+' ');
    }
    //Вывод текущей даты на сайт в блок с id "current_date_time_block"
    document.getElementById('current_date_time_block').innerHTML += date_time();

    //Плавное появление блоков Blog-News
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
          else  change.target.classList.remove('element-show');
       });
    }
      
    let options = {
        threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let frstElements = document.querySelectorAll('.first-blog');
    let secElements = document.querySelectorAll('.second-blog');
     
    for (let elm of frstElements) {
        observer.observe(elm);
    }
    for (let elm of secElements) {
        observer.observe(elm);
    }
    //Прогресс-бар
    function progressBar() {
        // Узнаем на сколько страница прокручена
        let scroll = document.body.scrollTop || document.documentElement.scrollTop;
        // Узнаем высоту всей страницы
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // Получаем в % на сколько прокручена страница
        let scrolled = scroll / height * 100;
        // Подставляем % прокрутки в ширину нашей линии
        document.getElementById('progressBar').style.width = scrolled + '%';
    }
    // Запуск функции, когда пользователь скролит
    window.addEventListener('scroll', progressBar);

    //Бездействие на странице
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
				      
					// Разметка для карточки
				      const html = `<div class="card">
                            <h2 class="card-city">${data.location.name} <span>${data.location.country}</span></h2>
                            <div class="card-weather">
                                <div class="card-value">${data.current.temp_c}<sup>°c</sup></div>
                                <img class="card-img" src="./src/img/clouds.jpg" alt="Weather">
                            </div>
                            <div class="card-description">${data.current.condition.text}</div>
                        </div>`;

				// Отображаем карточку на странице
				success.insertAdjacentHTML('beforebegin', html);
			});

      }

      //Local Storage
      function show() {
        alert('hi');
      }
      let forma = document.getElementById('forma');
      let subscribe = document.querySelector('#send');

      forma.addEventListener('submit', function(e) {
        e.preventDefault();
              
        /*let itemsArray = [];
        localStorage.setItem('items', JSON.stringify(itemsArray));
        const data = JSON.parse(localStorage.getItem('items'));*/
      });

      subscribe.addEventListener('click', function(e) {
        let inputName = document.getElementById('name').value;
        let inputSurname = document.getElementById('surname').value;
        let inputEmail = document.getElementById('email').value;

        localStorage.setItem('inputName', inputName);      
        localStorage.setItem('inputSurname', inputSurname);
        localStorage.setItem('inputEmail', inputEmail);

        if (inputName === "Krystyna")
        show();
      });

      //What we do
      let firstBtn = document.getElementById('all');
      
      firstBtn.addEventListener('click', function(e) {
        document.body.classList.add("active");
      })

   

