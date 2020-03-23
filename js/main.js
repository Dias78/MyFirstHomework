/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

});
*/


$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20)
  bullets.css('left', prev.width() + 20)

  new WOW().init();


  //Валидация формы

  $('.modal__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }

       error.insertAfter($(element));
    },
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: {
        required: true
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя должно быть не больше пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      policyCheckbox: "Если согласны, ставьте галочку",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите корректный email"
      }
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

  $('.control__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }

       error.insertAfter($(element));
    },
    rules: {
      // строчное правило
      firstName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      firstPhone: "required",
      firstCheckbox: {
        required: true,
      }
    },
    errorElement: "div",
    // сообщения
    messages: {
      firstName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя должно быть не больше пятнадцати букв"
      },
      firstPhone: "Телефон обязателен",
      firstCheckbox: "Если согласны, ставьте галочку"
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

  $('.footer__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }

       error.insertAfter($(element));
    },
    rules: {
      // строчное правило
      lastName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      lastPhone: "required",
      lastCheckbox: {
        required: true
      },
      // правило-объект (блок)
      lastQuestion: {
        required: true,
      }
    },
    errorElement: "div",
    // сообщения
    messages: {
      lastName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя должно быть не больше пятнадцати букв"
      },
      lastPhone: "Телефон обязателен",
      lastCheckbox: "Если согласны, ставьте галочку",
      lastQuestion: {
        required: "Введите свой вопрос"
      }
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

  // создание яндекс карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [43.250744, 76.956847],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Этот ЖК оцеплен из-за коронавируса',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);


  });

});