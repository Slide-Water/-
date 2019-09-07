import { istelephone, ispass, Onblur } from "../Component/holomorphy.js";
import {getAjax} from "../Component/ajax.js";

let username = $('input[name="username"]')[0];
let password = $('input[name="password"]')[0];
let re_password = $('input[name="re_password"]')[0];

Onblur(username, istelephone);
Onblur(password, ispass);
//确认密码
re_password.onblur = function () {
  if (password.value == re_password.value) {
    this.style.border = '1px solid green';
  } else {
    this.style.border = '1px solid red';
  }
}
$('button').click(function () {
    if(istelephone(username.value) && ispass(password.value)  && password.value == re_password.value){
        if($('input[name="role"]').is(':checked')){
              if($('input[name="agreement"]').is(':checked')){
                getAjax('POST', 'user/register/', {
                  username: username.value,
                  password: password.value,
                  re_password: re_password.value,
                  role: `${$('input[name="role"]:checked').val()}`
                }).then(
                  resolve => {
                    console.log(resolve)
                    if(resolve[0].code == 422){
                      alert('用户名已存在')
                    }
                    if(resolve[0].code == 200){
                      alert('注册成功')
                      location.href = './login.html'
                    }
                  },
                  reject => {
                    console.log(reject);
                  }
                );
              }
        }else{
          alert('请选择 您是建筑师 or 开发商 or 工人')
        }
    }
})


