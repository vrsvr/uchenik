$(function () {

  $('.slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slider-prev slider__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slider-next slider__slider-next">Next</button>',
  });

  $('.digital__slide').slick({
    slidesToShow: 1,
    arrows: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slider-prev-digital digital__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slider-next-digital digital__slider-next">Next</button>',
  });

  $('.hits__items').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slider-prev hits__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slider-next hits__slider-next">Next</button>',
    responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }, ]
  });
  $('.services-mobile__items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slider-prev hits__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slider-next hits__slider-next">Next</button>',
    responsive: [{
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }, ]
  });
  $('#curs-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slider-prev curs__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slider-next curs__slider-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.brand__items').slick({
    slidesToShow: 4.1,
    slidesToScroll: 3,
    centerMode: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slider-prev brand__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slider-next brand__slider-next">Next</button>',
    responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 2,
          centerMode: true,
         
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          centerMode: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        }
      }
    ]
  });
  $('.sale__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
    responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: true,
        }
      },
    ]
  });

  //   $('.digital__right-inner').slick({
  //     slidesToShow: 1,
  //     arrows: true,
  //     prevArrow: '<button type="button" class="slider-prev-digital digital__slider-prev">Previous</button>',
  //     nextArrow: '<button type="button" class="slider-next-digital digital__slider-next">Next</button>',
  //     responsive: [{
  //           breakpoint: 9999,
  //           settings: "unslick"
  //       },
  //       {
  //          breakpoint: 1240,
  //          settings: {
  //          slidesToShow: 3,
  //          slidesToScroll: 1
  //       }
  //   },
  // ]
  //   });




  // $('#whitePianino').slick({
  //   slidesToShow: 3
  // });

  $(window).on('resize', function(e){

    if(window.innerWidth < 1240){

      if(!$('#base-slick').hasClass('slick-initialized')) {
        $('#base-slick').slick({
          arrows: true,
          dots: false,
          infinite: false,
          slidesToShow: 4,
          prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
          nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

        if(!$('#slick-look').hasClass('slick-initialized'))
        $('#slick-look').slick({
          arrows: true,
          dots: false,
          infinite: false,
          prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
          nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
          slidesToShow: 3.2
        });

        if(!$('#slick-license').hasClass('slick-initialized'))
        $('#slick-license').slick({
          arrows: true,
          dots: false,
          infinite: false,
          prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
          nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
          slidesToShow: 3
        });
      
        if(!$('#whitePianino').hasClass('slick-initialized'))
        $('#whitePianino').slick({
          arrows: true,
          prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
          nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
          dots: false,
          infinite: false,
          slidesToShow: 2.5,
          responsive: [
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              }
          },
        ]
        });

        if(!$('#blackPianino').hasClass('slick-initialized'))
        $('#blackPianino').slick({
          arrows: true,
          prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
          nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
          dots: false,
          infinite: false,
          slidesToShow: 2.5,
          responsive: [
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              }
            },
          ]
        });

        if(!$('#art-slick').hasClass('slick-initialized'))
        $('#art-slick').slick({
          arrows: false,
          dots: false,
          infinite: false,
          slidesToShow: 2,
          responsive: [
            {
              breakpoint: 760,
              settings: {
                dots: false
              }
            },
          ]
        });

        if(!$('#cardSlider-2').hasClass('slick-initialized'))
        $('#cardSlider-2').slick({
          arrows: true,
          prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
          nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
          dots: false,
          infinite: false,
          slidesToShow: 2.5
        });

        if(!$('#cardSlider-3').hasClass('slick-initialized'))
        $('#cardSlider-3').slick({
          arrows: true,
          prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
          nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
          dots: false,
          infinite: false,
          slidesToShow: 2.5
        });

        if(!$('#services-slick').hasClass('slick-initialized'))
        $('#services-slick').slick({
          arrows: false,
          dots: true,
          infinite: false,
          slidesToShow: 2,
          responsive: [
            {
              breakpoint: 660,
              settings: {
                dots: false,
                slidesToShow: 1,
              }
            },
          ]
        });

      };
    }
  }).trigger('resize');



  $('#cardSlider').slick({
    slidesToShow: 4.5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow: '<button type="button" class="slide-prev card__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slide-next card__slider-next">Next</button>',
    responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      }
    },
  ]
  });



  // $(window).on('resize', function(e){
  //   // Переменная, по которой узнаем запущен слайдер или нет.
  //   // Храним её в data
  //   var init = $(".card-box").data('init-slider');
  //   // Если мобильный
  //   if(window.innerWidth < 1240){
  //     // Если слайдер не запущен
  //     if(init != 1){
  //       // Запускаем слайдер и записываем в data init-slider = 1
  //       $('#blackPianino').slick({
  //         arrows: false,
  //         dots: true,
  //         slidesToShow: 2.2
  //       }).data({'init-slider': 1});
  //     }
  //   }
  // }).trigger('resize');




  // window.addEventListener("resize", function () {
  //   if (window.innerWidth <= 1240) {
  //     $('.sale__items').slick('unslick');
  //     sliderIsLive = false;
  //   } else {
  //     if (sliderIsLive) {
  //       $('.sale__items').slick();
  //       sliderIsLive = true;
  //     }
  //   }
  // });
  // window.addEventListener("resize", function () {
  //   if (window.innerWidth <= 1240) {
  //     $('.curs__items').slick('unslick');
  //     sliderIsLive = false;
  //   } else {
  //     if (sliderIsLive) {
  //       $('.curs__items').slick();
  //       sliderIsLive = true;
  //     }
  //   }
  // });

  $('a[href^="#"]').click(function(){ // #1
    let anchor = $(this).attr('href');  // #2
    $('html, body').animate({           // #3
    scrollTop:  $(anchor).offset().top  // #4
    }, 600);                            // #5
    });

  //Валидатор форм и маска для форм
  const offerFormModal = $('.offer-form-modal')
  offerFormModal.submit(function (e) {
    e.preventDefault()
  })

  offerFormModal.validate({
    errorElement: "",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      tel: {
        maskRu: true
      }
    },
    messages: {
      name: "",
      tel: ""
    },
    submitHandler: function (form) {
      const formInstance = $(form)

      console.log('submit')
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: formInstance.serialize()
      }).done(function () {
        console.log('DONE')
        formInput.val("");
        formInput.siblings().removeClass('active')
        $('.modal-wrapper-offer .success-message').addClass('show')
      });
      return false;
    }
  });
  jQuery.validator.addMethod('maskRu', function (value, element) {
    console.log(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value));
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });
  $('[name="tel"]').mask("+7(999)999-9999", {
    autoclear: false
  });

});

