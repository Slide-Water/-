let username = $('input[name="username"]');
let password = $('input[name="password"]');
let re_password = $('input[name="re_password"]');

$('button').click(function(){ 
    console.log(username.val(),password.val(),re_password.val(),$('input[name="role"]:checked').val())
    Promise.all([
        $.ajax({
          url: "http://10.1.0.81:8000/user/register/",
          type: "POST",
          data:{
            username:username.val(),
            password:password.val(),
            re_password:re_password.val(),
            role:`${$('input[name="role"]:checked').val()}`
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