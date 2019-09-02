import { getAjax } from "./Component/ajax.js";


let pass = $('#pass');
let newpass = $('#newpass');
let newpass1 = $('#newpass1');
$('#btn').click(function () {
    var putajax = getAjax('put', 'http://10.2.2.247:8000/user/change_password/', {input_password: pass.val(),new_password: newpass.val(),re_password: newpass1.val()}, sessionStorage.access);
    putajax.then(
        resolve => {
            if (resolve[0].code == 601) {
                getAjax('post', 'http://10.2.2.247:8000/user/api/token/refresh/', {
                    refresh: sessionStorage.refresh
                }).then(
                    resolve => {
                        sessionStorage.setItem('access', resolve[0].data.access);
                        console.log(resolve[0].data.access);
                        getAjax('put', 'http://10.2.2.247:8000/user/change_password/', {input_password: pass.val(),new_password: newpass.val(),re_password: newpass1.val()}, sessionStorage.access)
                        //putajax;
                    },
                    reject => {
                        console.log(reject)
                    }
                )
            }
            console.log(resolve);
        },
        reject => {
            console.log(reject);
        }
    )
//     var ajaxPromise = new Promise(function(resolve) {
//         resolve();
//     });
//     ajaxPromise.then(function() {
//         return $.ajax({
//             url: 'http://10.2.2.247:8000/user/change_password/',
//             type: 'put',
//             data: { input_password: pass.val(),new_password: newpass.val(),re_password: newpass1.val() },
//             dataType: 'json',
//             headers:{"Authorization":"Bearer " + sessionStorage.access},  
//             success: function(data) {
//                 console.log(data);
//                 return data;
//             }
//         });
//     }).then(function(data) {
//         if(data.code == 601){
//             return $.ajax({
//                 url: 'http://10.2.2.247:8000/user/api/token/refresh/',
//                 type: 'POST',
//                 data: {refresh: sessionStorage.refresh},
//                 dataType: 'json',
//                 success: function(data) {
//                     console.log(data.data)
//                     sessionStorage.setItem('access', data.data.access);
//                 }
//         });
//     }
// }).then(function() {
//      $.ajax({
//         url: 'http://10.2.2.247:8000/user/change_password/',
//         type: 'put',
//         data: { input_password: pass.val(),new_password: newpass.val(),re_password: newpass1.val() },
//         dataType: 'json',
//         headers:{"Authorization":"Bearer " + sessionStorage.access},  
//         success: function(data) {
//             console.log(data);
//             }
//         });
//     })
})