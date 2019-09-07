import {img_send, tuo_img, file_send, date, form,get_address_json} from "../Component/module.js";
import {getAjax,getAjax1} from "../Component/ajax.js";
import {str1,str2,str3,str4,str5,str6} from "../Component/content.js";
import {dstr1,dstr2,dstr3} from "../Component/content2.js";
var role = sessionStorage.role;
// 工人
  //开发商
  if(role === "2"){
    $(function() {
        // 更改字体内容
      // if(sessionStorage.getItem('role')){
      //   $(".ad").remove();
      //   $(".sec-banner").remove();
      //   $("section").remove(); 
      // }
        $("#head").load("../head.html");
        $("#footer").load("../footer.html");
        fnc();
        layUi();
      });
      //封装那坨layui
      function fnc(){
        img_send('#test1',"127.0.0.1","#demo1")
        img_send('#test2',"127.0.0.1","#demo2")
        img_send('#test3',"127.0.0.1","#demo3")
        img_send('#test4',"127.0.0.1","#demo4")
        img_send('#test5',"127.0.0.1","#demo5")
        tuo_img("127.0.0.1")  
      }
      //封装分页layui
      function layUi(count){
        console.log(count);
        layui.use(['laypage', 'layer'], function(){
          var laypage = layui.laypage
          ,layer = layui.layer;    
          //总页数低于页码总数
          laypage.render({
            elem: 'demo0'
            ,count: count//数据总数
            ,limit:5,  //每页显示条数
          });
          laypage.render({
            elem: 'demo6'
            ,count: count//数据总数
            ,limit:5,  //每页显示条数
          });
        })
        
      }
      //点击按钮
    var dom1=$(".sec-banner ul li").eq(0);
      dom1.click(function(){
        $(".part1").html(dstr1);
        $(this).addClass('borderBlue').siblings().removeClass('borderBlue');
        //省市联动
    get_address_json(0, $('select[name=provence]'), function () {
      $('select[name=provence]').change()
    });
    
    $('select[name=provence]').on('change', function () {
      get_address_json($(this).val(), $('select[name=area]'), function () {
          $('select[name=area]').change()
      })
    });
    $('select[name=area]').on('change', function () {
      get_address_json($(this).val(), $('select[name=city]'))
    })
    $("#head").load("../head.html");
    $("#footer").load("../footer.html");
    //调用layui
      fnc();
      layUi();
      }).click()
      //企业入驻信息提交
      bulidMess()
     
    var dom2=$(".sec-banner ul li").eq(1);
    //发布任务
    dom2.click(function(){
      $(".part1").html(dstr2);
      $(this).addClass('borderBlue').siblings().removeClass('borderBlue');
    })
    //我的项目
    issue();
    
    
    //3.开发商查看自己发布的需求
    var dom3=$(".sec-banner ul li").eq(2);
    dom3.click(function(){
      $(".part1").html(dstr3);
      $(this).addClass('borderBlue').siblings().removeClass('borderBlue');
      getAjax("GET","/developers/developers_look_all_demand/",{page:1},'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTY3NzY4MTk0LCJqdGkiOiJkOWUwN2Y2ZTUxNWE0ZDg2YjE5Y2U3MWZiYzczNmMyZSIsInVzZXJfaWQiOjE2LCJ1c2VybmFtZSI6Imhvd3RpbWUiLCJyb2xlIjoxfQ.HgpvNaSiVYCgbZRGrPaU7D-_SGNQ0ipjNqiIgWKVG2A').then(res=>{
        console.log(res);
        let readyPro=``
        layUi(res[0].data.count);
        for(let i=0;i<res[0].data.results.length;i++){
          readyPro+=`<div class="sc-info">
          <div class="sc-bh">
              <label><input name="all" type="checkbox" value="" class="all" />编号</label>
              <span>${res[0].data.results[i].id}</span>
          </div>
          <div class="sc-j">
              <div class="d-flex justify-content-around">
                  <p>${res[0].data.results[i].company}</p>
                  <p>${res[0].data.results[i].project_type}</p>
                  <p>${res[0].data.results[i].engineering_address}</p>
                  <p>${res[0].data.results[i].contract_amount}</p>
                  <p>${res[0].data.results[i].project_state_name}</p>
              </div>
          </div>
          <div class="sc-xg">
              <a href="javascricp:void(0)">查看</a>
              <a href="javascricp:void(0)">更新</a>
          </div>
      </div>`;
        }    
           $('.sc-c1').html(readyPro);
      },rej=>{
        console.log(rej)
      })
      // layUi();
      fnc();
    })
    //layui发送ajax请求
    $(document).on('click',' .layui-laypage [data-page]',function(){
        let pageNum=$(this).attr('data-page')
        console.log($('#demo0 .layui-laypage a[data-page]'));
        
        let readyPro=``;
        getAjax1("GET","/developers/developers_look_all_demand/",{page:pageNum},'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTY3NzY4MTk0LCJqdGkiOiJkOWUwN2Y2ZTUxNWE0ZDg2YjE5Y2U3MWZiYzczNmMyZSIsInVzZXJfaWQiOjE2LCJ1c2VybmFtZSI6Imhvd3RpbWUiLCJyb2xlIjoxfQ.HgpvNaSiVYCgbZRGrPaU7D-_SGNQ0ipjNqiIgWKVG2A').then(res=>{
    
          for(let i=0;i<res[0].data.results.length;i++){
            readyPro+=`<div class="sc-info">
            <div class="sc-bh">
                <label><input name="all" type="checkbox" value="" class="all" />编号</label>
                <span>${res[0].data.results[i].id}</span>
            </div>
            <div class="sc-j">
                <div class="d-flex justify-content-around">
                <p>${res[0].data.results[i].company}</p>
                <p>${res[0].data.results[i].project_type}</p>
                <p>${res[0].data.results[i].engineering_address}</p>
                <p>${res[0].data.results[i].contract_amount}</p>
                <p>${res[0].data.results[i].project_state_name}</p>
                </div>
            </div>
            <div class="sc-xg">
                <a href="javascricp:void(0)">查看</a>
                <a href="javascricp:void(0)">更新</a>
            </div>
        </div>`;
          }
             $('.sc-c1').html(readyPro);
        })
    })
    // $(document).on(
    //   $('.layui-laypage [data-page]').click(function(){
    //     console.log(1);
    //   })
    // )
    var dom4=$(".sec-banner ul li").eq(3);
    var dom5=$(".sec-banner ul li").eq(4);
    var dom6=$(".sec-banner ul li").eq(5);
    // 默认第一次点击
    
    // tabClick(dom2,$(".part1"),dstr2);
    // tabClick(dom3,$(".part1"),dstr3);
    // tabClick(dom4,$(".part1"),dstr4);
    // tabClick(dom5,$(".part1"),dstr5);
    // tabClick(dom6,$(".part1"),dstr6);
    //建筑商字段
    
    
    //开发商字段
    
    // $("body").on("click",".btn-mess2",function(){
    //   myPutAjax()
    // })
    
    //1.开发商填写信息
    function bulidMess(){
    //公司名称
    var com_name=$(".com_name");
    //公司详细地址
    var com_address =$(".com_address");
    //法人身份证id
    var legal_rep_id=$(".legal_rep_id");
    //注册日期
    var register_time=$(".register_time");
    //营业执照
    var business_license=$(".business_license")
    //法人代表
    var legal_rep=$(".legal_rep");
    //公司电话
    var telephone=$(".telephone");
    var certificate_description=$(".certificate_description");
    //公司规模
    var com_scale=$(".com_scale");
    //公司简介
    var com_profile=$(".com_profile");
    $("body").on("click","#create",function(){
      var form_data = $('#form_data')[0];
      var form=new FormData(form_data);
      //图片
      var qualifications = $('.layui-upload-file')[0].files[0];
      //logo图片
      var logo_img = $('.layui-upload-file')[1].files[0];
      //营业执照
      var business_license_img = $('.layui-upload-file')[2].files[0];
      //手持身份证正面
      var positive_id =  $('.layui-upload-file')[3].files[0];
      //手持身份证反面
      var back_id = $('.layui-upload-file')[4].files[0];
      //添加
      form.append('address_area_id',$('#cityId option:selected').val())//必填字段
      form.append('business_license_img',business_license_img)
      form.append('certificate',qualifications)
      form.append('company_img',logo_img)
      form.append('legal_rep_id_img_top',positive_id)
      form.append('legal_rep_id_img_back',back_id)
      form.append('com_name',com_name.val())
      form.append('com_address',com_address.val())
      form.append('legal_rep_id',legal_rep_id.val())
      form.append('register_time',register_time.val())
      form.append('business_license',business_license.val())
      form.append('telephone',telephone.val())
      form.append('legal_rep',legal_rep.val())
      form.append('certificate_description',certificate_description.val())
      form.append('com_scale',com_scale.val())
      form.append('com_profile',com_profile.val())
      //添加
      myPutAjax(form)
    })
    
    }
    //2.开发商发布需求
    function issue(){
       //发布任务字段
      // var project_type_id =$(".project_type_id option:selected");
      // var demand_job_id =$(".demand_job_id option:selected");
      var engineering_address =$(".engineering_address");
      var contract_amount = $(".contract_amount");
      var project_profile=$(".project_profile")
      var project_name = $('.project_name');
      var building_certificate=$(".building_certificate");
      $("body").on("click",".btn-mess2",function(){
        let form_data2 = $('#form_data2')[0];
        let formdata= new FormData(form_data2);
        //console.log(form2.append)
        //form2.append('project_name',"1")
        formdata.append("name",1);
        // form2 = {
        //   'project_name':project_name.val(),
        //   'project_profile':project_profile.val(),
        //   'jobs_salary':jobs_salary.val(),
        //   'demand_num':demand_num.val(),
        //   'demand_job_id':demand_job_id.val(),
        //   'project_type_id':project_type_id.val(),
        //   'project_state':$('.project_state input:checked').val()
        //    }
        // form2.append('project_name',1)
        // form2.append('project_profile',2)
        // form2.append('jobs_salary',jobs_salary.val())
        // form2.append('demand_num',demand_num.val())
        // form2.append('demand_job_id',demand_job_id.val())
        // form2.append('project_type_id',project_type_id.val())
        // var Myneed={
        //   project_name:project_name.val(),
        //   project_state:$('.project_state input:checked').val(),
        //   project_type_id:project_type_id.val(),
        //   demand_job_id:demand_job_id.val(),
        //   demand_num:demand_num.val(),
        //   jobs_salary:jobs_salary.val(),
        //   project_profile:project_profile.val()
        // }
    
        //3./builder/get_builder_own_demand/
        //  /developers/get_builder_collect_demand/建筑商收藏
     
    
    
    
    
    
    
        Promise.all([
          $.ajax({ 
            url: 'http://132.232.6.121:8000/developers/developers_demand/',
            type: 'POST',
            data:{
              project_state:$('.project_state input:checked').val(),
              engineering_address:$('.engineering_address').val(),
              contract_amount:$('.contract_amount').val(),
              project_profile:$('.project_profile').val(),
              project_name:$('.project_name').val(),
              building_certificate:$('.building_certificate').val(),
              project_type_id:$(".project_type_id option:selected").val()
            },
            headers:{"Authorization":"Bearer " + sessionStorage.access},
          })
       ]).then(
         resolve => {
          console.log('ok')
         },
         reject => {
           console.log('ok')
         }
       )
      //  myPutAjax1(formdata)
      })
    }
    
     function myPutAjax(form){
      getAjax("post","/developers/developers_info/",form,sessionStorage.access).then(
        resolve=>{
          if (resolve[0].code == 200){
            console.log(resolve)
          }
          if (resolve[0].code == 601) {
            //刷新令牌
              getAjax1('post', '/user/api/token/refresh/', {
                  refresh: sessionStorage.refresh
              }).then(
                  resolve => {
                      sessionStorage.setItem('access', resolve[0].data.access);
                      //myPutAjax()
                  },
                  reject => {
                      console.log(reject)
                  }
              )
          }
        },
        reject=>{
          console.log(reject)
        }
      )
     }
    //点击上传图片隐藏button
    $("body").on("click",".send-myhead button",function(){
      $(this).css("background","rgba(255,255,255,0)")
    })
    //  function myPutAjax1(form2){
      
    //  }
 }