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

var btn = document.getElementById("my1");
btn.onclick = function(){
    $("#my1").next(".modal").css("display","block");
}
