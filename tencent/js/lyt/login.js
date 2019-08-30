// var list_ = $('.login-list').find('li');
// var none_ = $('.login-none').find('li');
// list_.click(function () {
//     $(this).addClass('login-li').siblings().removeClass('login-li');
//     var index = $(this).index();
//     none_.eq(index).addClass('show').siblings().removeClass('show');
// })
let username = $('input[type="text"]');
let password = $('input[type="password"]');
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
          console.log(resolve);
        },
        reject => {
          console.log(reject);
        }
      );
})