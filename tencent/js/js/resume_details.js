import {myPutAjax_415} from "../Component/ajax.js";


$(function(){

    myPutAjax_415('post',"workman/builder_browsing_workman_info/",{workman_info_id:sessionStorage.workman},workman)
    function workman(res){
        test(res[0].data.workman_info)
        $('#head').load('../pages/head.html');
        $('#footer').load('../pages/footer.html');
    }

})

function test(data){
    console.log(data)
    //console.log(data[1].data)
 
    var str=`
    <div id="head"></div>
   
    <div class="resume-bg">
<div class="resume-details">
    <div class="resume-tit">
        <span>人才信息</span>
        <div class="resume-bor"></div>
    </div>
    <div class="resume-name">
        <img src="${data.head_img}" alt="" class="resume-head">
        <div class="resume-block layout">
            <span>臻成账号：${data.worker_identifier}</span>
            <span>姓名：${data.name}</span>
            <span>性别：${data.sex}</span>
        </div>
        <div class="resume-block layout">
            <span>出生日期：${data.date_of_birth}</span>
            <span>学历：${data.edu_bkgd}</span>
            <span>居住地区：${data.w_area.parent.parent.name} ${data.w_area.parent_id} ${data.w_area.name}</span>
        </div>
        <div class="resume-none layout">
            <span>联系电话：${data.telephone}</span>
            <span>详细地址：${data.w_address}</span>
            <span>身份证号：${data.id_card_num}</span>
        </div>
    </div>
</div>
</div>
<div class="resume-bg">
<div class="resume-details">
    <div class="resume-tit">
        <span>人才信息</span>
        <div class="resume-bor"></div>
    </div>
    <div class="resume-name">
        <div class="resume-block layout">
            <span>工种：${data.type_of_work}</span>
            <span>当前状态：${data.cur_state}</span>
            <span>工作年限：${data.len_of_work}</span>
        </div>
        <div class="resume-block layout">
            <span>薪资类型：${data.exp_type}</span>
            <span>期望薪资：${data.exp_salary}</span>
            <span class='join'>合作模式：${data.role}</span>
        </div>
        <div class="resume-none layout">
            <span>工人数量：${data.worker_num}</span>
            <span>设备数量：${data.equipment_num}</span>
        </div>
        <div class="layout">
            <span>资质证书：</span>
            <img src="${data.certificate}" alt="" class="resume-books">
        </div>
    </div>
</div>
<div class="resume-btn">
    <input type="button" value="进一步沟通" id="resume-btn" onclick()>
    <input type="button" value="收藏">
    <input type="button" value="取消收藏" style="display: none;">
</div>
</div>
<div id="footer"></div>`
$("body").html(str);

}
$("body").on("click","#resume-btn",function(){
    $(".resume-none").show();
})



function fn(){
    console.log($('body .cooperation'))
}