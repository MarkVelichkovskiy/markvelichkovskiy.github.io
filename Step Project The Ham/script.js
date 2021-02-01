$(document).ready(function () {

    $(document).on('click', '.services-menu-item', function () {
        $('.services-menu-item').removeClass('active');
        $(this).addClass('active');
        $('.services-item').removeClass('active').eq($(this).index()).addClass('active');
    });


    let index = 1;
    let measure = 4;
    selectCurrentSmall();

    let moveNext = function(counter) {
        if (counter > 0) {
            let items = $('.reviews-item');
            let width = items.parent().width();
            let current = $($(items[0]));
            current.animate({marginLeft: `-${width}px`}, 1000/counter, 'linear', function () {
                current.css({'margin':'0'});
                $('.reviews-slide ul').append(current);
                moveNext(counter-1);
            });
        }
    };

    let movePrev = function(counter) {
        if (counter > 0) {
            let items = $('.reviews-item');
            let width = items.parent().width();
            let current = $($(items[items.length-1])).css({'margin-left':`-${width}px`});

            $('.reviews-slide ul').prepend(current);
            current.animate({marginLeft: `0`}, 1000/counter ,'linear', function () {
                movePrev(counter-1);
            });
        }
    };

    $(document).on('click', '#slideNext', function (a) {
        a.preventDefault();
        moveNext(1);
        deleteSelectCurrentSmall();
        index++;
        if (index > measure) {
            index = 1;
            let smallItems = $('.reviews-item-img.small');
            for (let i = 0; i < 4; i++) {
                $(smallItems[i]).removeClass('active');
                $('.reviews-mini-slide').append(smallItems[i]);
            }

            smallItems = $('.reviews-item-img.small');
            for (let i = 0; i < 4; i++) {
                $(smallItems[i]).addClass('active');
            }
        }
        selectCurrentSmall();
    });

    $(document).on('click', '#slidePrev', function (a) {
        a.preventDefault();
        movePrev(1);
        deleteSelectCurrentSmall();
        index--;
        if (index < 1) {
            index = measure;
            let smallItems = $('.reviews-item-img.small');
            for (let i = smallItems.length-1; i > smallItems.length-1 - measure; i--) {
                $(smallItems[i]).addClass('active');
                $('.reviews-mini-slide').prepend(smallItems[i]);
            }

            smallItems = $('.reviews-item-img.small');
            for (let i = smallItems.length-1; i > smallItems.length-1 - measure; i--) {
                $(smallItems[i]).removeClass('active');
            }
        }
        selectCurrentSmall();
    });

    $(document).on('click', '.reviews-item-img.small', function (a) {
        a.preventDefault();
        deleteSelectCurrentSmall();
        let attr = $(this).attr('data-info');
        attr = attr>4? attr%4: attr;

        if (attr > index) {
            moveNext(attr-index);
            index = attr;
        } else if(attr < index) {
            movePrev(index-attr);
            index = attr;
        }
        selectCurrentSmall();

    });

    let link = $('.nav-buttons');
    link.click(function (a) {
        a.preventDefault();
        $('body, html').animate({
            scrollTop: $($(this).children()[0].hash).offset().top,
        },1000);
    });


    $(function () {
        let maxItemCount = 12;
        let type = "All";
        let item = $(".grid-item");
        item.slice(0, maxItemCount).show();
        $('.amazing-work-nav-item').click(function (a) {
            a.preventDefault();
            item.hide();
            type = ($(this).attr("data-info"));
            if(type === "All"){
                item.slice(0, maxItemCount).show();
            } else{
                item.show();
                item.not(`.${type}`).hide();
                item.filter(`.${type}`).slice(maxItemCount).hide();
            }

        });
        $(".load-more-button").click(function(a){
            a.preventDefault();
            $('#button-plus').hide();
            $('#button-text').hide();
            $('#loader').show();
            setTimeout(function() {
                if (maxItemCount < 36){
                    maxItemCount += 12;
                }
                if(type === "All"){
                    item.slice(0, maxItemCount).show();
                } else {
                    item.filter(`.${type}`).slice(0, maxItemCount).show();
                }

                $('#button-plus').show();
                $('#button-text').show();
                $('#loader').hide();

                if (maxItemCount === 36){
                    $(".load-more-button").fadeOut();
                }
            }, getRandomInt(15, 30)*100);

        });

    });


    function selectCurrentSmall() {
        $($('.reviews-item-img.small.active')[index-1]).css({
            'border-color':'#18cfab',
            'align-self': 'baseline'
        });
    }

    function deleteSelectCurrentSmall() {
        $($('.reviews-item-img.small.active')[index-1]).css({
            'border-color':'rgba(31, 218, 181, 0.2)',
            'align-self': 'auto'
        });
    }


    let $grid = $('.masonry').masonry({
        itemSelector: '.item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: 15
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    $(".gallery-button").click(function(a) {
        a.preventDefault();
        $('#gallery-button-plus').hide();
        $('#gallery-button-text').hide();
        $('#gallery-loader').show();
        setTimeout(function() {
            let elems = $('<div></div>', {class:'item'}).append($('<img>',{src:`img/masonry/${getRandomInt(1,7)}.jpg`}));
            $grid.append(elems).masonry('appended', elems);
            elems = $('<div></div>', {class:'item'}).append($('<img>',{src:`img/masonry/${getRandomInt(1,7)}.jpg`}));
            $grid.append(elems).masonry('appended', elems);
            elems = $('<div></div>', {class:'item'}).append($('<img>',{src:`img/masonry/${getRandomInt(1,7)}.jpg`}));
            $grid.append(elems).masonry('appended', elems);
            $('#gallery-button-plus').show();
            $('#gallery-button-text').show();
            $('#gallery-loader').hide();
            if(($grid).children().length > 30){
                $(".gallery-button").hide();
            }

        }, getRandomInt(3, 10)*100);
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});

