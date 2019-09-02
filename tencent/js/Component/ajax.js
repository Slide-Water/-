function getAjax(type, url, data,token){
    return Promise.all([
       $.ajax({
          url: url,
          type: type,
          data:data,
          headers:{"Authorization":"Bearer " + token}  
        })
     ])
}



export {getAjax};
