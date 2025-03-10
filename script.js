$(function() {
    var zIndex = 1, endTop = 0, endLeft = 450;

    function randRotation(el) {
        var rot = Math.round(Math.random() * 90 - 45);
        return $(el).css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
        });
    }

    $('.gallery li').each(function() {
        randRotation(this).css({
            top: Math.round(Math.random() * 50 - 25),
            left: Math.round(Math.random() * 50 - 25),
            'zIndex': zIndex++
        })
        .click(function() {
            var myZindex = $(this).css('zIndex');
            $('.gallery li').not(this).each(function() {
                if ($(this).css('zIndex') > myZindex) {
                    $(this).css('zIndex', $(this).css('zIndex') - 1);
                }
            });
            if (!$(this).is('.active')) {
                $(this).toggleClass('active')
                .animate({
                    top: endTop,
                    left: endLeft
                })
                .css({ zIndex: $('.gallery li').length });
                
                // Büyütme işlemi
                $(this).find('video').css({ width: '650px', height: 'auto' });

                var activated = $('.gallery .active').not(this);
                activated.length && activated.click();
            } else {
                $('.gallery li').each(function() {
                    $(this).css('zIndex', parseInt($(this).css('zIndex'), 10) + 1);
                });
                randRotation($(this).toggleClass('active'))
                .animate({
                    top: Math.round(Math.random() * 50 - 25),
                    left: Math.round(Math.random() * 50 - 25)
                }).css({ zIndex: 1 });
                
                // Küçültme işlemi
                $(this).find('video').css({ width: '160px', height: 'auto' });
            }
        });
    });
});
