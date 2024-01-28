$(window).on('load', function () {
    function initSliders () {
        if ($('.js-range-slider.mdc-slider').parents('html').length > 0) {
            const rangeSlider1 = new mdc.slider.MDCSlider(document.querySelector('.form-field-slider-1 .js-range-slider.mdc-slider'));
            rangeSlider1.root.addEventListener('MDCSlider:change', (e) => {
                // todo
                // if (e.detail.thumb === 1) {
                //     $('.js-range-input-from').val(e.detail.value)
                //         .prev().text(e.detail.value)
                // } else if (e.detail.thumb === 2) {
                //     $('.js-range-input-to').val(e.detail.value)
                //         .prev().text(e.detail.value)
                // }
            });
            const rangeSlider2 = new mdc.slider.MDCSlider(document.querySelector('.form-field-slider-2 .js-range-slider.mdc-slider'));
            rangeSlider2.root.addEventListener('MDCSlider:change', (e) => {
                // todo
            });
        }
    }

    initSliders();
});

$(() => {
    $(".js-button-anchor").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("data-to");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });
});

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});


// header
$(() => {
    $('.js-show-menu').on('click', function () {
        $('body').addClass('fixed');
        $('.menu').addClass('active');
    });

    $('.js-hide-menu').on('click', function () {
        $('body').removeClass('fixed');
        $('.menu').removeClass('active');
    });
})

// containers
$(() => {
    $(document).on('click', function (e) {
        var container = $('.header');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.layout').removeClass('blur');
            $('.header-search__base').removeClass('active');
            $('.search-dropdown').removeClass('active');
        }
    });
});


$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false,
        scrolling: true,
    });

    $('.js-close-fancybox').on('click', function () {
        $.fancybox.close();
    });
});



