/**
 * Created by hughes on 2017/3/4.
 */
var question_link = "https://redrock.cqupt.edu.cn/praise_xi_shanbei/Home/Index/questions";
var rank_link = "https://redrock.cqupt.edu.cn/praise_xi_shanbei/Home/Index/rank";
$(function(){
    $.mobile.loading('show');
    $.post(rank_link,1,function(data){
        $.mobile.loading('hide');
        if(data.status == 200){
            var aList = $('.aName');
            $('.usrName').html(data.data.nickname);
            $('.rankNum').html(data.data.rank);
            console.log(data.data);
            for (var i = 0 ; i < 10 ; i++){
                aList.eq(i+1).html(data.data.list[i].nickname);
            }
        }else {
            alert(data.info);
        }
    });
});

