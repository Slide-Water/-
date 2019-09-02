import {getAjax} from "../Component/ajax.js";

let username = $('input[type="text"]');
let password = $('input[type="password"]');
$('button').click(function(){ 
  var taskOne = getAjax('post', 'http://10.2.2.247:8000/user/api/token/', {username:username.val(),password:password.val()});
  taskOne.then(
        resolve => {
          console.log(resolve[0].data)
          // sessionStorage.setItem("key",{
          //   "access":resolve[0].data.access,
          //   "refresh":resolve[0].data.refresh,
          //   "role":resolve[0].data.role
          // })
          sessionStorage.setItem('access',resolve[0].data.access),
          sessionStorage.setItem('refresh',resolve[0].data.refresh),
          sessionStorage.setItem('role',resolve[0].data.role)
          //location.href='../../html/demo.html'
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


