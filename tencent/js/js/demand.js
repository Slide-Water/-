import { myPutAjax_415 } from "../Component/ajax.js";

$(function(){
    var role = sessionStorage.role
     if(role == 1){     
    myPutAjax_415('GET',"builder/builder_demand/1",{id:1},builder)
    function builder(res){
        console.log(res)
        data_1(res[0].data)    
            $('#head').load('../pages/head.html');
            $('#footer').load('../pages/footer.html');
        }
    }
    else if(role == 0 && role ==2){
        alert('您不能访问')
    }
    else if(!role){
        alert('请登录')
    }
})

function data_1(data_1){
    console.log(data_1)
     var str_1 = ` 
     <div id="head"></div>

      <div class="resume-bg"> 
      <div class="resume-details"> 
       <div class="resume-tit"> 
        <span>需求信息</span> 
        <div class="resume-bor"></div> 
       </div> 
       <div class="resume-name"> 
        <div class="resume-block layout"> 
         <span>公司名称：${data_1.company}</span> 
         <span>需求信息：${data_1.demand_job}</span> 
         <span>需求人数：${data_1.demand_num}</span> 
        </div> 
        <div class="resume-block layout"> 
         <span>薪资：${data_1.jobs_salary}</span> 
         <span>项目计划：${data_1.project_profile}</span> 
        </div> 
        <div class="resume-none layout" style = 'display:block'> 
         <span>项目状态：${data_1.project_state_name}</span> 
         <span>工程：${data_1.project_type}</span> 
        </div> 
       </div> 
      </div> 
     </div> 
     
     <div id="footer"></div>
        `
    console.log( $('#head')[0])
    $('body').html(str_1);
}