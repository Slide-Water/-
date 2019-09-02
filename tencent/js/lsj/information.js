import {click,Layui} from "../Component/module.js";

//第一个获取点击类名
//第二个获取需要显示的类名
let li_ = $('.nav-list').find('li');
let show = $('.toggle_cont > div');
click(li_,show)

$(function () {
    $('#head').load('../head.html')
    $('#footer').load('../footer.html')
    
    //简易封装layui
    Layui('upload','#test1');
    Layui('laydate','#startTime');
    Layui('form');

}) 



console.log($('.xg'))


export {click};






