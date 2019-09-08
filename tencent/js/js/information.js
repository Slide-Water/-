import { img_send, tuo_img, file_send, date, form, click } from "../Component/module.js";
import { getAjax, getAjax1 } from "../Component/ajax.js";
$(function () {
    $('#head').load('./head.html')
    $('#footer').load('./footer.html')
    let role = sessionStorage.getItem('role')
    if (typeof(sessionStorage.role) == "undefined") {
        $(".toggle_cont").remove();
        $(".nav-list").remove();
        $(".container").eq(1).after('<div class="container power"><p>您还没有登录</p><a href="./login.html">请登录</a></div>')
    }  
      else  if (role!= 0) {
            $(".toggle_cont").remove();
            $(".nav-list").remove();    
            $(".container").eq(1).after('<div class="container power"><p>不好意思！您没有权限访问</p></div>')

        }
        //工人
        else if (role == 0) {
             //正常渲染
             getAjax('GET','workman/get_workman_info/',null,sessionStorage.access).then(
                 resolve=>{
                     console.log(resolve)
                     if(resolve[0].code == 200){
                         //简历
                        resume(resolve[0].data)

                        var idx = sessionStorage.getItem("index");
                        li_.eq(idx).addClass('active').siblings().removeClass('active');
                        show.eq(idx).addClass('show').siblings().removeClass('show');

                     }else if(resolve[0].code == 404){
                        
                     }
                 },
                 reject=>{
                     console.log(reject)
                 }
             )
                $('input[name=username]').attr("value",sessionStorage.username);
                $('.dh').eq(0).html(sessionStorage.username);
         }
     //非工人
})



//第一个获取点击类名
//第二个获取需要显示的类名
let li_ = $('.nav-list').find('li');
let show = $('.toggle_cont > div');
//调用tab切换


$('.t-name .right').find('button').click(function () {
    $(this).addClass('bg-color').siblings().removeClass('bg-color');
})
//简易封装layui
img_send("#test1", "#demo1")
img_send("#test2", "#demo2")
date('#startTime')
//tab切换


click(li_, show)

//省市联动
form()






$('body').on('click', '#create', function () {
    layui.use('form', function () {
        var form = layui.form;
        form.on('submit(create)', function (data) {
            var form = new FormData(form)
            var dataVal = data.field
            //工种 
            form.append("type_of_work_id", dataVal.type_of_work_id)
            //地区
            form.append("w_area_id", dataVal.city3)
            //头像
            form.append("head_img", data.form[18].files[0])
            //资质
            form.append("certificate", data.form[16].files[0])
            //姓名
            form.append("name", dataVal.name)
            //日期
            form.append("date_of_birth", dataVal.date)
            //手机号码
            form.append("telephone", dataVal.telephone)
            //身份证
            form.append("id_card_num", dataVal.identity_card)
            //性别
            form.append("sex", dataVal.sex)
            //学历
            form.append("edu_bkgd", dataVal.edu_bkgd)
            //薪资
            form.append("exp_type", dataVal.exp_type)
            //状态
            form.append("cur_state", dataVal.cur_state)
            //工作年限
            form.append("len_of_work", dataVal.len_of_work)
            //合作模式
            form.append("role", dataVal.quiz5)
            //详细地址
            form.append("w_address", dataVal.w_address)
           
            myPutAjax(form)
            return false;
        })
    });
})



//添加
//myPutAjax(form)
function myPutAjax(form) {
    getAjax1("post", "workman/workmaninfo/", form, sessionStorage.access).then(
        resolve => {
            if (resolve[0].code == 200) {
                console.log(resolve)
            }
            if (resolve[0].code == 601) {
                //刷新令牌
                getAjax('post', 'user/api/token/refresh/', {
                    refresh: sessionStorage.refresh
                }).then(
                    resolve => {
                        sessionStorage.setItem('access', data.access);
                        myPutAjax(form)
                    },
                    reject => {
                        console.log(reject)
                    }
                )
            }
        },
        reject => {
            console.log(reject)
        }
    )
    location.reload() 
}


//简历
function resume(data){
    //移除添加
    $('.nav-list').eq(1).find('li').eq(0).css('display','none');
    $('.nav-list').eq(1).find('li').eq(1).addClass('active');
    $('.rc').removeClass('show')
    $('.gz').addClass('show')

    $('.hello').eq(0).html(`<h1>${data.name},你好！</h1>`)
    $('.jl').eq(0).html(`<div class="jl-left d-flex align-items-center">
    <img src="${data.head_img}"alt="">
    </div>
    <div class="jl-center d-flex align-items-center">
    <div class="center-cont"><div class="center-title">
    <h1>我的简历</h1></div> 
    <p>更新 : ${data.data_of_birth}</p>
    <div><i></i><span>${data.name}</span>
    <span>${data.sex}</span>
    <span>${data.name}</span>
    <span>2年工作经验</span>
    <span>先居住${data.w_area.parent_id}-${data.w_area.name}</span></div>
    <div><i></i><span>${data.type_of_work}</span><span>成都建筑工程集团总公司</span></div></div>
    </div><div class="jl-right d-flex align-items-center">
    <div class="right-cont">
    <input type="button" value="刷新"><input type="button" value="更改" class = 'alter'></div>
    </div>
    `)

    //更改
    $('.alter').eq(0).click(function(){
        $('.nav-list').eq(1).find('li').eq(0).css('display','block');
        $('.nav-list').eq(1).find('li').eq(0).addClass('active');
        $('.nav-list').eq(1).find('li').eq(1).removeClass('active');
        $('.gz').removeClass('show')
        $('.rc').addClass('show')
    })
}


