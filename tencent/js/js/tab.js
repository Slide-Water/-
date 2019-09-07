// 返回顶部
let top_ = document.querySelectorAll(".right-fixed div")[2];
top_.onclick = function () {
    timer = setInterval(function () {
        var osTop = document.documentElement.scrollTop;
        document.documentElement.scrollTop = osTop - 20;
        if (osTop == 0) {
            clearInterval(timer)
        }
    }, 1)
}

//tab切换
function tab_menu_item() {
    var menu_item = $(".benzou .rongqi .lala");
    menu_item.click(function () {
        console.log(1);
        let i = $(this).index();
        $(this).addClass("yc").siblings().removeClass("yc");
        $(".benzou .kk").eq(i).show().siblings().hide();
    })
}
// 调用函数
tab_menu_item();