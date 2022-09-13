
$(window).scroll(function() {

    let wScroll = $(this).scrollTop();

    $('h1').css({
        'transform' : 'translate(0px,'+wScroll+'%)'
    });

    $('.kotak').css({
        'transform' : 'translate(0px, '+wScroll/10+'%)'
    })

    $('p').css({
        'transform' : 'translate(0px, '+wScroll/10+'%)'
    })

    $('h2').css({
        'opacity' : '1',
        'transform' : 'translate('+wScroll/60+'%, 0px)'
    })
});



