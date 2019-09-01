function getAjax(type, url, data){
    return  Promise.all([
        $.ajax({
          url: url,
          type: type,
          data:data
        })
      ])
}


export {getAjax};
