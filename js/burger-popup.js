/*let popup = (function (options) {

    let consist = document.querySelector(options.consist);
    let popup = document.querySelector(options.popup);
    //   let body = document.querySelector('body');

    let _toggleMenu = function (e) {
        consist.classList.toggle('burgers__consist_active');
        popup.classList.toggle('burgers__consist-popup_open');
        // body.classList.toggle('body-active-menu');
    }

    let addListeners = function () {
        consist.addEventListener('click', _toggleMenu);
    }

    return {
        init: addListeners
    };
})({
    consist: '#consist',
    popup: '#consist-popup'
});

popup.init();
// прокрутка при нажатии на стрелки вправо или влево
$('.arrow').click(function(e){
    e.preventDefault();
    var $this = $(this),
        container = $('.burgers-section__slider'),
        items = $('.slider__item', container),
        activeItem = items.filter('.active'),
        existedItem, edgeItem, reqItem;

    if ($this.hasClass('arrow-right')) { //вперед
        existedItem = activeItem.next();
        edgeItem = items.first();
    }
    if ($this.hasClass('arrow-left')) { //назад
        existedItem = activeItem.prev();
        edgeItem = items.last();
    }

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

    moveSlide(container, reqItem);
});
};
slider();*/

/*$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}

$(document).ready(function() {
    $(".comment__button").click(function(){
        $(".b-pop").addClass("open");
    })
});*/

//Модальное окно

$('body').on('click', '.trigger', function(e){
    e.preventDefault();
    $('#'+$(this).attr('data-id')).modal().open();
});
/*
var showFullReview = function() {
    // открытие модального окна
    $('.reviews__link').click(function(e) {
        e.preventDefault();
        var container = $(this).closest('.reviews__info'),
            name = container.children('.reviews__name').text(),
            comment = container.children('.reviews__text').text();
        showModal = function() {
            $('.modalReview__title').text(name);
            $('.modalReview__content').text(comment);
        }
        showModal();


        $('.modalReview').removeClass('visuallyHidden');
        $('.navigation__dots').css('z-index', '-1');
        scrollControl(false);
        if (!$('.modalReview').hasClass('visuallyHidden')) {
            //закрытие окна модалки при клике на крестик
            $('.modalReview__close').click(function(e){
                e.preventDefault()
                $('.modalReview').addClass('visuallyHidden');
                scrollControl(true);
                $('.navigation__dots').css('z-index', '3');
            });
            // закрыие окна модалки при клике вне области
            $('.modalReview').click(function(e){
                if ($('.modalReview__container').has(e.target).length === 0) {
                    $('.modalReview').addClass('visuallyHidden');
                    scrollControl(true);
                    $('.navigation__dots').css('z-index', '3');
                }
            });
        };

    });
};
showFullReview();
*/