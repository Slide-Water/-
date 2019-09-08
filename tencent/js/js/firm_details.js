import { myPutAjax_415, getAjax } from "../Component/ajax.js";
$(function () {
    var role = sessionStorage.role
    if (role == 0) {
        console.log('ok')
        myPutAjax_415('post', "builder/browsing_history_builder_info/", {
            builder_info_id:sessionStorage.build
        }, builder)
        function builder(res) {
            console.log(res)
            data_1(res[0].data.builder_info)
            $('#head').load('../pages/head.html');
            $('#footer').load('../pages/footer.html');
        }
    }
    else if(role == 1){     
    myPutAjax_415('post',"developers/browsing_history_developers_info/",{developers_info_id:sessionStorage.developers},builder)
    function builder(res){
        console.log(res)
        data_1(res[0].data.developers_info)    
            $('#head').load('../pages/head.html');
            $('#footer').load('../pages/footer.html');
        }
    }
    else if(role == 2){
        myPutAjax_415('post', "builder/dev_browsing_history_builder_info/", {
            builder_info_id:sessionStorage.build
        }, builder)
        function builder(res) {
            console.log(res)
            data_1(res[0].data.builder_info)    
            $('#head').load('../pages/head.html');
            $('#footer').load('../pages/footer.html');
        }
    }

    else if(!role){

    }
})

function data_1(data_1){
    console.log(data_1)
     var str_1 = ` 
     <div id="head"></div>

      <div class="resume-bg"> 
      <div class="resume-details"> 
       <div class="resume-tit"> 
        <span>公司信息</span> 
        <div class="resume-bor"></div> 
       </div> 
       <div class="resume-name"> 
        <div class="resume-block layout"> 
         <span>公司名称：${data_1.com_name}</span> 
         <span>营业执照号：${data_1.business_license}</span> 
         <span>注册日期：${data_1.register_time}</span> 
        </div> 
        <div class="resume-block layout"> 
         <span>法人代表：${data_1.legal_rep}</span> 
         <span>公司规模：${data_1.com_scale}</span> 
        </div> 
        <div class="resume-none layout"> 
         <span>邮箱：${data_1.e_mail}</span> 
         <span>法人身份证号：${data_1.legal_rep_id}</span> 
         <span>公司详细地址：${data_1.address_area}</span> 
        </div> 
       </div> 
      </div> 
     </div> 
     <div class="resume-bg"> 
      <div class="resume-details"> 
       <div class="resume-tit"> 
        <span>公司资质</span> 
        <div class="resume-bor"></div> 
       </div> 
       <div class="resume-name"> 
        <div class="resume-block layout"> 
         <span>证书说明：${data_1.certificate_description}</span> 
         <div class="resume-a"> 
         </div> 
         <span class="resume-g">营业执照:<img src="${data_1.business_license_img}" alt=""></span> 
         <div class="resume-gar"></div> 
        </div> 
       </div> 
      </div> 
      <div class="resume-btn"> 
       <input type="button" value="进一步沟通" /> 
       <input type="button" value="收藏" /> 
       <input type="button" value="取消收藏" style="display: none;" /> 
      </div> 
     </div>
     
     <div id="footer"></div>
        `
    console.log( $('#head')[0])
    $('body').html(str_1);
}
