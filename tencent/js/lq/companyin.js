import {click,Layui} from "../Component/module.js";


//第一个获取点击类名
//第二个获取需要显示的类名
let btnTab=$(".sec-banner ul li");
let showHide=$(".part");
click(btnTab,showHide);


$(function() {
    $("#head").load("../head.html");
    $("#footer").load("../footer.html");
  });