//Модальные окна на Pure Js
(function () {

  //Вызов окна колбека
  openCallback = document.querySelector('.openCallback');
  callbackModal = document.querySelector('.modal-wrapper__callback');

  openCallback.addEventListener('click', function () {
    openBaseModal();
    callbackModal.classList.remove('hidden');
    setTimeout(function () {
      callbackModal.classList.remove('animation');
    }, 20);
  })

  function closecallbackPopup() {
    if (!callbackModal.classList.contains('hidden')) {
      callbackModal.classList.add('animation');
      callbackModal.addEventListener('transitionend', function (e) {
        callbackModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };


  //Вызов окна колбека
  openLeftMenu = document.querySelector('.openMenu');
  leftMenuModal = document.querySelector('.modal-wrapper__left-menu');

  openLeftMenu.addEventListener('click', function () {
    openBaseModal();
    leftMenuModal.classList.remove('hidden');
    setTimeout(function () {
      leftMenuModal.classList.remove('animation');
    }, 20);
  })

  function closeleftMenuModal() {
    if (!leftMenuModal.classList.contains('hidden')) {
      leftMenuModal.classList.add('animation');
      leftMenuModal.addEventListener('transitionend', function (e) {
        leftMenuModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

  };

  function closeAllModal() {
    closecallbackPopup();
    closeleftMenuModal();
    closeBaseModal();
  };

  //База модальных окон
  body = document.querySelector('body');
  modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapperBg = document.querySelector('.modal-wrapper__bg');
  modalWrapperClose = document.querySelectorAll('.modal-wrapper__close');

  function openBaseModal() {
    body.classList.add('noflow');
    modalWrapper.classList.remove('hidden');
    setTimeout(function () {
      modalWrapper.classList.remove('animation');
    }, 20);
  };

  function closeBaseModal() {
    body.classList.remove('noflow');
    modalWrapper.classList.add('animation');
    modalWrapper.addEventListener('transitionend', function (e) {
      modalWrapper.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  };

  for (let i = 0; i < modalWrapperClose.length; i++) {
    modalWrapperClose[i].addEventListener('click', () => {
      closeAllModal();
    });
  }

  modalWrapperBg.addEventListener('click', function () {
    closeAllModal();
  })

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) {
      closeAllModal();
    }
  };

})();