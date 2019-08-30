//第一个获取点击类名
//第二个获取需要显示的类名
function click(li_,show) {
    li_.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var idx = $(this).index();
        show.eq(idx).addClass('show').siblings().removeClass('show');
    })
}
var btnTab=$(".sec-banner ul li");
var showHide=$(".part");
click(btnTab,showHide);

$(function() {
    $("#head").load("../head.html");
    $("#footer").load("../footer.html");
  });