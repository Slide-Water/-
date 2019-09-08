
import {getAjax1} from "./Component/ajax.js";

$(function(){
    //引入头部
    $('#head').load('./pages/head.html');
    $("#footer").load("./pages/footer.html"); 
    $('.lunb .center').remove()
})


//一
getAjax1('GET', 'developers/home_page_developers_demand_num/').then(
        resolve => {
          // console.log(resolve)
          $(".pr-num1").html(`<p class="tekel">${resolve[0].data.total}</p> <p class="tekel1">项目数量</p>`)
        },
        reject => {
          console.log(reject);
        }
    );
    //二
    getAjax1('GET', 'builder/builder_demand_num/').then(
      resolve => {
        // console.log(resolve)
        $(".pr-num2").html(`<p class="tekel">${resolve[0].data.total}</p> <p class="tekel1">职位数量</p>`)
        // console.log(resolve[0].data.total)
      },
      reject => {
        console.log(reject);
      }
  );
  
   //三
   getAjax1('GET', 'workman/workmannumber/').then(
    resolve => {
      $(".pr-num3").html(`<p class="tekel">${resolve[0].data.total}</p> <p class="tekel1"> 人才数量</p>`)
    },
    reject => {
      console.log(reject);
    }
);

   //TAB
    getAjax1('GET', 'developers/get_developers_top/').then(
      resolve => {
        var str = '';
        for(var j = 0;j < 5;j++){
          str += `
          <li class="poster-item  zturn-item">
                
          <div class="for_btn">
            
            <a href="javascript:void(0)" class="in_page" value=${resolve[0].data[j].id}><img src="${resolve[0].data[j].company_img}" /></a>
          </div>
    
          <div class="students_star">
          
            <div class="zwjs">
              ${resolve[0].data[j].com_name}
            </div>
          </div>
        </li>
            `
        }
        $('#zturn').html(str);
       // top_kf(resolve[0].data)
         var aa=new zturn({
          id:"zturn",
          opacity:0.9,
          width:382,
          Awidth:1024,
          scale:0.9
      })
      //setTimeout(aa,10000)
      $('.in_page').click(function(){
        var role = sessionStorage.role;
        if(role == 1){
          sessionStorage.setItem('developers',this.getAttribute('value'))
          location.href = './pages/firm_details.html'
        }
        else if(role == 0){
          alert('没权限')
        }
        else{
          alert('请登录')
        }
      })
      },
      reject => {
        console.log(reject);
      }
  )



  getAjax1('GET', 'builder/get_top_five/').then(
    resolve => {
    console.log(resolve)
      var str = '';
      for(var j = 0;j < 5;j++){
        str += `
        <li class="poster-item  zturn-item">
              
        <div class="for_btn">
          
          <a href="javascript:viod(0)" class="in_page1" value=${resolve[0].data[j].id}><img src="image/2222.png" /></a>
        </div>
  
        <div class="students_star">
        
          <div class="zwjs">
            ${resolve[0].data[j].com_name}
          </div>
        </div>
      </li>
          `
      }
      $('#zturn1').html(str);
     // top_kf(resolve[0].data)
       var aa=new zturn({
        id:"zturn1",
        opacity:0.9,
        width:382,
        Awidth:1024,
        scale:0.9
    })
    //setTimeout(aa,10000)
    $('.in_page1').click(function(){
      var role = sessionStorage.role;
      if(!role){
        alert('请登录')
      }
      else{
        sessionStorage.setItem('developers',this.getAttribute('value'))
        location.href = './pages/firm_details.html'
      }
    })
    },
    reject => {
      console.log(reject);
    }
)








   //需求

   getAjax1('GET', 'builder/get_builder_new_demand/').then(
    resolve => {
        var str = '';
        for(var j = 0;j < 3;j++){
          str += `
          <h4>施工过程技术咨询</h4>
    
          <div class="progress-talk">
              <a href="javascript:vodi(0)" value=${resolve[0].data[0].id}>
              <p class="zuo">￥${resolve[0].data[0].demand_job}</p>
              <p class="zhong">${resolve[0].data[0].project_type}</p>
              <p class="you">${resolve[0].data[0].project_state}</p>
              </a>
          </div>
          <div class="progress-talk">
          <a href="javascript:void(0);" value=${resolve[0].data[1].id}>
          <p class="zuo">￥${resolve[0].data[0].demand_job}</p>
          <p class="zhong">${resolve[0].data[0].project_type}</p>
          <p class="you">${resolve[0].data[0].project_state}</p>
          </a>
          </div>
          <div class="progress-talk">
          <a href="javascript:void(0);" value=${resolve[0].data[2].id}>
          <p class="zuo">￥${resolve[0].data[0].demand_job}</p>
          <p class="zhong">${resolve[0].data[0].project_type}</p>
          <p class="you">${resolve[0].data[0].project_state}</p>
          </a>
          </div>
          <div class="progress-talk">
          <a href="javascript:void(0);" value=${resolve[0].data[3].id}>
          <p class="zuo">￥${resolve[0].data[0].demand_job}</p>
          <p class="zhong">${resolve[0].data[0].project_type}</p>
          <p class="you">${resolve[0].data[0].project_state}</p>
          </a>
          </div>
            `
        }
        $('.box2').html(str);
        $('.progress-talk a').click(function(){
          // location.href=`../tencent/html/footer.html?${$(this).attr("value")}`;
          sessionStorage.params=$(this).attr("value");
        })
      reject => {
        console.log(reject);
      }
    });
   
    // getAjax1('GET', 'builder/get_builder_new_demand/',{XXX:sessionStorage.params},sessionStorage.access)


    getAjax1('GET', 'developers/home_page_developers_New_demand/').then(
      resolve => {
          var str = '';
          for(var j = 0;j < 3;j++){
            str += `
            <h4>施工过程技术咨询</h4>
            <div class="progress-talk">
            <a href="javascript:void(0);" value=${resolve[0].data.results[j].id}>
            <p class="zuo">￥${resolve[0].data.results[j].building_certificate}</p>
            <p class="zhong">${resolve[0].data.results[j].company}</p>
            <p class="you">${resolve[0].data.results[j].project_type}</p>
            </a>
         </div>
          <div class="progress-talk">
         <a href="javascript:void(0);" value=${resolve[0].data.results[1].id}>
         <p class="zuo">￥${resolve[0].data.results[j].building_certificate}</p>
        <p class="zhong">${resolve[0].data.results[j].company}</p>
          <p class="you">${resolve[0].data.results[j].project_type}</p>
        </a>
        </div>
        <div class="progress-talk">
        <a href="javascript:void(0);" value=${resolve[0].data.results[2].id}>
        <p class="zuo">￥${resolve[0].data.results[j].building_certificate}</p>
        <p class="zhong">${resolve[0].data.results[0].company}</p>
        <p class="you">${resolve[0].data.results[0].project_type}</p>
        </a>
        </div>
        <div class="progress-talk">
        <a href="javascript:void(0);" value=${resolve[0].data.results[3].id}>
        <p class="zuo">￥${resolve[0].data.results[j].building_certificate}</p>
        <p class="zhong">${resolve[0].data.results[j].company}</p>
        <p class="you">${resolve[0].data.results[j].project_type}</p>
        </a>
        </div>
              `
          }
          $('.box1').html(str);
         $('.progress-talk a').click(function(){
           sessionStorage.setItem('build',this.getAttribute('value'))
           location.href = './pages/demand.html'
         })
        reject => {
          console.log(reject);
        }
      });