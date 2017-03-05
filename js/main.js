/**
 * Created by hughes on 2017/3/4.
 */
data = {
                "id":"549",
                "title":"《习近平用典》",
                "content":"衙斋卧听萧萧竹，疑是民间疾苦声。些小吾曹州县吏，一枝一叶总关情。——《在参加兰考县委常委班子专题民主生活会时的讲话》等文中引用。",
                "extra0":"出处：﹝清﹞郑燮《潍县署中画竹呈年伯包大中丞括》",
                "extra1":"解读：小官有大作用。习近平同志多次强调基层干部的作用。2013年11月26日，他在菏泽市座谈时，还特意给在场市、县委书记们念了一副对联：“得一官不荣，失一官不辱，勿道一官无用，地方全靠一官；穿百姓之衣，吃百姓之饭，莫以百姓可欺，自己也是百姓。”他说，封建时代官吏尚有这样的认识，今天我们共产党人应该比这个境界高得多。习近平同志推崇的干部，大多级别不高，多在基层任职，但都“干在实处、走在前列”。",
                "type":"zhongguomeng"  // zhongguomeng, sigequanmian, gushidiangu    部分gushidiangu类型extra会有内容
};
var question_link = "https://redrock.cqupt.edu.cn/praise_xi_shanbei/Home/Index/questions";
var rank_link = "https://redrock.cqupt.edu.cn/praise_xi_shanbei/Home/Index/rank";
$(function(){
    $.mobile.loading('show');
    $.post(rank_link,1,function(data){
        $.mobile.loading('hide');
        if(data.status == 200){
            var aList = $('.aName');
            $('.usrName').html(data.data.nickname);
            $('.class').html(data.data.rank);
            for (var i = 0 ; i < 10 ; i++){
                aList.eq(i+1).html(data.list[i].nickname);
            }
        }else {
            alert(data.info);
        }
    });
});

