$(function () {
    $('.monitor .tab span').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        $('.content').eq($(this).index()).show().siblings('.content').hide()
    })
    $('.carousel-view .row').on({
        mouseenter: function () {
            $(this).addClass('active').siblings().removeClass('active')
        },
        mouseleave: function () {
            $('.carousel-view .row').removeClass('active')
        }
    })

    function lunbo() {
        $('.lunbo').css('top', 0)
        $('.lunbo').animate({
            top: -175
        }, 5000, 'linear', function () {
            lunbo()
        })
    }
    lunbo();



    let orderData = [{
            orders: '20,301,987',
            amount: '99834'
        },
        {
            orders: '301,987',
            amount: '9834'
        },
        {
            orders: '1,987',
            amount: '3834'
        },
        {
            orders: '987',
            amount: '834'
        }
    ];

    $('.filter a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.order .item:eq(0) h3').text(orderData[$(this).index()].orders);
        $('.order .item:eq(1) h3').text(orderData[$(this).index()].amount)
    });

    $('.caption a').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });




    let hotData = [{
            name: '可爱多',
            num: '9,086'
        },
        {
            name: '娃哈哈',
            num: '8,341'
        },
        {
            name: '喜之郎',
            num: '7,407'
        },
        {
            name: '八喜',
            num: '6,080'
        },
        {
            name: '小洋人',
            num: '6,724'
        },
        {
            name: '好多鱼',
            num: '2,170'
        },
    ];

    $('.cup li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');

        hotData.push(hotData.shift());

        let str = '';

        for (let i = 0; i < hotData.length; i++) {
            str += '<li>' +
                '<span>' +
                '</span>' + hotData[i].name + '<span>' +
                '<span class = "icon-up"style = "color: #ed3f35;" ></span>' +
                hotData[i].num +
                ' </span>' +
                '</li>'
        }

        $('.cup:eq(1)').html(str)
    });





})