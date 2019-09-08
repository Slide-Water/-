function getAjax(type, url, data,token){
    return  Promise.all([
        $.ajax({
          url: 'http://132.232.6.121:8000/' + url,
          type: type,
          data:data,
          headers:{"Authorization":"Bearer " + token}  
        })
     ])
}


function getAjax1(type, url, data,token){
  return  Promise.all([
      $.ajax({ 
        processData:false,
        contentType:false,
        url: 'http://132.232.6.121:8000/' + url,
        type: type,
        data:data,
        headers:{
          "Authorization":"Bearer " + token,
      },
      })
   ])
}

function myPutAjax(type,url,data,fn) {
  getAjax1(type, url, data,sessionStorage.access).then(
      resolve => {
          if (resolve[0].code == 200) {
             return fn(resolve)
          }
          if (resolve[0].code == 601) {
              //刷新令牌
              getAjax('post', 'user/api/token/refresh/', {
                  refresh: sessionStorage.refresh
              }).then(
                  resolve => {
                      sessionStorage.setItem('access', data.access);
                      myPutAjax(type,url,data)
                  },
                  reject => {
                      console.log(reject)
                  }
              )
          }
      },
      reject => {
          console.log(reject)
      }
  )
}

function myPutAjax_415(type,url,data,fn) {
    getAjax(type, url, data,sessionStorage.access).then(
        resolve => {
            if (resolve[0].code == 200) {
               return fn(resolve)
            }
            if (resolve[0].code == 601) {
                //刷新令牌
                getAjax('post', 'user/api/token/refresh/', {
                    refresh: sessionStorage.refresh
                }).then(
                    resolve => {
                        sessionStorage.setItem('access', data.access);
                        myPutAjax(type,url,data)
                    },
                    reject => {
                        console.log(reject)
                    }
                )
            }
        },
        reject => {
            console.log(reject)
        }
    )
  }
  
export {getAjax,getAjax1,myPutAjax,myPutAjax_415};


