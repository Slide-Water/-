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

  function ajax(url,type,data){
    $.ajax({
        url: `${url}`,
        type: `${type}`,
        data:data
    }).then(
      resolve => {
        if(resolve[0].code===200){
           console.log(resolve);
        }else if(resolve[0].code===601){
            $.ajax({
                
            })
        }
      },
      reject => {
        console.log(reject);
      }
    );
  }