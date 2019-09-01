// var list_ = $('.login-list').find('li');
// var none_ = $('.login-none').find('li');
// list_.click(function () {
//     $(this).addClass('login-li').siblings().removeClass('login-li');
//     var index = $(this).index();
//     none_.eq(index).addClass('show').siblings().removeClass('show');
// })
let username = $('input[type="text"]');
let password = $('input[type="password"]');
import {getAjax} from "../Component/ajax.js";
var taskOne = getAjax('GET', 'http://127.0.0.1:8080/us', {username:username.val(),password:password.val()});

$('button').click(function(){ 
    Promise.all([
        $.ajax({
          url: "http://10.1.0.81:8000/user/api/token/",
          type: "POST",
          data:{
            username:username.val(),
            password:password.val()
          }
        })
      ]).then(
        resolve => {

          console.log(resolve)

          //  sessionStorage.setItem('token1',resolve[0].data.refresh,resolve[0].data.access,resolve[0].data.role)
           //location.href='../lq/companyin.html'
        },
        reject => {
          console.log(reject);
        }
      );
})

//正常登录，token,refresh同时存本地


//首页拿数据,token,
//if (resolve.code==200){
           
//}else if(resolve.code=401){//用户没有登录,没有带token情况，跳转到登录
 // Promise.all('')
//}//601token五分钟过期,带上refresh,覆盖token
 //602失效，refresh，登录(跳转登录)


