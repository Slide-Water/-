$(function () {
    $('#head').load('../head.html')
    $('#footer').load('../footer.html')
})

let li_ = $('.nav-list').find('li');
let show = $('.toggle_cont > div');

//第一个获取点击类名
//第二个获取需要显示的类名
click(li_,show)
function click(li_,show) {
    li_.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var idx = $(this).index();
        show.eq(idx).addClass('show').siblings().removeClass('show');
    })
}


