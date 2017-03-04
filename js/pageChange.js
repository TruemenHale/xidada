/**
 * Created by hughes on 2017/3/4.
 */
$(function () {
   $('.startBtn').on('click',function(){
        $.mobile.changePage('#backPage',{
            transition:'flow'
        });
    });
    $('.listBtn').on('click',function(){
        $.mobile.changePage('#listPage',{
            transition:'turn'
        });
    });
    $('.returnBtn').on('click',function(){
        $.mobile.changePage('#beginPage',{
            transition:'flow'
        });
    })
    $('.playBtn').on('click',function(){
        $.mobile.changePage('#gamePage',{
            transition:'flow'
        });
    });
    $('.nextBtn').on('click',function(){
        $.mobile.changePage('#overPage',{
            transition:'flow'
        });
    });
    $('.goOver').on('click',function(){
       $('.firstState').css('display','none');
        $('.secondState').css('display','block');
    });
    $('.ok').on('click',function(){
        $.mobile.changePage('#beginPage',{
            transition:'flow'
        });
    });
    $('.replay').on('click',function(){
        $('.secondState').css('display','none');
        $('.firstState').css('display','block');
        $.mobile.changePage('#gamePage',{
            transition:'flow'
        });
    });
});