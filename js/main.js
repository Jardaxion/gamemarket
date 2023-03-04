let numPage = 1;
$(document).ready(function() {
    // Открытие/закрытие менюшки в профиле
    $('.js-openClose-menu').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $(this).next().slideToggle();
    })

    //Открытие/закрытие меню в хедере
    $('.header__menu-button').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('noScroll');
    })


    //Открытие/закрытие уведомлений
    $('.header__notific').on('click', function(e){
        let target = $(e.target);
        if(!target.is('.header__notific-content') && !target.is('.header__notific-content *')){
            $(this).toggleClass('active');
            $('.header__notific-content').toggleClass('active');
        }
    })

    //Переключение страниц на регистрации
    $('.js-next').on('click', function(e) {
        e.preventDefault();

        numPage++;
        $('.reg__right-page.active').hide();
        $('.reg__right-page[data-page="' + numPage + '"]').css({display: 'flex'});
        $('.reg__right-page[data-page="' + numPage + '"]').addClass('active');
        $('.reg__left-box--text.active').removeClass('active');
        $('.reg__left-box').each(function() {
            if($(this).children().html() == numPage){
                $(this).addClass('active');
                if($(window).width() < 960){
                    $(this).children().next().children().addClass('active');
                }
            }
        })
    })

    $('.reg__left-box').each(function() {
        if($(this).children().html() == numPage){
            $(this).addClass('active');
            if($(window).width() < 960){
                $(this).children().next().children().addClass('active');
            }
        }
    })

    // Слайдеры
    // Гланый экран
    let indexSlider = new Swiper('.slider__content-wrapper', {
        loop: true,
        navigation: {
            nextEl: '.slider__nextButton',
            prevEl: '.slider__prevButton',
        },
        pagination: {
            el: '.slider__pagination',
            clickable: true,
        }
    });

    //Слайдер на главном экране в блоке
    let blockSlider = new Swiper('.block__buttons-wrapper', {
        loop: false,
        spaceBetween: 11,
        slidesPerView: 'auto',
        width: null,
        scrollbar: {
            el: '.block__buttons-scrollbar',
        },
    });

    //Модальные окна
    //Открытие
    $('.js-open-modal').on('click', function(e){
        e.preventDefault();

        if($('.js-open-desktop-menu').hasClass('reverse')){
            openCloseMenu();
        }

        if($('.js-open-mobile-menu').hasClass('reverse')){
            openCloseMobMenu();
        }

        openModal($(this).data('modal'));
    })
    //Закрытие
    $('.js-close-modal').on('click', function(e){
        e.preventDefault();

        closeModal();
    })
    $('.modal').on('click', function(e){
        e.preventDefault();

        if(e.target === document.querySelector('.modal')){
            closeModal();
        }

    })
    //Переоткрытие
    $('.js-reOpen-modal').on('click', function(e){
        e.preventDefault();

        reOpenModal($(this).data('modal'));
    })
})

//Модальные окна
//Открытие
function openModal(id){
    $('.modal#'+id).addClass('active');
    $('.modal__background').addClass('active');
    $('body').addClass('noScroll');
}

//Закрытие
function closeModal() {
    $('.modal.active').removeClass('active');
    $('.modal__background').removeClass('active');
    $('body').removeClass('noScroll');
}

//Закрытие одного модального окна и открытие другого
function reOpenModal(id) {
    $('.modal.active').removeClass('active');
    $('.modal#'+id).addClass('active');
}