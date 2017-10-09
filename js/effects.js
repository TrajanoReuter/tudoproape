$(document).ready(function() {

        $('.carousel-control.left').on('mouseover',function(){
            $('a.carousel-control.left button').addClass('active');
        });
        $('.carousel-control.left').on('mouseleave',function(){
            $('a.carousel-control.left button').removeClass('active');
        });
        $('.carousel-control.right').on('mouseover',function(){
            $('a.carousel-control.right button').addClass('active');
        });
        $('.carousel-control.right').on('mouseleave',function(){
            $('a.carousel-control.right button').removeClass('active');
        });

        $('header .form-search .input-div input').on('focus',function(){
            $('header .form-search .lupa-div img').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $('header .form-search .lupa-div img').removeClass('animated shake');
            });
        });

        $('img.moment').on('mouseover', function(){
            $(this).addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated flipInY');
            });
        });

       $('button.heart').on('click',function(){
        $(this).toggleClass('active');
        $(this).addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated tada');
            });
       });

        $('button.up').on('click',function(){
            $('body').animate({scrollTop:0}, 1000);
        });
        $('.menu-mobile-div').on('click',function(){
            $('#menu-mobile').toggleClass('active');
            $('#overlay').toggleClass('active');
            $('body').toggleClass('active');
        });

});