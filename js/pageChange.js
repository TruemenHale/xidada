/**
 * Created by hughes on 2017/3/4.
 */
var timer = null;
var timeNum = 3;
var nextFlag = 0;
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
    });

    $('.playBtn').on('click',function(){
        clearInterval(timer);
        timer = setInterval(function(){
            timeNum--;
            $('.time').html(timeNum);
            if (timeNum == 1){
                clearInterval(timer);
                nextFlag = 1;
                $('.nextBtn').css('background','images/blankBtn.png');
            }
        },1000);
        $.mobile.loading('show');
        $.post(question_link,1,function(data){
            $.mobile.loading('hide');
            if(data.status == 200){
                if(data.data.type == 'gushidiangu'){
                    $('.allusion').css('display','block');
                    $('.conversation').css('display','none');
                    if(data.data.extra0){
                        $('.refrence').html(data.data.content);
                        $('.via').html(data.data.extra0);
                        $('.explain').html(data.data.extra1);
                    }else {
                        $('.refrence').html(data.data.content);
                        $('.box').css('display','none');
                        $('.box').eq(0).css('display','block');
                    }
                }else{
                    $('.conversation').css('display','block');
                    $('.allusion').css('display','none');
                    $('.sentences').html(data.data.content);
                }
                $.mobile.changePage('#gamePage',{
                    transition:'flow'
                });
            }else{
                alert(data.info);
            }
        });
    });

    $('.nextBtn').on('click',function(){
        if (!nextFlag){
            return false;
        }
        nextFlag = 0;
        var _data = {};
        _data.new = "true";
        $.post(question_link,_data,function(data){
            if(data.status == 200){

            }else{
                alert(data.info);
            }
        });
        //$.mobile.changePage('#overPage',{
        //    transition:'flow'
        //});
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
    $('.return').on('click',function(){
        $.mobile.changePage('#beginPage',{
            transition:'flow'
        });
    });
});