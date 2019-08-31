function click(li_,show) {
    li_.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var idx = $(this).index();
        show.eq(idx).addClass('show').siblings().removeClass('show');
    })
}


function Layui(class_,id_){ 
    layui.use(class_, function(){
      //上传图片组件
        if(class_ == 'upload'){
            var $ = layui.jquery
            ,upload = layui.upload;
            //普通图片上传
            var uploadInst = upload.render({
        elem: id_
        ,url: '/upload/'
        ,before: function(obj){
          //预读本地文件示例，不支持ie8
          obj.preview(function(index, file, result){
            $('#demo1').attr('src', result); //图片链接（base64）
          });
        }
        ,done: function(res){
          //如果上传失败
          if(res.code > 0){
            return layer.msg('上传失败');
          }
          //上传成功
        }
        ,error: function(){
          //演示失败状态，并实现重传
          var demoText = $('#demoText');
          demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
          demoText.find('.demo-reload').on('click', function(){
            uploadInst.upload();
          });
        }
      });
        //日期组件
        }else if(class_ == 'laydate'){
          var laydate = layui.laydate;
          //日期
          laydate.render({
              elem: id_,
              trigger: 'click'
          });
        }

       //下拉框组件
       else if(class_ == 'form'){
        var form = layui.form; 
        form.render();
       }
    })
}



export {click,Layui};