import { istelephone, ispass, Onblur } from "../Component/holomorphy.js";

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
  console.log(username.val(), password.val(), re_password.val(), $('input[name="role"]:checked').val())
  Promise.all([
    $.ajax({
      url: "http://10.1.0.81:8000/user/register/",
      type: "POST",
      data: {
        username: username.val(),
        password: password.val(),
        re_password: re_password.val(),
        role: `${$('input[name="role"]:checked').val()}`
      }
    })
  ]).then(
    resolve => {
      console.log(resolve);
    },
    reject => {
      console.log(reject);
    }
  );
})