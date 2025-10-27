    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.buttons').addClass("sticky");
            }else {
                $('.buttons').removeClass("sticky");
            }
        });
        //toggle menu/button script
        $('.menu-button').click(function(){
            $('.buttons .menu').toggleClass("active");
            $('.menu-button i').toggleClass("active");
        });
    
            $('.menu li a').click(function(){
            $('.buttons .menu').removeClass("active");
            $('.menu-button i').removeClass("active");
        });
    });

    