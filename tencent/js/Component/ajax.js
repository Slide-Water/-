function getAjax(type, url, data){
    return new Promise.all([
        $.ajax({
          url: url,
          type: type,
          data:data
        })
      ])
}


export {getAjax};
