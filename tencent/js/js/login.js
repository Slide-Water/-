import {getAjax,getAjax1} from "../Component/ajax.js";

let username = $('input[type="text"]')[0];
let password = $('input[type="password"]')[0];


$('button').click(function(){ 
  getAjax('POST', 'user/api/token/', {
    username:username.value,
    password:password.value
  }).then(
        resolve => {
          console.log(resolve)
          if(resolve[0].code == 200){
            alert('登录成功');
            sessionStorage.setItem('access',resolve[0].data.access)
            sessionStorage.setItem('refresh',resolve[0].data.refresh)
            sessionStorage.setItem('role',resolve[0].data.role)
            sessionStorage.setItem('username',resolve[0].data.username)
            location.href = '../index.html'
          }else if(resolve[0].code == 422){
              alert('密码错误')
          }
        },
        reject => {
          console.log(reject);
        }
      );
})








